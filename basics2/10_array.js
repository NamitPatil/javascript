//array
const myArr = [0,1,2,3,4,5]
//console.log(myArr);

myArr.push(6)  //add element add the end
myArr.push(7)
myArr.pop()  //remove element from the end
myArr.unshift(20) //add element at the beginning
myArr.shift();// remove element from bginning

//console.log(myArr.includes(10));
//console.log(myArr.indexOf(5))

const newArr = myArr.join();

//console.log(myArr);

//console.log(newArr);

//Slice , Splice

console.log("A ",myArr);

const myarr1 = myArr.slice(1,3);
console.log(myarr1)
console.log("B ",myArr);

const myArr2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myArr2)