// function constructor

function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.bark = function() {
    return 'Woof!';
  };
}

const dog1 = new Dog('Daisy', 'Labrador', 'black');
const dog2 = new Dog('Jack', 'Jack Russell', 'white');

console.log(dog1);
console.log(dog2);

console.log(dog1.bark()); // Walks down the prototype chain through the __proto__ property

dog1.toString(); // Object.prototype(Dog.prototype.__proto__)

// class

class Dog {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = this.breed;
    this.color = color;
  }

  bark() {
    return 'Woof!';
  }
}

class Chihuahua extends Dog {
  constructor(name) {
    super(name);
  }

  smallBark() {
    return 'Small Woof!';
  }
}

const myPet = new Chihuahua('Max');

// object

const person = {
  name: 'David',
  age: 21
};

const me = Object.create(person);
