const human = {
  firstName: "David",
  lastName: "Park",
  nationality: "South Korea",
  favFood: {
    breakfast: "apple",
    lunch: "noodle",
    dinner: "ddeokbokgi"
  }
};

const {
  firstName,
  lastName,
  nationality: national,
  favFood: { breakfast, lunch, dinner }
} = human;

console.log(firstName, lastName, national, breakfast, lunch, dinner);
