// const mydate = new Date();
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())

// const myCreatedDate = new Date(2024,0,27)
// console.log(myCreatedDate.toLocaleDateString())

const myCreatedDate2 = new Date("2024-03-25")

//console.log(myCreatedDate2.toLocaleDateString());

// const myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})