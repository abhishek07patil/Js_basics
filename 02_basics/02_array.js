const cricket_ply = ["virat", "rohit", "dhoni"]
console.log(cricket_ply);

const football_ply = ["ronaldo", "messi", "neymar"]
// console.log(football_ply);

// const player = cricket_ply.concat(football_ply)   //Concat: You join two array
// console.log(player);

const all_player = [...cricket_ply,...football_ply]  // This is simple to join two or many array
// This is called spread operater(...)
// console.log(all_player);


const another_array = [1,2,3,4,[5,6],7,[8,9,[6,7,8]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
//Flat: array madhe array rahila tevha flat cha use karycha 


console.log(Array.from("abhishek"));  
// he converted name to array
console.log(Array.from({name: "abhishek"}));   //interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));