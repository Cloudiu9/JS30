// get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscren = player.querySelector(".player__fullscreen");
const controls = player.querySelector(".player__controls");

// build functions
function togglePlay() {
  console.log(video);
  // there's only a 'paused' property, no 'playing'
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  // this ==> bound to video itself
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // only updates when you let go of mouse
  console.log(this.value);
  console.log(this.name); // custom name defined on dom element === value from video
  // ==> changes volume / playbackRate
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // console.log(e);
  // e.offsetX ==> how far we clicked onto the bar

  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// hook up event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

let timerId;
player.addEventListener("mousemove", () => {
  player.classList.remove("hide-controls");

  clearTimeout(timerId);

  timerId = setTimeout(() => {
    player.classList.add("hide-controls");
  }, 1500);
});

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((btn) => {
  btn.addEventListener("click", skip);
});

// input instead of change to capture and apply changes instantly, without having to let go of the slider
ranges.forEach((range) => {
  range.addEventListener("input", handleRangeUpdate);
});

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));

fullscren.addEventListener("click", toggleFullscreen);

controls.addEventListener("mousemove", (e) => {
  // stops event from bubbling up to player, which caused the controls to hide even on hover
  e.stopPropagation();

  clearTimeout(timerId);

  player.classList.remove("hide-controls");
});

controls.addEventListener("mouseleave", () => {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    player.classList.add("hide-controls");
  }, 2000);
});
