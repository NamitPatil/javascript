const name ="namit"
const reposnt=50

//console.log(name+reposnt)

//console.log(`hello my name is ${name.} and my repo count is ${reposnt}`);

const mname="namit";
console.log(mname[0]);

console.log(mname.length);             //length
console.log(mname.toUpperCase());      //UpperCase
console.log(mname.charAt(3));          //charAt
console.log(mname.indexOf('t'));       //indexof

const newString=mname.substring(0,4)   //substring
console.log(newString);

const anotherstring=mname.slice(-8,4)   //slice
console.log(anotherstring)

const new1="     Namit    ";
console.log(new1)
console.log(new1.trim());               //trim

const url="https"
console.log(url.replace('s','-'));      //replace

console.log(url.includes('namit'));     //includes


const gamename=["abcdef"];
console.log(mname.split('+'));            //split / convert to array
