const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const nums = [1, 2, 3, 4, 5];

const newMonths = months.map((month, indx, array) => {
  //   console.log("array", array);
  return [indx + 1, month.toUpperCase()];
});

newMonths.forEach((pair) => {
  console.log(pair[0], pair[1]);
});

const filteredMonths = months.filter((month, indx, array) => {
  return month[0] == "M" || month[0] == "J";
});

console.log(filteredMonths);

const totalSum = nums.reduce((acc, num, indx, arr) => {
  return num + acc;
}, 0);

console.log(totalSum);
