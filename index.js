/* Destructuring Arrays

Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable */

const names = ['John', 'Jacob', 'Jingleheimer'];

const [name1, name2, ...rest] = names;

// console.log(name1 + name2);


/* Destructuring Functions

Exercise 2: Destructure the first two items returned from the function and store them in a variable */

const foo = () => [1, 2, 3];
foo();
const [a, b, c] = foo()
// console.log(a, b);




/* Exercise 3: Without creating a temporary variable, use destructuring to swap the value of the following variables */

let d = 'Jack';
let e = 'Jill';
// your code
[d,e] = [e,d];
// console.log('d:', d, 'd:',e);
// => a: Jill b: Jack



/* BONUS: Advanced - nested arrays

Using array destructuring, accomplish the following output. Carefully study the array and the output to understand it. */


const array = [1, [2, [[[3, 4], 5], 6]]];
// your code
// console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6


/* Exercise 1: Write a function called combineArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator). */

const sports = ['football', 'basketball', 'golf'];
const moreSports = ['boxing', 'tennis', 'mma'];
combineArrays = (games1, games2) => [...games1, ...games2];


// console.log(combineArrays(sports,moreSports));




/* Exercise 2: Write a function called addEveryOther that takes in any amount of arguments, and returns the sum of every other argument. */

const exercise2Array = [4, 7, 3, 2, 10];
let newArray = [];
for(i=0; i < exercise2Array.length; i++) {
  if (i % 2 === 0 ) { newArray.push(exercise2Array[i])}
}
// console.log(newArray);
// let myFunction = (...spread) => spread.filter() % 2 === 0; console.log(myFunction(exercise2Array))

// let everyOtherIndexItem = exercise2Array.every(myFunction);

let addEveryOther = newArray.reduce(function(a,b,i){ return a + b;});

// console.log(addEveryOther);

// => addEveryOther(4, 7, 3, 2, 10) // 17
// => addEveryOther(2, 8, 3, 1) // 5




// for(let i = 0; i < shoes.length; i += 1) {
//   console.log(shoes[i]);
// }

// shoes.forEach((shoe) => {
//   console.log(shoe);
// })

// for(const index in shoes) {
//   console.log(shoes[index]);
// }

const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

// const shoe = shoes.entries();
// console.log(shoe);

// for ( const [i, shoe] of shoes.entries()) {
//     console.log(`${shoe} is the ${i} index`);
//   }


function addTotal() {
  let total = 0;
  for(const num of arguments) {
    total += num;
  }
  console.log(total);
  return total

}  

// addTotal(12,23,45,56,78,65)

const name = 'Clinton Williams';

for(const char of name) {
  // console.log(char);

}

const header = document.querySelectorAll('h5');

for(const h of header) {
  h.addEventListener('click', function() {
    console.log(this.textContent)
  })
}
// console.log(header);