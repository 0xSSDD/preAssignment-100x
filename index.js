console.log('Hello World');

// some boiler plate math stuff
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// overload the console.log function
console.log = (message) => {
  // do something with the message
  console.log(message);
};