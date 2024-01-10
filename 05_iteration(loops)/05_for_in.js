// for in 

const myObject = {
    js: "JavaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"

}
// for (const key in myObject) {
//   console.log(key);
// }

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programing = ["js", "cpp", "py", "java", "rb"]

for (const key in programing) {
    // console.log(programing[key]);
}



// const map = new Map()
// map.set('IN', "India")
// map.set('SL', "Shree Lanka")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//   console.log(key);
// }                       // This is not working program in object