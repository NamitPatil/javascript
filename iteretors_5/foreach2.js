// const arr = ['mango','orange','apple','pineapple','guava'];

// // By using arrow function
// const values = arr.forEach(element => {
//     console.log(element);
// });
// console.log(values);

const mynum = [1,2,3,,4,5,6,7,8,9,10];

const newnum = mynum.filter(  (num) => num > 4)

console.log(newnum);