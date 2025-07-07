// midiHandlers.js
// Handles MIDI setup, connection, and input

let midiOutput = null;

function onMIDISuccess(midiAccess) {
  for (let input of midiAccess.inputs.values()) {
    if (input.name.includes("Launchpad")) {
      input.onmidimessage = handleMIDIMessage;
    }
  }
  for (let output of midiAccess.outputs.values()) {
    if (output.name.includes("Launchpad")) {
      midiOutput = output;
      document.getElementById("status").textContent = "Launchpad connected: " + output.name;
      lightGrid();
    }
  }
}

function onMIDIFailure() {
  document.getElementById("status").textContent = "Failed to access MIDI.";
}

function handleMIDIMessage(message) {
  const [statusByte, note, velocity] = message.data;
  if (statusByte === 144 && velocity > 0 && soundMap[note]) {
    soundMap[note].currentTime = 0;
    soundMap[note].play();
  }
}

function initMIDI() {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  } else {
    document.getElementById("status").textContent = "Web MIDI not supported.";
  }
}

function reconnectMIDI() {
  document.getElementById("status").textContent = "Reconnecting...";
  initMIDI();
}

function lightGrid() {
  if (!midiOutput) return;
  rowColors.forEach(({ row, velocity, hex }) => {
    for (let col = 1; col <= 8; col++) {
      const note = row * 10 + col;
      midiOutput.send([144, note, velocity]);
      const pad = document.querySelector(`.pad[data-note="${note}"]`);
      if (pad) {
        pad.style.backgroundColor = hex;
        pad.classList.add([6, 1].includes(row) ? "black-text" : "white-text");
        pad.classList.remove([6, 1].includes(row) ? "white-text" : "black-text");
      }
    }
  });
}