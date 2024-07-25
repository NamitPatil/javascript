const arr = ['mango','orange','apple','pineapple','guava'];

// By using arrow function
arr.forEach(element => {
    //console.log(element);
});

// by using call back function call back means function has no name

arr.forEach(function (item){
    //console.log(item);
})

function printme(items) {
    //console.log(items);
}

//arr.forEach(printme);

// arr.forEach(function (item , index , arr){
//     console.log(item, index , arr);
// })

const mycode =[ 
    {
      name : "Namit",
      std : "TY",
      Branch : "AIDS",
    },

    {
        name : "amit",
        std : "TY",
        Branch : "AIDS",
    },

    {
            name : "mit",
            std : "TY",
            Branch : "AIDS",
    },
]

mycode.forEach(item =>{
    console.log(item.name);
})