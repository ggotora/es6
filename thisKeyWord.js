// This is regular functions depends on how the function is called
// this in arrow functions depends on where it is located in the code

//1. Regular ...this could be 
//A. A new object ....if the function is called with new



const mySundae = new mySundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
console.log(this)
// value of this inside the Sundae contructor is a new object because its called with new

//B. A specific object
//if function is invoked with call/apply

const result = obj1.printName.call(obj2);
// In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call() 
// is to explicitly set what this refers to.

// C. A context 
data.teleport()

// In the code above, the value of this inside teleport() will refer to data.

// D. The global object or undefined
// If the function is called with no context:

teleport();
// In the code above, the value of this inside teleport() 
// is either the global object or, if in strict mode, it's undefined.

//ES6

//in es6 the value of thi is based on the function's surrounding context..
//the value of this inside an arrow function is the same as the value of this outside 
// the  function

