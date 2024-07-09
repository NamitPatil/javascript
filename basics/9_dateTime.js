//  Dates
let myDate = new Date()
console.log(myDate.toString());
//Mon Jul 08 2024 14:22:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
//Mon Jul 08 2024
console.log(myDate.toLocaleString());
//7/8/2024, 2:25:15 PM

let mynewDate = new Date(2001 , 10 , 20);
console.log(mynewDate.toDateString())

let newdate = new Date("01-28-2001");
console.log(newdate.toDateString())

let timestamp= Date.now()
console.log(timestamp)
console.log(Math.floor(Date.now()/1000))

let ndate = new Date()
console.log(ndate.getDate())
console.log(ndate.getMonth())

ndate.toLocaleString('default',{
    weekday:"long",
    
})