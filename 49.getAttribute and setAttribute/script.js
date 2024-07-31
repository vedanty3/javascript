console.log(
  document.querySelector("[hello='world']").attributes["hello"].value
);

document.querySelector("[hello='world']").setAttribute("isGood", "yes");

document.querySelector("[hello='world']").attributes["hello"].value =
  "Vedant Yetekar";

console.log(document.querySelector("[hello]").getAttribute("hello"));
console.log(document.querySelector("[hello]").getAttribute("isGood"));

console.log(
  document.querySelector(".css-image").classList.contains("css-image")
);
