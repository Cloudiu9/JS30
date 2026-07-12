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

#Day 03:
this.dataset IMP object that contains all 'custom' data attributes

Updating a custom property:
const suffix = this.dataset.sizing || "";
document.documentElement.style.setProperty(
`--${this.name}`,
this.value + suffix,
);

#Day 04:
console.table() IMP cool alternative for console.log

filter => you can give it 10 items and can return 2
map => like a factory, give 10 'raw' items, always return 10
reduce => DON'T use += inside the function, it mutates the arguments

querySelectorAll creates a NodeList (similar to array), but does NOT have all array methods (map, filter, etc., but has forEach)

#Day 05:

- On flexbox children, flex: 1 makes them evenly distribute within available space (if 5 containers, use flex: 5 as a 'focus' of a container)
- We can next flexbox containers within eachother (item can be both child and container)
