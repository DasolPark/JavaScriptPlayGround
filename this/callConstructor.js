// 생성자 함수
function Person(name) {
  this.name = name;
}

var me = new Person('Park');
console.log(me);

// Wrong
var you = Person('Han');
console.log(you);
