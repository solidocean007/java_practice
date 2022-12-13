/* Use the best kind of loop (for, while, for of) for each challenge.



Practice 1: Create a loop that runs through each item in the fruits array. */

const fruits = ["Apple", "Banana", "Orange"];
// => Apple Banana Orange

/* for(i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
} */

/* let x = 0;
while(x < fruits.length) {
  // console.log(fruits[x]);
  x += x;
  break;
} */


for (const f in fruits) {
  console.log(fruits[f]);
}

/*Practice 2: Create a loop that runs as long as i is less than 22, but increase i with 2 each time. */

for(i = 0; i < 22; i += 2) { console.log(i)}