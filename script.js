// Variable Declarations
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");
const clockTimer = document.querySelector(".clock-timer");
const lapTimer = document.querySelector(".lap-timer");
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval;

// Start functionality
startBtn.addEventListener("click", function () {
  timeInterval = setInterval(runTimer, 750);
  clockTimer.play();
});

// reset functionality
resetBtn.addEventListener("click", function () {
  clearInterval(timeInterval);
  secondsText.innerText = seconds = "00";
  minutesText.innerText = seconds = "00";
  hoursText.innerText = seconds = "00";
  lapTimer.play();
  clockTimer.pause();
  clockTimer.remove();
});

// Stop functionality

stopBtn.addEventListener("click", function () {
  let stopText = clearInterval(timeInterval);
  console.log(timeInterval);
  clockTimer.pause();
  lapTimer.play();
});


function runTimer() {

  // Calculates Seconds
  seconds++;
  if (seconds <= 9) {
    secondsText.innerText = '0' + seconds;
  } else if (seconds > 9) {
    secondsText.innerText = seconds;
  }
  // Calculates Minutes
  if (seconds >= 60) {
    minutes++;
    minutesText.innerText = '0' + minutes;
    seconds = 0;
    secondsText.innerText = '0' + 0;
  } else if (minutes > 9) {
    minutesText.innerText = minutes;
  }
  // Calculates Hours
  if (minutes >= 60) {
    hours++;
    hoursText.innerHTML = '0' + hours;
    seconds = 0;
    minutes = 0;
    minutesText.innerText = '0' + 0;
    secondsText.innerText = '0' + 0;
  } else if (hours > 9) {
    hoursText.innerHTML = hours;
  }
}