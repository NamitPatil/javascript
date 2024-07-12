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
console.log(jsUser[mysym])

jsUser.name ="Namit patil"
Object.freeze(jsUser); //freeze the object not change anything from here