// Array

const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thur", "Fri", "Sat"];

// const allDays = days + otherDays;
const allDays = [...days, ...otherDays, "Sun"];

console.log(allDays);

// Object

const ob = {
  first: "Hi",
  second: "hello"
};

const ab = {
  thrid: "bye bye"
};

// const two = { ob, ab };
const two = { ...ob, ...ab };

console.log(two);

// function

const shi = (something, args) => console.log(...args);
