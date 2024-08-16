// singleton
//Object.create
//Object literals

const mysym = Symbol("key1");

const jsUser = {
    name : "Namit",
    age:21,
    [mysym] :"mykey",   //Symbol 
    location : "Kolhapur",
    email : "namit@gmail.com",
    isLoggedIn : false
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(typeof jsUser[mysym])

jsUser.name ="Namit patil"
//Object.freeze(jsUser); //freeze the object not change anything from here
//console.log(jsUser);
jsUser.greeting = function()
{
    console.log("Hello Java");
}

console.log(jsUser.greeting);

jsUser.greeting2 = function()
{
    console.log(Hello Java,$(this.name));
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());