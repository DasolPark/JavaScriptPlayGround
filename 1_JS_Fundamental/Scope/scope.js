/** Function scope **/
var a = 10;
function scope1() {
  a = 20;
  console.log('a: ', a);
}
scope1();

var b = 10;
function scope2() {
  var b = 20;
  console.log('b: ', b);
}
scope2();
console.log('b: ', b); // 가장 가까운 scope 내의 변수를 찾는다. 못 찾으면 위 단계의 범위로 올라가서 찾는다. global까지 올라가서 못 찾으면 Error

/** var VS let **/
if (true) {
  var a = 'Hi'; // if(){} or for(){} or while(){} 등 을 사용해도 global scope로 선언된다.
}
console.log('a: ', a);

if (true) {
  let b = 'Bye';
}
console.log('b: ', b); // ReferenceError: b is not defined

/** Inner function **/
var c = 10;
function testFunc1() {
  var c = 20;
  console.log('c in testFunc1: ', c);
  function testFunc2() {
    var c = 30;
    console.log('c in testFunc2: ', c);
  }
  testFunc2();
}
testFunc1();
console.log('c in global: ', c);

/* Lexing & Scope Example
var c
c = 10
function testFunc1
  var c
  c = 20
  function testFunc2
    var c
    c = 30 // LHS 탐색에 의해 가장 가까운 scope 내의 변수에 할당
console.log에서 각 변수를 참조할 때는 RHS 검색을 통해 값을 찾는다.
*/

/* Summary
  Global scope도 Function-level scope와 같은 특징
  function 내애 선언한 if(){}같은 선언문이 었더라도 function scope
  global scope에 var a이 이미 있어도 function 안의 var a 선언되면 무시하고 중복 선언된다
  이를 해결하기 위해 Closure 등을 사용하였음

  Block-level scope는 위의 상황을 방지하기 위해 나온 것
  즉, {} 안에 선언했을 경우 {}안에서 생성되고 소멸
  단점: 중복 선언했을 경우 오류를 찾기 힘들다.

  let, const을 이용해 변수를 선언한다.
  let은 언제나 재할당이 가능, const는 선언과 동시에 할당해야하며 재할당이 불가
*/