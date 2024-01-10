// Immediately Invoked Function Expressions (IIFE)

// iife iska use ka use global scop se bachne keliye 

(function chai (){
    // named iife
    console.log(`DB connected`);
})();

// (() => {
//     console.log(`DB connect two`);
// })()

(() => {
    console.log(`DB connect two`);
})()