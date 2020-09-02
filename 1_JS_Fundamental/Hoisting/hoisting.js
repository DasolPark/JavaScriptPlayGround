/** Variable Hoisting **/

// Before
if (true) {
  var name = 'David';
}
console.log(name);

function hois() {
  var phone = 010;

  if (true) {
    var addr = 'seoul';
  }

  for (var i = 0; i < 5; i++) {
    // Do something
  }
  console.log(i);
}

// After
var name; // Declaration
if (true) {
  name = 'David'; // Assignment
}
console.log(name);

function hois() {
  var phone; // Declaration
  var addr;
  var i;
  phone = 010; // Assignment
  if (true) {
    addr = 'seoul'; // Assignment
  }
  for (i = 0; i < 5; i++) { // Assignment
    // Do something
  }
  console.log(i);
}

/** Function Hoisting(함수 선언식) **/

// Before
saySomething();
function saySomething() {
  console.log('down');
}

// After
function saySomething() {
  console.log('down');
}
saySomething();

/** Function Hoisting(함수 표현식) **/

// Before
saySomething();
var saySomething = function () {
  console.log('down');
}

// After
var saySomething;  // Declaration
saySomething(); // Error
saySomething = function () { // Assignment
  console.log('down');
}

/** Hoisting 우선 순위(변수 선언 > 함수 선언 > 변수 할당) **/

// Before
var myName = 'David';
function myName() {
  console.log('James');
}
function yourName() {
  console.log('Jose');
}
var yourName = 'Peter';
console.log(typeof myName);
console.log(typeof yourName);

// After
var myName;
var yourName;
function myName() {
  console.log('James');
}
function yourName() {
  console.log('Jose');
}
myName = 'David';
yourName = 'Peter';
console.log(typeof myName); // String
console.log(typeof yourName); // String

console.log(Digest);
var Digest = 'Digest';
/* Summary
  '선언과 할당의 분리'

  Hoisting이란 변수나 함수의 선언을 유효범위 내의 최상단에 위치시키는 것
  함수 호출의 경우, 선언식보다 먼저 호출을 해도 작동(선언과 동시에 메모리에 할당되기 때문)
  하지만, 함수 표현식을 사용했을 경우 호출 불가(호출 전에 할당이 되지 않았기 때문)
  변수 호출의 경우, 선언+할당식보다 먼저 호출을 하면 undefined(선언은 됐지만, 할당은 되지 않았기 때문)
*/