const name = "ansh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const str = new String('ansp-hp-copm')

// console.log(str[0]);
// console.log(str.__proto__);


// console.log(str.length);
// console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf('t'));

const newString = str.substring(0, 4)
console.log(newString);

const anotherString = str.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ansh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ansh.com/ansh%20patel"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundarlal'))

console.log(str.split('p'));