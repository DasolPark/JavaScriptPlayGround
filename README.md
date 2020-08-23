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