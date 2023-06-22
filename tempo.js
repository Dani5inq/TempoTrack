const apiKey = "";
const timerElement = document.getElementById("timer");
const startButtonElement = document.getElementById("start");
const stopButtonElement = document.getElementById("stop");
const resetButtonElement = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerElement.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonElement.disabled = true;
  stopButtonElement.disabled = false;
}

function formatTime(elapsedTime) {
  const miliseconds = Math.floor((elapsedTime % 1000) / 10);

  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (mins ? (mins > 9 ? mins : "0" + mins) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (miliseconds > 9 ? miliseconds : "0" + miliseconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
}

function resetTimer() {
  elapsedTime = 0;

  timerElement.textContent = "00 : 00 : 00";
  clearInterval(timerInterval);
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
}

startButtonElement.addEventListener("click", startTimer);
stopButtonElement.addEventListener("click", stopTimer);
resetButtonElement.addEventListener("click", resetTimer);
