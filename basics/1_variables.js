const accountId=1223;
let accountEmail="abc.com"
var accountPassword="1234"
accountcity="Pune"
let accountState;
console.log(accountState)

//accountId=2 //Not allowed
accountEmail="namit.com"
accountPassword="12341234"
console.log(accountId);
/*
prefer not to use var 
because of issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountcity])

// {
//     let a = 20;
// }
// console.log(a);

{
    var b = 20;
}
console.log("This is B : ",b);

// {
//     const c = 20;
// }
// console.log(c);