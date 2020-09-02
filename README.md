# JavaScript Play Ground!

- appExample.js: Node.js(Express, dotenv)
- board.html: Make Board with local storage
- fundamentalForReactJS: JavaScript Grammar
- getPost.html & getPost.js: How to use get/post
- global.html: DOM

# JavaScript Fundametals

## JavaScript
- Script Language(Interpreter). Compiler Language
- Compilation 3 stage: Tokenizing/Lexing -> Parsing -> Code Generating
- Compile point of view: Engine/Compiler/Scope Interaction
- Search the scope with LHS or RHS search

## Scope
- Valid Scope of Variable
- Block Scope: {}
- Function Scope: function(){}
- var: vaild in function scope(same feature at global scope)
- let & const: valid in block scope[ES6]

## Hoisting
- 선언과 할당의 분리(선언은 최상단으로, 할당은 할당된 위치에서)
- 변수의 선언문을 '유효 범위'의 최상단으로 끌어올리는 행위(유효범위: var의 function scope기준)
- 변수 Hoisting: 최상단에 선언문 위치. 단 할당보다 먼저 호출하면 undefined
- 함수 Hoisting: 선언 전에 호출을 하더라고 호출이 가능. Hoisting에 의해 최상단에 선언되기 때문
  단, '함수 선언식'과 '함수 표현식'은 다르게 작동. 함수 표현식은 변수에 함수를 할당하는 표현식이기 때문(할당이 돼야 호출 가능)
- 실행 순서: 변수 선언 > 함수 선언 > 변수 할당

## This

- this는 기본적으로 window(전역)을 가리킨다.
  
1. Function() <br>
  함수 내에서 this를 호출하면? window <br>
  함수 내에서 선언한 함수에서 this를 호출하면? 여전히 window <br>
  즉, 전역함수 그리고 서브루틴 함수에서도 this는 전역에 바인딩된다

2. new Function() - Constructor <br>
  new(생성자)를 이용하면 기존 다른 언어와 같이 this가 해당 객체를 가리킨다. 하지만 서브루틴 내에서는 여전히 window(전역)을 가리킨다. <br>
  해결방법) <br>
  a. 생성자로 사용된 function 내 최상위 스코프에서 상수에 this를 저장한 후 이용하면 서브루틴 내에서도 원하는 대로 this를 이용할 수 있다. <br>
  b. ES6의 bind(this)함수를 이용해서 해결할 수도 있다. function{}.bind(this) <br>
  c. ES6의 Arrow function을 이용하면 된다. 이 방법을 이용하면 Lexical this 를 사용할 수 있다.

3. Object <br>
  객체의 메소드 내부의 this는 해당 메소드를 호출한 객체로 바인딩된다.

- Execution Context! <br>
  결론적으로 JavaScript에서 this는 누가 호출했느냐에 따라 결정된다. 그리고 예외사항이 엄청 많다.

## ES6 features
- 