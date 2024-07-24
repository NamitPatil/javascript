//for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) 
{
  //console.log(i);   
}

const name = ["Namit","sumit","Pranit","Anvit"]

for (const i of name) 
{
  //console.log(i);   
}
const aname = "Namit";

for (const i of aname) 
{
  //console.log(`Each Char is ${i}`);   
}


//Maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
}

const myo = {
    'game1' : 'COD',
    'game2' :'pubg',
    'game3' :'templerun'
}

for (const [key,value] of myo) {
    console.log(key,':-',value);
}