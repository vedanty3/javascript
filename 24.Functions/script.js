// parameter
function greet(name = "Vedant Yetekar") {
  return `Hello, How are you ${name}?`;
}

debugger;

const greeting1 = greet("Parth Yetekar"); // agruement
const greeting2 = greet(); // agruement

console.log(greeting1, greeting2);

function reverseNumber(number) {
  let ans = 0;

  while (number) {
    let lastDigit = Math.round(number % 10);
    console.log(lastDigit);
    ans = ans + lastDigit;
    number = Math.round(number / 10);
    if (!number) {
      break;
    }
    ans *= 10;
  }

  return ans;
}

const reversedNumber = reverseNumber(1234);

console.log(reversedNumber);
