// Getting Button From HTML

const startBtn = document.getElementById("start"); // Start Button
const stopBtn = document.getElementById("stop"); // Stop Button
const resetBtn = document.getElementById("reset"); // Reset Button

// Getting HH, MM , SS , MS, Id's From HTML

let hoursID = document.getElementById("hours");
let minutesID = document.getElementById("minutes");
let secondsID = document.getElementById("seconds");
let milliSecondsID = document.getElementById("milliseconds");

let hoursIncrement = 0;
let minutesIncrement = 0;
let secondsIncrement = 0;
let milliSecondsIncrement = 0;

const startFunc = () => {
  intervalID = setInterval(() => {
    // console.log(milliSecondsIncrement++);
    milliSecondsID.textContent = milliSecondsIncrement++;

    if (milliSecondsIncrement === 100) {
      secondsIncrement++;
      secondsID.textContent = secondsIncrement;
      milliSecondsIncrement = 0;
    }
    if (secondsIncrement === 60) {
      minutesIncrement++;
      minutesID.textContent = minutesIncrement;
      secondsIncrement = 0;
    }
    if (minutesIncrement === 60) {
      hoursIncrement++;
      hoursID.textContent = hoursIncrement;
      minutesIncrement = 0;
    }
    // console.log(milliSecondsID)
  }, 10);
  startBtn.disable = true
};

startBtn.addEventListener('click', startFunc)
stopBtn.addEventListener('click',)
resetBtn.addEventListener('click', )
