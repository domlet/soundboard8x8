// buttonActions.js
// controls to preview button colors on device

function setupButtonControls() {
  const velocityInput = document.getElementById("velocityValue");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");

  function applyVelocityToAllPads(value) {
    const clamped = Math.max(0, Math.min(127, value));
    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 8; col++) {
        const note = row * 10 + col;
        if (midiOutput) midiOutput.send([144, note, clamped]);
        const pad = document.querySelector(`.pad[data-note="${note}"]`);
        if (pad) pad.style.backgroundColor = "#888";
      }
    }
  }

  velocityInput.addEventListener("blur", () => {
    const value = parseInt(velocityInput.value);
    const clamped = isNaN(value) ? 0 : Math.max(0, Math.min(127, value));
    velocityInput.value = clamped;
    applyVelocityToAllPads(clamped);
  });

  incrementBtn.addEventListener("click", () => {
    let value = parseInt(velocityInput.value) || 0;
    value = Math.min(127, value + 1);
    velocityInput.value = value;
    applyVelocityToAllPads(value);
  });

  decrementBtn.addEventListener("click", () => {
    let value = parseInt(velocityInput.value) || 0;
    value = Math.max(0, value - 1);
    velocityInput.value = value;
    applyVelocityToAllPads(value);
  });
}
