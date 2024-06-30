console.log(document);
console.log(typeof document);

function sayHi() {
  console.log("Hi");
}

// html parser stores every element as an object
console.dir(sayHi); // as an object
console.dir(document); // as an object

let counter = 0;

const counterBanner = document.createElement("div");
const [html] = document.getElementsByTagName("body");
const [h2] = document.getElementsByTagName("h2");
html.appendChild(counterBanner);

const interval = setInterval(() => {
  ++counter;
  counterBanner.textContent = `Counter: ${counter}`;
  console.log(counter);
  if (counter === 2) {
    clearInterval(interval);
    // console.dir(h2);
    h2.textContent = "Hijacked";
  }
}, 2000);
