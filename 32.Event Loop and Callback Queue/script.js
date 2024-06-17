// https://latentflip.com/loupe/

console.log("Hi-1");

function greet() {
  console.log("hello world!");
}

for (let i = 1; i <= 4; ++i) {
  console.log(i);
}

setTimeout(greet, 1000);
setTimeout(greet, 2000);
setTimeout(greet, 3000);

console.log("Hi-2");
