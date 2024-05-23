console.log(5 < 6 && 4 < 5); // true
console.log(5 < 7 && 5 < 2); // false

const userAge = 25;

if (userAge >= 18 && userAge <= 24) {
  console.log("first block");
} else {
  console.log("second block");
}

const studentAge = 15;

function isSchoolStudent(age) {
  if (age > 5 && age <= 17) {
    return true;
  } else {
    return false;
  }
}

function isCollgeStudent(age) {
  if (age > 17 && age <= 21) {
    return true;
  } else {
    return false;
  }
}

function isStudent(age) {
  if (isSchoolStudent(age) || isCollgeStudent(age)) {
    console.log("you are a student");
  } else {
    console.log("you are not a student");
  }
}

isStudent(studentAge);

function truthyAndFalsy() {
  return 0 && 2; // 0
}

function falsyAndTruthy() {
  return 1 && 2; // 2
}

function truthyOrFalsy() {
  return 0 || 2; // 2
}

function falsyOrTruthy() {
  return 1 || 2; // 1
}

function convertToBoolean() {
  return Boolean(truthyOrFalsy());
}

console.log("" && "Hello"); // ""
console.log("" || "Hello"); // "Hello"
console.log("Hello" && null); // null
console.log("Hello" || null); // "Hello"
console.log(+null); // 0 (convert to number)
console.log(!null); // true
console.log(!!null);
console.log(!"");
