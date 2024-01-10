// for of 

const myArr = [1, 2, 3, 4]
for (const num of myArr) {
    // console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`each character seprate ${greet}`);
}


// Map 

const map = new Map()
map.set('IN', "India")
map.set('SL', "Shree Lanka")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}