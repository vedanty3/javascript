const username = prompt("Please enter your name.") || "Vedant Yetekar";
const userAge = parseInt(prompt("Please enter your age.")) || 21;
let isMale = confirm("Are you male?");

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >= 18 && userAge <= 21) {
  console.log(
    `${username
      .charAt(0)
      .toUpperCase()
      .concat(username.substring(1, username.length))} is a college student.`
  );
  console.log(`${isMale ? "He" : "She"} is learning CSE.`);
}
