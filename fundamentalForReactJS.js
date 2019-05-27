const numbers = [2, 3, 44, 15, 13, 11, 1325, 234, 456, 334, 222, 1];

const numberCondition = numb => numb < 15;

const number = numbers.filter(numberCondition);

console.log(number);

const strstr = ["hi", "hello", "bye"];

const strCondition = str => str.length < 3;

const str = strstr.filter(strCondition);

console.log(str);

let posts = ["Hi", "Hello", "Bye"];

posts = posts.filter(post => post !== "Bye");

console.log(posts);
