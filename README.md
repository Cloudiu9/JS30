Tracking my progress through JavaScript30 https://javascript30.com/.

#Day 01:
<audio> html element (play(), currentTime)
adding transitionend with forEach to keys array for performance

#Day 02:
transform-origin: 100% to rotate things from right (clock hand, default is 50%)
transition: all 0.5s; to prevent it from moving instantly
transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1); causes clock hand to 'overshoot' in the animation

to get time:
const now = new Date();
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();
