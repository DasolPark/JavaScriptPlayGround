const dateFns = require('date-fns');

const date = new Date('2020-01-01 00:00:00');
console.log(date);
console.log('year', dateFns.getYear(date));
console.log('month', dateFns.getMonth(date));
console.log('day', dateFns.getDay(date));
console.log('date', dateFns.getDate(date));
console.log('getHours', dateFns.getHours(date));
console.log('getMinutes', dateFns.getMinutes(date));
console.log('');
console.log('year', dateFns.getYear(new Date()));
console.log('month', dateFns.getMonth(new Date()));
console.log('day', dateFns.getDay(new Date()));
console.log('date', dateFns.getDate(new Date()));
console.log('getHours', dateFns.getHours(new Date()));
console.log('getMinutes', dateFns.getMinutes(new Date()));
