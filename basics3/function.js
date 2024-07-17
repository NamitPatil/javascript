function saymyname()
{
    console.log("N");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}
//saymyname()

// function addtwo(number1,number2)  //parameters
// {
//     console.log(number1 + number2)
// }
function addtwo(number1,number2)  //parameters
{
    let add =number1 + number2;
    return `${number1 + number2} this is addition`;
}
function newuser(username = "Namit")
{
    if(username === undefined)
    {
        console.log("Please enter a name")
        return
    }
    return `${username} is logged in`;

}
//console.log(newuser("Rutuja"))

const result = addtwo(5,6)  //while calling some values passe known arguments
//console.log(addtwo(5,6))

function calculatecartprice(...num1) // ... is a rest or spread operator
{                                    // used to add multiple values it return array
    return num1
}

//console.log(calculatecartprice(200,400,500))

function calculatecartprice1(val1,val2,...num1) // ... is a rest or spread operator
{                                    // used to add multiple values it return array
    return num1
}

//console.log(calculatecartprice1(200,400,500,3000))

const user = {
    name : "Namit",
    age : 21
}

function handleobj (anyObj)
{
    console.log(`name is ${anyObj.name} and age is ${anyObj.age}`);
}

//handleobj(user)
handleobj({
    name :"rutuja",
    age:20
})

const arr = [200,300,400]
function returnse (getarray)
{
     return getarray[2]
}
console.log(returnse(arr))