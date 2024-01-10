// const tinderUser = new Object()   //This is singlton objecct
const tinderUser = {}    

tinderUser.id = "123as"
tinderUser.name = "abhishek"
tinderUser.email = "abhi@google.com"
tinderUser.loggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "abhi@chat.com",
    fullname: {
        username: {
                firstname: "Abhishek",
                lastname: "Patil"
        }
    }
}
//console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

//const obj3 = Object.assign({} ,obj1, obj2, obj4);  //Object assign: means join the objects

const obj3 = {...obj1,...obj2}     // Join many object use spread //
// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('loggedIn'));




