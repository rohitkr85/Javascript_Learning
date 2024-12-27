const myArrr = [1,2,3,4,5]
const myHero = ["Batman","Deadpool"]
const myArr2 = new Array(1,2,3,4,5)

// Array method
//  myArrr.push(13);
//  myArrr.push(23);
//  myArrr.pop()
// myArrr.unshift(9);
// myArrr.shift();
// console.log(myArrr.includes(3))

//const newArray = myArrr.join()
//console.log(myArrr);
//console.log(newArray)  // in string

// slice, splice

// console.log("A", myArrr);
// const myn1 = myArrr.slice(1,3);
// console.log(myn1);

// console.log("B", myArrr);
// const myn2 = myArrr.splice(1,3);
// console.log(myn2);

// console.log("C", myArrr);

const marvel_heros = ["thor","Ironman","Captain America"];
const dc_heros = ["Superman","Flash","Batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros];
//console.log(all_new_heros);

// const another_array = [1,2,3,[4,5],6,[7,8,[9,10]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
 console.log(Array.isArray("Rohit"));
 console.log(Array.from("Rohit"));
 console.log(Array.from({name : "Rohit"})) // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));