"use strict"

const container = document.getElementById('container');

// callback
function myDisplaying(result) {
  console.log('result', result);
}

function myCalculator(a, b, callback) {
  const result = a + b;
  callback(result);
}

/** setTimeout */
setTimeout(mySettimeoutFunc, 3000);

function mySettimeoutFunc() {
  const div = document.createElement('div');

  div.innerHTML = 'Hi there!';
  container.appendChild(div);
}

/** setInterval */
setInterval(myIntervalFunc, 1000);

function myIntervalFunc() {
  const date = new Date();

  const div = document.createElement('div');
  
  div.innerHTML =
    `${date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()}:
    ${date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()}:
    ${date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()}`;
  container.innerHTML = '';
  container.appendChild(div);
}

myCalculator(5, 5, myDisplaying);