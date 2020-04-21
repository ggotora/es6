//Hoisting - is how JS is interpreted in the browswe
//all variables declared with var are hoisted / raised
// to the top of the function scope

function getClothing(isCold){
    if(isCold){
        var freezing = 'Grab a jacket';
    }else {
        var hot = 'Its shorts day indeed';
        console.log(freezing)
    }
}
console.log(getClothing(false));
// returns freeing is undefined

//hoisting make function into
function getClothing(isCold){
    var freezing, hot; // undefined at this point
    if(isCold){
        freezing = 'Grab a jacket'
    }else {
        hot = 'Its a shorts day indeed';
        console.log(undefined)
    }
}

//Variable declared by let and const are scoped to the block not function
//var is scoped globally or locally

