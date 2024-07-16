const tinderUser = {
    id : 123,
    name : "Namit",
    isLoggedIn : false,
}
const clg = {
    clgfull :{
        clgshort : {
            shortform : "DKTE",
        }
    }
}
//console.log(clg.clgfull.clgshort.shortform)

// const mysym = Symbol("hii");
// clg.clgfull.clgshort.mysym = "namit";
// console.log(clg.clgfull.clgshort.mysym)

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"d",4:"d"};
const obj3 = {5:"e",6:"f"}
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3};
//console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //returns keys in the form of array
console.log(Object.values(tinderUser));//returns values in the form of array
console.log(Object.entries(tinderUser));//returns both k & v in the form of array
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //check wheather the object has that property or not


const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor:instructor} = course; // Destructoring
//console.log(courseInstructor)
console.log(instructor)