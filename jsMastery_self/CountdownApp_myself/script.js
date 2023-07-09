const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = new Date("1 January 2024");

function getTimes() {
  const today = new Date();

  const newDate = Math.abs(today - newYears) / 1000;

  const totalDays = Math.floor(newDate / 3600 / 24);

  const hours = Math.abs(today.getHours() - 24);

  const minutes = Math.abs(today.getMinutes() - 59);

  const seconds = Math.abs(today.getSeconds() - 60);

  daysEl.innerHTML = `${totalDays}`;
  hoursEl.innerHTML = `${hours}`;
  minutesEl.innerHTML = `${minutes}`;
  secondsEl.innerHTML = `${seconds}`;
}
// getTimes();

setInterval(getTimes, 100);
