const marvel=["Thor","IronMan","Spiderman"]
const s3=["Namit","pratik","Sandesh"];
//marvel.push(s3)
// console.log(marvel);
// console.log(marvel[3][0])

const a=marvel.concat(s3)    //concat function
console.log(a)

const all=[...marvel,...s3]    //spread operator
console.log(all)

const real=[1,2,3,[4,5,6,[7,8,1,[3,2,4]]]]  //falt function searches for depth give in brackets 
const original=real.flat(Infinity);
console.log(original)

console.log(Array.isArray("Namit"))
console.log(Array.from("Namit")) //from functionconverts any value into array
console.log(Array.from({name:"Namit"})) //interesting

let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3))
