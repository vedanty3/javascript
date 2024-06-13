// parameter
function greet(name = "Vedant Yetekar") {
  return `Hello, How are you ${name}?`;
}

const greeting1 = greet("Parth Yetekar"); // agruement
const greeting2 = greet(); // agruement

console.log(greeting1, greeting2);
