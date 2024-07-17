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