const promisesOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptograpy, network

    setTimeout(function(){
        console.log("Async task in completed");
        resolve()
    },1000)
})

promisesOne.then(function(){
    console.log("Promisis consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 is complete");
        resolve()
    },1000)
}).then(function(){
    console.log("Async consumed");
})


const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "abhi", email: "abhi@emam.com"})
    },1000)
})

promisThree.then(function(user){
    console.log(user);
})


const promisesFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: "Abhi", password: "123"})
        }else{
            reject('Error somthin wrong')
        }
    },1000)
})

promisesFour.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promises is either resolved or rejected"))


const promisesFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName: "JavaScript", password: "123"})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromisFive(){
    try {
        const response = await promisesFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisFive()

// async function getAbhiuser() {
//     try {
//         const response = await fetch('https://api.github.com/users/abhishek07patil');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAbhiuser();


fetch('https://api.github.com/users/abhishek07patil')
.then((resolve) => {
    return resolve.json
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))




