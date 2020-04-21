const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

console.log('*'.repeat(50))
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes)

console.log('#'.repeat(50))
//spread expands or spread iterable objects
// sets are a new built-in in es6

//use cases
//1. Old way was concat two arrays
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(`my produce = ${produce}`);

console.log('-'.repeat(50))
//es6 way
const allProduce = [...fruits, ...vegetables];


