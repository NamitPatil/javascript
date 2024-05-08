//primitive

//7 Types : String,number,Boolean,null,undefined,symbol,Bigint

const name="namit"
const score=100;
const nscore=100.3;
const outsidetemp=null;
let isLogged=false;
let unde;
console.log(typeof(unde))
let id=Symbol('123');
let newid=Symbol('123');
console.log(id===newid)

const Bignumber=1n    //if we add n at the end of the number then it will be bigInt
console.log(typeof(Bignumber))

//reference or Non-primitive

//array,Object,functions

const arr=["namit","Sumit"]; //arrays

let myobj={
    name:"namit",
    roll:25,
}

const myfunction=function()
{
    console.log("Hello World");
}
console.log(typeof(myfunction))
console.log(typeof(myobj))
console.log(typeof(arr))

// all non primitive data types return value is object and the function return type is object function , 
//null return type object

//*******************************************************************//
// stack - copy of variable will get (primitive)   
// Heap (non-primitive) - rerference of a original value
