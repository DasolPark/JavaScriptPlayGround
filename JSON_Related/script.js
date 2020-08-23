const str = 'dasol';
const num = 89;
const arr = ['dasol', 'park'];

const strToStringify = JSON.stringify(str);
const numToStringify = JSON.stringify(num);
const arrToStringify = JSON.stringify(arr);

const stringifyToStr = JSON.parse(strToStringify);
const stringifyToNum = JSON.parse(numToStringify);
const stringifyToArr = JSON.parse(arrToStringify);

console.log(strToStringify);
console.log(numToStringify);
console.log(arrToStringify);

console.log(stringifyToStr);
console.log(stringifyToNum);
console.log(stringifyToArr);
