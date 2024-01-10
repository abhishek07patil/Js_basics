const user = {
    username: "Abhishek",
    prize: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        // this : this use current contax
    }
    
}
//  user.welcomeMessage()
//  user.username = "abhi",
//  user.welcomeMessage()


// function chai(){
//     let username = "abhishek"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "abhishek"
//     console.log(this.username);
// }

const chai = () => {
    let username = "abhishek"
    console.log(username);
}

chai()


// () => {}           // This is a Arrow Function

// const addTwo = (num1, num2) => {        // basic arrow
//     return num1 + num2                  // Explicite return
// }


//const addTwo = (num1, num2) => num1 + num2  //implicite return

// const addTwo = (num1, num2) => (num1 + num2) 
// {} curly ka use hua to return likhna hoga 
// () paranthasis ka use hua to nahi

const addTwo = (num1, num2) => ({username: "Abhishek"})

// console.log(addTwo(3,4))