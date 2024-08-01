const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const body = document.querySelector("body");

body.style.backgroundColor = "teal";
h1.style.color = "chartreuse";
p.style.color = "orange";

const links = [...document.querySelectorAll("a")];

links.forEach((link) => {
  link.className = "vedant";
  link.style.color = "violet";
  console.log(link.style.cssText);
});

links.forEach((link) => {
  link.style.cssText = `
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 300;
  text-decoration: none;
  color: silver;
  font-size: 28px;
  transition: 0.3s ease;`;
  console.log(link.style.cssText);
  console.log(link.className);
  console.log(link.classList);
  console.log([...link.classList]);
  console.log("vedant" in [...link.classList]);
  //   link.setAttribute("class", "vedant-yetekar");
  link.classList.add("vedant-yetekar");
});

links.forEach((link) => {
  console.log(link.classList);
  console.log(link.className);
  link.classList.toggle("vedant");
});

links.forEach((link) => {
  console.log(link.classList);
  console.log(link.className);
  link.classList.remove("vedant-yetekar");
  link.classList.toggle("vedant");
});

links.forEach((link) => {
  console.log(link.classList);
  console.log(link.className);
});

// 57
