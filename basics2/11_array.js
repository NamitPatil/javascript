// Methods Used In This file
//  1.push()
//  2.concat()
//  3.(...) spread operator
//  4.flat()
//  5.isArray()
//  6.Array.from()
//  7.Array.of()


const marvel=["Thor","IronMan","Spiderman"]
let s3=["Namit","pratik","Sandesh"];
console.log(Array.isArray("s3"));
//marvel.push(s3)
//console.log(marvel);

//console.log(marvel[3][0])

const a=marvel.concat(s3)    //concat function
//console.log(a)
const rutuja = ["rutja","rohit"];
const all=[...marvel,...s3,...rutuja]    //spread operator
//console.log(all)

const real=[1,2,3,[4,5,6,[7,8,1,[3,2,4]]]]  //falt function searches for depth give in brackets 
const original=real.flat(2);
console.log(original)


console.log(Array.from("Namit")) //from functionconverts any value into array
console.log(Array.from({name:"Namit"})) //interesting

let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3))
