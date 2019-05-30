// .forEach

let posts = ["Hi", "Hello", "Bye"];

posts.forEach(post => console.log(post));

// push

let numbers = ["one", "two", "three"];

numbers.push("four");

console.log(numbers);

// includes

let greetings = ["Hi", "Hello", "Bye"];

if (!greetings.includes("Howdy")) {
  greetings.push("Howdy");
}

console.log(greetings);

// reverse

console.log(numbers.reverse());
