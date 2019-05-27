const days = ["Mon", "Tue", "Wed", "Thur", "Fri"];

// 1. General .map
const generalMap = days.map(potato => console.log(potato));

// 2. Separated function
const addSmile = day => `😁  ${day}`;

const smilingDays = days.map(addSmile);

console.log(smilingDays);

// 3. index
const addNumber = (day, index) => `#${index + 1} ${day}`;

const numberingDays = days.map(addNumber);

console.log(numberingDays);
