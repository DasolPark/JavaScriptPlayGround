class Human {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const david = new Human("David", "Park");

console.log(david);

class Baby extends Human {
  cry() {
    console.log("waaaaaa!");
  }
  sayMyName() {
    console.log(this.firstname, this.lastname);
  }
}

const davidBaby = new Baby("David", "Park");

console.log(davidBaby);
console.log(davidBaby.cry());
console.log(davidBaby.sayMyName());
