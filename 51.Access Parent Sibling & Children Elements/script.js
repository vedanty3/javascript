const paragraph = document.querySelector("p");
const box = document.querySelector("div");
const p = document.querySelector(`[data-id]`);

console.log(paragraph.parentElement.parentElement.parentElement);
console.log(paragraph.parentElement.parentElement.parentElement.parentNode);
console.log(box.childNodes);
console.log(box.children);
console.log(box.hasChildNodes());
console.log(paragraph.nextElementSibling);
console.log(paragraph.nextElementSibling.nextElementSibling);
console.log(paragraph.nextElementSibling.previousElementSibling);
console.log(p.nextSibling);
console.log(p.parentNode);

// 60
