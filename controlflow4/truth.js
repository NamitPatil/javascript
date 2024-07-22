const userEmail = "namit@gmail";

if(userEmail)
{
    console.log("Got user mail");
}
else{
    console.log("not got email");
}

if(userEmail.length === 0)
{
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("obj is empty");
}
