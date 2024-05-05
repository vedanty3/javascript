console.log(typeof 7);
console.log(typeof -9.99);
console.log(typeof "hello world!");
console.log("The word 'fast' is an adjective.");
console.log(typeof "");
console.log(`Dear Joseph👋🏻,
I hope this text finds you in  high spirit.`);
console.log("Dear Christine👋🏻,\nI hope this text finds you in  high spirit.");
console.log(typeof "100");
console.log(typeof +"100");
console.log(typeof -"100");
console.log(+"100", "100");
console.log(-"100", "-100");
console.log(+"vedant", typeof +"vedant");
console.log(+"100adfdf", typeof +"100adfdf");
console.log(parseInt("100adfdf"));
console.log(parseInt("10asa0adfdf"));
console.log(parseInt("as10asa0adfdf"));
console.log("asasas" + 100);
console.log(true, typeof true);
console.log(false, typeof true);
console.log(+true);
console.log(+false);
console.log(typeof undefined); // by default
console.log(typeof null); // by intention
console.log("+undefined", +undefined);
console.log("+null", +null);
console.log(parseInt(undefined));
console.log(parseInt(null));
const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge, 9007199254740991);

// BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.

console.log(typeof 1n);
console.log(typeof 1n === "bigint"); // true
console.log(typeof BigInt("1") === "bigint"); // true
