const userEmail = "Abhi@1234"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Can't user Email"); 
}


// falsy values 
// false, 0, -0, BigInt On, "", null, undefined, NaN 


// truthy values 
// "0", 'false', " ", [], {}, function(){} 


// const user = []
// if (user.length===0) {
//     console.log("Got an user");
// }


const emptyObject = {}

if (Object.keys(emptyObject).length===0) {
    console.log("Got Empty object");
}


// Nullishing Coalescing Operator (??): Null undefined 

let val1;
// val1 = 10 ?? 15
// val1 = null ?? 15
// val1 = undefined ?? 15
// val1 = undefined ?? 25 ?? 20


console.log(val1);


// Ternary Operator 

// condition ? true : false 

const iceCream = 100
iceCream <= 80 ? console.log("Greater than 80") : 
console.log("Less than 80");