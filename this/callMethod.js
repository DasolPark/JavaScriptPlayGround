var obj1 = {
  name: 'park',
  sayMyName: function() {
    console.log(this.name);
  }
};

var obj2 = {
  name: 'jung'
};

obj2.sayMyName = obj1.sayMyName;

obj1.sayMyName();
obj2.sayMyName();

// 프로토타입 객체도 메소드를 가질 수 있다.
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

var me = new Person('Park');
console.log(me.getName());

Person.prototype.name = 'Jung';
console.log(Person.prototype.getName());
