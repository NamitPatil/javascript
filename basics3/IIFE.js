// Immediately Invoked function Expression (IIFE)
(function myname (name)
{
    console.log(`My name is ${name}`);
})("namit");

//IIFE syntax = () ()  used to remove global function pollution
(function myname1 (name)
{
    // nAMED IF MENAS FUNCTION HAS NAME
    console.log(`My name is ${name}`);
})("sumit");  //we have to give ; in IIFE TO RUN NEXT FUNCTION

( (name) =>
{
    // UN named IIFE
    console.log(`My name is ${name}`);
})("pranit")