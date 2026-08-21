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

#Day 06:

- cool Regex matching
  function numberWithCommas(number) {
  return new Intl.NumberFormat("en-US").format(number);
  }

#Day 07:
to delete an item from an array without mutating it (creating a new array instead)

      const index = comments.findIndex((com) => com.id === 823423);

      const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1),
      ];

#Day 08:

- Canvas in HTML
- ctx.globalCompositeOperation for different modes
- HSL for colors

# IMP Day 09:

- Right click on element, inspect, right click in the inspector, "Break On" => attribute modification (debugger step-by-step on click)
- Different console.logs:
  console.log("%c Hello", "font-size: 50px");

- only fires if first arg of assert is false
  const p = document.querySelector("p");

      console.assert(p.classList.contains("ouch"), "That is wrong!");

- Viewing DOM Elements
  console.log(p); // shows just the dom element itself
  console.dir(p); // shows everything it 'contains' (attributes, children, etc)

- IMP Grouping together IMP

      dogs.forEach((dog) => {
        console.group(`${dog.name}`); // OR console.groupCollapsed
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
        console.groupEnd(`${dog.name}`);
      });

- IMP Checking how long things are taking:
  console.time("fetching data");
  fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
  console.timeEnd("fetching data");
  console.log(data);
  });

- Table log
  console.table(dogs);

# IMP Day 10:

- Converting primitive types works with just String(123), but converting to array has to be with .from():
  const boxes = Array.from(
  document.querySelectorAll('.inbox input[type="checkbox"]'),
  );

  (or just spread)
  const boxes = [...(document.querySelectorAll('.inbox input[type="checkbox"]'))];

- Smart way of getting area between two indexes:
  const start = Math.min(currentIndex, lastIndex);
  const end = Math.max(currentIndex, lastIndex);

          for (let i = start + 1; i < end; i++)
            boxes[i].checked = !boxes[i].checked;

# Day 11:

- HTML Video element specifics and event listeners
- e.stopPropagation() // stops bubbling, ex: hover over controls that are 'over' the player, need to stopPropagation in order for them to not bubble up the event listener to the whole player

# Day 12:

- Check input with
  window.addEventListener('keyup', (e) => {
  console.log(e.key)
  })
- keep an array only at a max number of characters by pushing out the first element:
  if (pressed.length > secretCode.length) pressed.shift();

# Day 13:

- debouncing function that limits how often a function runs in a short period, useful for events like scroll, resize, input
- window.innerHeight => height of the visible browser window (viewport)
- window.scrollY => how far we've scrolled down from the top of the page
- slideImage.height => height of the image itself
- slideImage.offsetTop => distance from the top of the page to the image's top edge
