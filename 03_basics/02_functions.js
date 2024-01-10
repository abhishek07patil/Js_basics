function calculateCartPrize(...num1){   //this rest/spread operator
    return num1
}
console.log(calculateCartPrize(20, 40, 80, 600));

const user = {
    username: "Abhi",
    prise: 999
}

function handlObject(anyuser){
    console.log(`name is ${anyuser.username} and the prize is ${anyuser.prise}`)
}
// handlObject(user)
handlObject({
    username: "abhi",
    prise: 888
})


const newArray = [200, 300, 400, 500]

function returnSecondValue(myArray){
    return myArray[2]
}

console.log(returnSecondValue(newArray));