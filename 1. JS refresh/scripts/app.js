// Basic import examples:

// import utils, { apiKey, example } from "./utils";

// console.log(apiKey); // Leggo la variabile dichiarata
// console.log(utils); // Leggo il valore univoco export default
// console.log(example); // Leggo la seconda variabile importata

// ------------------------------------------ //

// Import all variables at once
// import * as utils from "./utils";
// console.log(utils.apiKey); // Leggo il valore scelto da utils
// console.log(utils.default); // Leggo il valore default
// console.log(utils.example); // Leggo la seconda variabile

// console.log(utils); // Mi darà il modulo intero e tutto ciò che contiene

// ------------------------------------------ //

// Functions (ESEMPIO IN CONSOLE.LOG)
function greetUser(userName, message = "Hello!") {
  // Si può dare un valore ad una variabile direttamente al momento della chiamata
  console.log(message, userName);
}
greetUser("Max");
greetUser("Max", "How are you today?"); // in questo modo sostituirà il valore già dichiarato con un valore custom

//

// Functions (ESEMPIO CON RETURN)
function createGreeting() {
  let userName = "Juri";
  let message = "How are you doing?";
  return "Hi, I am " + userName + ". " + message;
}
console.log(createGreeting());

// Nameless Arrow Functions
// Si utilizzano per creare delle funzioni sul momento.
(userName = "Marco ", message = "And I'm a web developer!") =>
  "Hello, I am " + userName + message;

// NOTE:
// - Se bisogna dichiarare più di una variabile, bisogna usare le parentesi (come sopra), altrimenti non serve usarle in caso di una sola variabile.
// - Se una arrow function contiene solo un return come risultato, si può omettere così come le graffe (come sopra).
// - Nel caso di un oggetto, dobbiamo inserirlo nelle parentesi per far si che JS lo legga, ad es: number => ({ age: number });

//

// Functions (ESERCIZIO DEL CORSO)
//
// Exercise: Working with Functions
// Your task is to write a new function that should be named combine and have the following characteristics:
// - Accept three input values
// - Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)
// - Return the calculated result
//
function combine(a = 10, b = 20, c = 2) {
  return (a * b) / c;
}

console.log(combine());

// ------------------------------------------ //

// OBJECTS
const user = {
  name: "Max",
  age: 28,
  greet() {
    console.log("Hello, I'm in an object!");
    console.log("And my name is " + this.name);
  },
};

console.log(user);
console.log(user.name);
console.log(user.age);

user.greet();

// CLASS + CONSTRUCTOR
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi, I'm in a class inside a constructor!");
  }
}

const user1 = new User("John", 25);
console.log(user1);
