function one(){
    const username = "Abhishek"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    two()

}
// one()

if (true){
    const username = "abhishek"
    if(username === "abhishek"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++ intresting +++++++++++++++++++


addone(5)               // this is access 
function addone(num){
    return num + 1
}



addTwo(6)                 // before can't access
const addTwo = function(num){
    return num + 2
}