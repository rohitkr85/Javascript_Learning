// Primitive datatype
// String, Number, Boolean, null, undefined, Symbol, Bigint


const id = Symbol("123")
const anotherId = Symbol("123")
//console.log(id === anotherId)

const bigNumber = 237535834683465438753n

// Reference (Non primitive)
// Array, Objects, Functions
const heros = ["tony", "captain", "thor"];

let Obj = {
    name : "Rohit",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world")
}
//console.log(typeof heros)
//myFunction()


// ***********************************************************************
// Stack (Primitive), Heap (Non-Primitive)

let myname = "rk373@gmail.com"

let anotherName = myname
anotherName = "rohit@38247.gmail.com"
console.log(myname)
console.log(anotherName)

let userOne = {
    email:"rohit@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
console.log(userOne.email)
console.log(userTwo.email)