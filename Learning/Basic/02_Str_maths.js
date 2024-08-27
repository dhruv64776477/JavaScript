const name1 = "Dhruv";
const repoCount = 50;

// console.log(name1 + repoCount + " Value");

console.log(`Hello my name is ${name1} and my repo count is ${repoCount}`);

const gameName = new String("Dhruv-hc-com");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Dhruv    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Dhruv.com/Dhruv%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)