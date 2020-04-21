//rest parameter Bundles multiple elements into an array
// indefinite number of elements as an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);


printAllTheseStrings('banana', 'was', 'a', 'monkey', 'and', 'so on');

function printAllTheseStrings(...things){
    for (let thing of things){
        console.log(thing)
    }
}

console.log('_'.repeat(60))


//Variadic functions are functions that take an indefinite number of arguments

//use case
// create function sum that adds indefinite number of arguments
//1. Using Old JS arguments
function sum() {
    let total = 0;  
    for(const argument of arguments) {
      total += argument;
    }
    return total;
  }
  console.log(sum(9, 8, 9));
  // arguments object seems to appear out of nowhere and 
console.log('_'.repeat(70))
  //ES6

  function sum(...nums){
      let total = 0;
      for (let num of nums){
          total += num;
      }
      return total ;
  }

  console.log(sum(9, 9,  9))

  //Quiz
//   Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.

// TIP: Make sure to test your code with different values. For example,

// average(2, 6) should return 4
// average(2, 3, 3, 5, 7, 10) should return 5
// average(7, 1432, 12, 13, 100) should return 312.8
// average() should return 0

function average(...nums){
    let total = 0;
    let average = 0
    for(let num of nums){
        
        total += num
        average = total / nums.length;
        
    }
   
    return average

}
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());