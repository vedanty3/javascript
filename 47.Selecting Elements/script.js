// if tags not found it returns []
// return [HTMLCollection]
const divs = document.getElementsByTagName("div");
console.log(divs);

const allDivs = document.getElementsByClassName("box");
console.log(allDivs);

let fl = false;
let id = 1;

for (let i of allDivs) {
  if (fl) {
    i.style.backgroundColor = "chartreuse";
    i.innerText = "Green";
  } else {
    i.innerText = "Coral";
  }
  i.id = id;
  ++id;
  i.style.display = "flex";
  i.style.alignItems = "center";
  i.style.justifyContent = "center";
  fl = !fl;
}

// if id not found it returns null
// looks for first match
// const heading = document.getElementById("heading");
// heading.innerText = "Document Object Model: " + heading.innerText;

const firstDiv = document.querySelector(".box");
console.log(firstDiv);

firstDiv.style.backgroundColor = "pink";
firstDiv.innerText = "Pink";

const heading = document.querySelector("#heading");
heading.innerText = "Document Object Model: " + heading.innerText;
heading.style.color = "crimson";
console.log(heading);

// returns [NodeList]
// we can use forEach over NodeList
const allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);

const vadapavImg = document.querySelector("[alt='vadapav']");
console.log(vadapavImg);

vadapavImg.style.border = "5px solid red";

// forEach can't be called upon HTMLCollection

const body = document.querySelector("body");
console.log(body);

console.log(body.querySelector("#heading"));

// 54
