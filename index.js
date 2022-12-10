/* Destructuring Arrays

Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable */

const names = ['John', 'Jacob', 'Jingleheimer'];

const [name1, name2, ...rest] = names;

console.log(name1 + name2);


/* Destructuring Functions

Exercise 2: Destructure the first two items returned from the function and store them in a variable */

const foo = () => [1, 2, 3];
foo();
const [a, b, c] = foo()
console.log(a, b);




/* Exercise 3: Without creating a temporary variable, use destructuring to swap the value of the following variables */

let d = 'Jack';
let e = 'Jill';
// your code
[d,e] = [e,d];
console.log('d:', d, 'd:',e);
// => a: Jill b: Jack



/* BONUS: Advanced - nested arrays

Using array destructuring, accomplish the following output. Carefully study the array and the output to understand it. */


const array = [1, [2, [[[3, 4], 5], 6]]];
// your code
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6


/* Exercise 1: Write a function called combineArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator). */



/* Exercise 2: Write a function called addEveryOther that takes in any amount of arguments, and returns the sum of every other argument. */



// => addEveryOther(4, 7, 3, 2, 10) // 17
// => addEveryOther(2, 8, 3, 1) // 5