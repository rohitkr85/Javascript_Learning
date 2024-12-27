// Singleton
// Object.create  -- using constructor method

// Object literals

const mySym = Symbol("mySymbol1");

const jsUser = {
    "name" : "Rohit",
    "full name" : "Rohit Choudhary",
    [mySym] : "mySymbol",
    age : "24",
    email : "rohit@google.com",
    location : "Gurugram",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

//jsUser.email = "rohit5432@gmail.com"
//console.log(jsUser);
//Object.freeze(jsUser)
jsUser.email = "rk3848@gmail.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jd user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello jd user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
