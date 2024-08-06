const mynum = [1,2,3]

const newnum = mynum.reduce(function (acc,curval) {
   // console.log(`acc :${acc} and curval: ${curval}`);
    
    return acc + curval
},3)

//console.log(newnum);

const mynum1 = [1,2,3]

const newnum1 = mynum1.reduce( (acc,curval)=> {
    //console.log(`acc :${acc} and curval: ${curval}`);
    
    return acc + curval
},3)

////console.log(newnum1);


const mycourse = [
    {
        name :"python",
        price :2400,
    },
    {
        name :"java",
        price :2000,
    },
    {
        name :"data science",
        price :3400,
    },
]

const total = mycourse.reduce((acc,pay)=> acc + pay.price,0)
console.log(total);
