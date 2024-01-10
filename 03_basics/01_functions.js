function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");
}
//sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result                           // Another

        return number1 + number2

}
const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);

function loginUserMessage(username = "abhi"){
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} user login`
}
// console.log(loginUserMessage("Abhishek"));
console.log(loginUserMessage());