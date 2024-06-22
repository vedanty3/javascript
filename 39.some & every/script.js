const nums = [2, 2, 2, 2, 2, 2, 6, 7, 8, 9, 10];

const hasAtleastOneOddNums = nums.some((num, indx, arr) => {
  //   console.log(arr);
  console.log(indx); // it will go till that index where it will find odd number.
  return num % 2 !== 0;
});

console.log(hasAtleastOneOddNums);

const hasAllOddNums = nums.every((num, indx, arr) => {
  //   console.log(arr);
  console.log(indx); // it will go till that index where it will find even number.
  return num % 2 !== 0;
});

console.log(hasAllOddNums);
