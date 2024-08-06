const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newnum = myNumbers.map((num) => num + 10)

console.log(newnum);

const myNumbers1 = [1,2,3,4,5,6,7,8,9,10];


const newnum1 = myNumbers.map((num) => { return num + 10}) //if scope comes we have to return the values

console.log(newnum1);

const myNumbers2 = [1,2,3,4,5,6,7,8,9,10];

const newnum2 = myNumbers2
                 .map((num) => num + 10)
                 .map((num)=> num+1)

console.log(newnum2);