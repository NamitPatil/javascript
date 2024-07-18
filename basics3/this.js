const user = {
    username : "Namit",
    price : 599,

    welcomemsg : function()
    {
        console.log(`${this.username} , Welcome to Website`);
        //console.log(this)
    }
}
// user.welcomemsg()
// user.username = "Sumit";
// user.welcomemsg()
console.log(this)

// function chai()
// {
//     let username = "Namit"
//     console.log(this.username)
// }

// chai()

// const chai = function()
// {
//     let username = "Namit"
//     console.log(this.username)

// }
const chai = () =>        // arrow function 
{
    let username = "Namit"
    console.log(this)

}
//chai();

// arrow function syntax () =>{}

// const addtwo = (num1 , num2) => {    basic arrow function
//         return (num1+num2);
// }

//console.log(addtwo(5,6))

//const addtwo = (num1 , num2) => (num1+num2); // Implicit return it assumes 
// if we write in curly braces we have to write return keyword if we used paranthesis we do not have to use return keyword explicitely

const addtwo = (num1 , num2) => ({username : "Namit"}); //here we retrned obj
console.log(addtwo(5,6))