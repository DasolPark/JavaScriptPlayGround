// let i는 block scope
// for (let i = 0; i < 5; i++) {
//   console.log('let index in for: ', i);
//   setTimeout(function() {
//     console.log('let index in setTimeout: ', i);
//   }, 500);
// }

// var i는 전역변수
// for (var i = 0; i < 5; i++) {
//   console.log('var index in for: ', i);
//   setTimeout(function() {
//     console.log('var index in setTimeout: ', i);
//   }, 500);
// }

const arr = new Array(5).fill();

arr.forEach((v, i, array) => (array[i] = () => i));

arr.forEach(f => console.log(f()));

console.log(arr);
