// Primitive data type

// 1.String, 2.Number, 3.Boolean, 4.Null, 5.Undefine, 6.Symbol, 7.BigInt

const score = 100;
const gameScore = 100.3

const inLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

const bigNumber = 1233456789n



// Refrence (Non Primitive) data type

// Array, Object, Function

const heros = ["shaktiman", "balvir", "doga"]

let myObj = {
    name : "abhi",
    age :23,
}

const myFunction = function(){
    console.log("hello world");
}


console.log(typeof myObj);
