var num = 0; // Number
var obj = new String('0'); // Object
var str = '0'; // String

console.log("num == obj: ", num == obj); // true
console.log("num == str: ", num == str); // true
console.log("obj == str: ", obj == str); // true
console.log();

console.log("num === num: ", num === num); // true
console.log("obj === obj: ", obj === obj); // true
console.log("str === str: ", str === str); // true
console.log();

console.log("num === obj: ", num === obj); // false
console.log("num === str: ", num === str); // false
console.log("obj === str: ", obj === str); // false
console.log("null === undefined: ", null === undefined); // false
console.log("obj === null: ", obj === null); // false
console.log("obj === undefined: ", obj === undefined); // false

