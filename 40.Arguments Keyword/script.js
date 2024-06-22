function add(a, b) {
  let totalSum = 0;
  for (let num of arguments) {
    totalSum += num;
  }
  console.log("totalSum:", totalSum);
  console.log("arguments:", arguments);
  console.log("typeof:", typeof arguments);
  console.log("isArray:", Array.isArray(arguments));
}

// arguments keyword cannot be used in an arrow function
/*
const add = (a, b) => {
  let totalSum = 0;
  for (let num of arguments) {
    totalSum += num;
  }
  console.log("totalSum:", totalSum);
  console.log("arguments:", arguments);
  console.log("typeof:", typeof arguments);
  console.log("isArray:", Array.isArray(arguments));
};
*/
add(3, 4);
