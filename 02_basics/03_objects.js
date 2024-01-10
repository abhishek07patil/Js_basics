// singlton 
    //singlton use constructor through

// Object.create    //This is constructor


// Object literals

// const JsUser = {}    // this is object    // This is empty object

const mySum = Symbol("key1")

const JsUser = {
    name : "abhishek",
    age: 18,
    [mySum]: "myKey1",
    location: "jalgaon",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

//  console.log(JsUser.name);      // Anoter opetion is also avilable to access object
// console.log(JsUser["name"]);
// console.log(JsUser[mySum]);

JsUser.email = "abhi@chatgpt.com"   // You want changes this is changes
//Object.freeze(JsUser)               // you don't want change then freeze
JsUser.email = "abhi@microsoft.com"
console.log(typeof JsUser.lastLoginDays);

// let nik = JSON.stringify(JsUser)
// console.log(typeof nik);




JsUser.greeting = function(){
    // console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello Js User, ${this.name}`);     //this: this use all object value you declare
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());