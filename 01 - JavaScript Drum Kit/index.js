function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
  console.log(e);
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if ((!audio, !key)) return;
  audio.currentTime = 0; // reset time so you can press again before it ends
  audio.play();
  key.classList.add("playing");

  // works, but this adds the event listener to the element on each click. very inefficient
  // there's already a 'transition' in .css with a .07s timer; we can just listen for that and remove the class on end
  //   key.addEventListener("transitionend", () => {
  //     key.classList.remove("playing");
  //   });

  const keys = document.querySelectorAll(".key");

  keys.forEach((key) => addEventListener("transitionend", removeTransition));
}
window.addEventListener("keydown", playSound);
