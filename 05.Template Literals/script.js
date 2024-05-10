const message = "hello world!";
console.log(message[6]);
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.charAt(message.length - 1));
console.log(message.endsWith("world!"));
console.log(message.endsWith("WORLD!"));
console.log(message.endsWith("WORLD!".toLowerCase()));

const newMessage = "    Hello World!    ";
console.log(newMessage);
console.log(newMessage.trim());
console.log(newMessage.trim().toLowerCase());
console.log(newMessage.trimStart());
console.log(newMessage.trimEnd());
console.log(message.includes("hello"));
console.log(message.includes("wor"));
console.log(message.indexOf("h"));
console.log(message.indexOf("f"));
console.log(message.indexOf("word"));
console.log(message.replace("world!", "people of the internet!"));
console.log(message.replaceAll("o", "O"));

const finalMessage = "Sayonara!";
const name = "vedant";
console.log(name.concat(", ", finalMessage));
console.log("Hi, ".concat(name, " ", finalMessage));

const lastFourDigits = "8257";
console.log(lastFourDigits.padStart(10, "*"));
console.log(lastFourDigits.padEnd(10, "*"));
console.log(message.charCodeAt(0));
console.log(message.split(" "));
console.log(message.split(""));

function greet(name) {
  console.log(`Hello, ${name}.\nHow are you doing?`);
}

greet("Vedant");
greet("Jay");
