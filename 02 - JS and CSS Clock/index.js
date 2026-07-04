const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

let totalSeconds = 0;

function setDate() {
  const now = new Date();

  if (totalSeconds === 0) {
    // run this on load to sync
    totalSeconds =
      now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;
  } else totalSeconds++;

  // remove minutes
  const secondsDegrees = (totalSeconds / 60) * 360 + 90; // add 90 to offset initial 90 deg
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // remove hours
  const minutesDegrees = (totalSeconds / 3600) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // remove hours and minutes, 43200 sec in 12 hours
  const hoursDegrees = (totalSeconds / (3600 * 12)) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setDate();
setInterval(setDate, 1000);
