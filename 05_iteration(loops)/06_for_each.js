const coding = ["js", "cpp", "py", "java", "rb"]

// coding.forEach( function (val){
//      console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// coding.forEach(element => {
//     console.log(element);
// });

coding.forEach( (item, index, array) => {
    console.log(item, index, array);
})


const myCoding = [
    {
        languagername: "JavaScript",
        languagernamefile: "js"
    },
    {
        languagername: "Ruby",
        languagernamefile: "rb"
    },
    {
        languagername: "Python",
        languagernamefile: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languagername);
})