let num = 5;

// num = num + 5;
num += 2;
num *= 2;
num /= 2;
num **= 2;
num -= 2;
num %= 2;
num++;
++num;
num--;
--num;

num = 5;

// address changes after changing values

let newNum = --num; // 4
num = 5;
newNum = num--; // 5
num = 5;
newNum = ++num; // 6
newNum = num++; //5

console.log(num);
