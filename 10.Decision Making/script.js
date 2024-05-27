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
} else if (userAge < 18 && userAge > 5) {
  console.log(
    `${username
      .charAt(0)
      .toUpperCase()
      .concat(username.substring(1, username.length))} is a school student.`
  );
} else if (userAge <= 5) {
  console.log(
    `${username
      .charAt(0)
      .toUpperCase()
      .concat(username.substring(1, username.length))} is a kid.`
  );
} else {
  console.log(
    `${username
      .charAt(0)
      .toUpperCase()
      .concat(username.substring(1, username.length))} is an adult.`
  );
}

// Nested if-else

if (true) {
  if (!undefined) {
    // some code 1...
  } else {
    // some code 2...
  }
} else if (!NaN) {
  // some randome code
} else {
  // some stupid code
}
