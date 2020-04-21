const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);
//for array with more elements rest are ignored

const [a, b, c] = ['Gab', 'Geb', 'Gib', 'Gob', 'Gub'];
console.log(a, b , c)

//objects
const gemstone = {
    type: 'Quartz',
    color: 'rose',
    carat : 21.29
}

const {type, color, carat} = gemstone;

console.log(type, color, carat )