//Convert a function to an arrow function
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
  return name.toUpperCase();
});

console.log("__")

const solution = ['Farrin', 'Kagure', 'Asser'].map(name => name.toUpperCase());
console.log(solution)

const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(name => name.length > 6);
console.log(longNames)

// Regular functions can be either function declarations or function expressions, however arrow functions are always expressions. In fact, their full name is "arrow function expressions", so they can only be used where an expression is valid. This includes being:

// stored in a variable,
// passed as an argument to a function,
// and stored in an object's property.
// One confusing syntax is when an arrow function is stored in a variable.

const colors = ['red', 'blue', 'yellow', 'orange', 'black'];

const crazyColors = colors.map(color => color.split('').reverse().join(''));
console.log('colors', crazyColors)
