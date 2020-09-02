function sayMyName(firstname) {
  this.firstname = firstname;
  const lastNames = ['park', 'kim', 'lee'];
  lastNames.map((name) => {
    console.log(this.firstname + ' ' + name);
    const dontCallMe = () => {
      console.log(this);
    }
    dontCallMe();
  })
}

new sayMyName('park');

const obj = {
  name: 'david',
  first: 1234,
  outerFunc: function () {
    console.log(this.name);
  },
}

obj.outerFunc();

/*
  this는 기본적으로 window(전역)을 가리킨다.
*/

/*
  1. Function()
  함수 내에서 this를 호출하면? window
  함수 내에서 선언한 함수에서 this를 호출하면? 여전히 window
  즉, 전역함수 그리고 서브루틴 함수에서도 this는 전역에 바인딩된다.
*/

/*
  2. new Function() - Constructor
  new(생성자)를 이용하면 기존 다른 언어와 같이 this가 해당 객체에 속한다. 하지만 서브루틴 내에서는 여전히 window(전역)을 가리킨다.
  해결방법)
  1. 생성자로 사용된 function 내 최상위 스코프에서 상수에 this를 저장한 후 이용하면 서브루틴 내에서도 원하는 대로 this를 이용할 수 있다.
  2. ES6의 bind(this)함수를 이용해서 해결할 수도 있다. function{}.bind(this)
  3. ES6의 Arrow function을 이용하면 된다. 이 방법을 이용하면 Lexical this 를 사용할 수 있다.
*/

/*
  3. Object
  객체의 메소드 내부의 this는 해당 메소드를 호출한 객체로 바인딩된다.
*/

/*
  Execution Context!
  결론적으로 JavaScript에서 this는 누가 호출했느냐에 따라 결정된다. 그리고 예외사항이 엄청 많다.
*/
