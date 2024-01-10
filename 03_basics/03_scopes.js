// {}      // curly bracket is a scope

// var c = 300             
let a = 300                // if ke bahar global scop

if (true) {               // if ke ander block scop
    let a = 10
    const b = 20
    console.log("inner ", a);   //block scop
}

console.log(a);                 //global scop
// console.log(b);
// console.log(c);