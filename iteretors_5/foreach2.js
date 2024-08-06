// const arr = ['mango','orange','apple','pineapple','guava'];

// // By using arrow function
// const values = arr.forEach(element => {
//     console.log(element);
// });
// console.log(values);

// const mynum = [1,2,3,,4,5,6,7,8,9,10];

// const newnum = mynum.filter(  (num) => num > 4)

// console.log(newnum);

const books = [
    { title:'Book One',genre :'Fiction', publish:1981 , edition:2004},
    { title:'Book Two',genre :'Non-Fiction', publish:1981 , edition:2004},
    { title:'Book Three',genre :'History', publish:1981 , edition:2004},
    { title:'Book Four',genre :'non-Fiction', publish:1981 , edition:2004},
    { title:'Book five',genre :'science', publish:1981 , edition:2004},
    { title:'Book Six',genre :'Fiction', publish:1981 , edition:2004},
    { title:'Book Seven',genre :'history', publish:1981 , edition:2004}
]

let mybooks = books.filter( (bk)=> bk.genre === 'Fiction')
//const mbooks = books.filter( (bk)=> bk.edition === 2004)
mybooks = books.filter( (bk) => 
    bk.publish>=2004 && bk.genre ==='Fiction'
)

console.log(mybooks);
//console.log(mbooks);
