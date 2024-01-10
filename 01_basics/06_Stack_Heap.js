// Stack (primitive)  // Heap (Non primitive) 

// Stack
let myYoutubeName = "abhishekdotcom"

let myAnotherName = myYoutubeName
myAnotherName = "chaiaourcode"

console.log(myYoutubeName);
console.log(myAnotherName);

// Stack ke anther copy hi mili gyi
// He stack aahe value copy karun takta orignal value change hot nahi


// Heap
let userOne = {
    email: "user@gamil.com",
    upi: "user@ypl"
}

let userTwo = userOne

userTwo.email = "abhi@goole.com"

console.log(userOne.email);
console.log(userTwo.email);

// Heap ke anther jo bhi jayga use refrece hi milta hai
// Refrence meanse aap jo value change karoge ho original hi change karoge
// he Heap aahe yachat refrece bheto orignal value change hote