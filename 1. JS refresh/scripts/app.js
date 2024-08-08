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

// Functions
function greetUser(userName, message = "Hello!") {
  // Si può dare un valore ad una variabile direttamente al momento della chiamata
  console.log(message, userName);
}

greetUser("Max");
greetUser("Max", "How are you today?"); // in questo modo sostituirà il valore già dichiarato con un valore custom
