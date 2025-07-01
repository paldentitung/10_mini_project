const timer = document.querySelector(".time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const alarmSound = document.getElementById("alarm-sound");
const bgSound = document.getElementById("bg-sound");

let time = 1500; // 25 minutes
let intervalId = null;

timer.innerHTML = formatTime(time);

startBtn.addEventListener("click", () => {
  if (intervalId !== null) {
    return;
  }
  intervalId = setInterval(() => {
    if (time === 0) {
      clearInterval(intervalId);
      intervalId = null;
      alarmSound.play();
      timer.innerHTML = "time up";
    } else {
      time--;
      bgSound.play();
      timer.innerHTML = formatTime(time);
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  time = 1500;
  timer.innerHTML = formatTime(time);

  alarmSound.pause();
  alarmSound.currentTime = 0;
  bgSound.pause();
  bgSound.currentTime = 0;
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}
