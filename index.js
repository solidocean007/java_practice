/* Destructuring Arrays

Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable */

const names = ['John', 'Jacob', 'Jingleheimer'];

const [name1, name2, ...rest] = names;

console.log(name1 + name2);