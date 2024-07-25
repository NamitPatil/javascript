const myobj = {
    js : 'Javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myobj) {
   // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const pr = ['js','ruby','java','python']

for (const key in pr) {
   // console.log(`${key} value is for ${pr[key]}`);
}

const map = new Map();
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")

for (const key in map) {
    console.log(key);
}