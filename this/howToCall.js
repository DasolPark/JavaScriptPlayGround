function square(number) {
  console.log(arguments);
  console.log(this);

  return number * number;
}

square(2);

var foo = function() {
  console.dir(this);
};

// 1. 함수 호출
foo(); // window

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo();

// 3. 생성자 함수 호출
var instance = new foo();

// 4. apply/call/bind 호출
var bar = {name: 'bar'};
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();