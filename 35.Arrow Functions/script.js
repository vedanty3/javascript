// function declaration
// you can use them before declaration
function square1(num) {
  return num * num;
}

// function expressions
// you cann't use them before declaration
const square2 = function square2(num) {
  return num * num;
};

const square3 = function (num) {
  return num * num;
};

const square4 = (num) => {
  return num * num;
};

// implicit return
const square5 = (num) => num * num;
