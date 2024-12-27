const name = "Rohit"
const repoCount = 50;

console.log(name + " " +repoCount);
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Rohit-kr");
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const newName = gameName.substring(0,4)
console.log(newName)
const newName2 = gameName.slice(-2,8)
console.log(newName2)

const newStringOne = "    Hitesh    "
console.log(newStringOne)

console.log(newStringOne.trim())

const url = "https://rohit.com/rohit%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('rohit'))