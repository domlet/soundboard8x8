// main.js
// App entry point and button events

const rowColors = [
  { row: 8, velocity: 5, hex: "#FF0000" },
  { row: 7, velocity: 9, hex: "#FFA500" },
  { row: 6, velocity: 124, hex: "#CCCC00" },
  { row: 5, velocity: 17, hex: "#00FF00" },
  { row: 4, velocity: 29, hex: "#00FFFF" },
  { row: 3, velocity: 46, hex: "#1a8cf0" },
  { row: 2, velocity: 57, hex: "#FF00FF" },
  { row: 1, velocity: 119, hex: "#DDDDDD" },
];

document.getElementById("start").addEventListener("click", () => {
  Object.values(soundMap).forEach((audio) => {
    audio
      .play()
      .then(() => audio.pause())
      .catch(() => {});
  });
  document.getElementById("status").textContent =
    "Audio unlocked. Launchpad ready.";
});

window.addEventListener("keydown", () => {
  Object.values(soundMap).forEach((audio) => {
    audio
      .play()
      .then(() => audio.pause())
      .catch(() => {});
  });
  document.getElementById("status").textContent =
    "Audio unlocked. Launchpad ready.";
});

document.getElementById("reconnect").addEventListener("click", reconnectMIDI);

createGridUI(rowColors);
setupButtonControls();
initMIDI();

document.getElementById("allColors").addEventListener("click", () => {
  if (!midiOutput) {
    document.getElementById("status").textContent = "Launchpad not connected.";
    return;
  }

  const allNotes = [];
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      allNotes.push(row * 10 + col);
    }
  }

  // Turn off all pads
  allNotes.forEach((note) => {
    midiOutput.send([144, note, 0]);
  });

  let velocity = 0;
  const stepInterval = 5000 / 128; // 5 seconds total

  const interval = setInterval(() => {
    allNotes.forEach((note) => {
      midiOutput.send([144, note, velocity]);
    });
    velocity++;
    if (velocity > 127) {
      clearInterval(interval);
    }
  }, stepInterval);
});

document.getElementById("colorIndex").addEventListener("click", () => {
  if (!midiOutput) {
    document.getElementById("status").textContent = "Launchpad not connected.";
    return;
  }

  const pads = [];
  for (let row = 8; row >= 1; row--) {
    for (let col = 1; col <= 8; col++) {
      pads.push(row * 10 + col);
    }
  }

  pads.forEach((note, index) => {
    const velocity = Math.floor((index / (pads.length - 1)) * 127);
    midiOutput.send([144, note, velocity]);

    // Optionally match UI color
    const padEl = document.querySelector(`.pad[data-note="${note}"]`);
    if (padEl) {
      padEl.style.backgroundColor = `hsl(${(velocity * 2.8) % 360}, 100%, 50%)`;
    }
  });
});
