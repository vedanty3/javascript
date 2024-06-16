// setTimeout and setInterval are web api's
// setTimeout takes 1 function and a timer value as a parameter
// setTimeout(fn, time);
// setInterval(fn, time);
// both the clearTimeout or clearInterval functions can be used for clearing a setInterval or setTimeout function in action

function greet() {
  console.log(Math.round(Math.random() * 100));
}

const currentInterval = setInterval(greet, 1000);

setTimeout(() => {
  console.log("clearing interval...");
  clearInterval(currentInterval);
  console.log("interval cleared...");
}, 3000);

setTimeout('console.log("hello world")', 300); // it treats everything given at a place of callback function as a piece of code. it creates a whole new file for that particular piece of code behind the scenes

// setTimeout and setInterval returns a timer id
// this id is used by clearTimeout and clearInterval functions to clear respective functions if in action
const timerID1 = setTimeout(() => {
  console.log("logging timer 1 id...");
  console.log(`timer id: ${timerID1}`);
}, 4000);

const timerID2 = setTimeout(() => {
  console.log("logging timer 2 id...");
  console.log(`timer id: ${timerID2}`);
}, 5000);
