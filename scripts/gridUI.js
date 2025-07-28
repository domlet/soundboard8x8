// gridUI.js
// Creates the 8x8 Launchpad button grid in the browser

function createGridUI(rowColors) {
  const grid = document.getElementById("padGrid");

  rowColors.forEach(({ row, hex }) => {
    for (let col = 1; col <= 8; col++) {
      const note = row * 10 + col;
      const pad = document.createElement("div");
      pad.className = "pad";
      pad.dataset.note = note;
      pad.textContent = note;
      pad.style.backgroundColor = hex;
      pad.classList.add([6, 1].includes(row) ? "black-text" : "white-text");
      pad.addEventListener("click", () => {
        if (soundMap[note]) {
          soundMap[note].currentTime = 0;
          soundMap[note].play();
          console.log(soundMap[note].src);
          flashOverlay(); // 🔔 Flash screen
        }
      });
      grid.appendChild(pad);
    }
  });
}
