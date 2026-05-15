/**
 * 
 * Synchronus vs Asynchronus
 * --------------------------
 * 
 * callstack:-
 * -------------
 * 
 * 
 */

// function x(){
//     console.log("X fun");
    
// }
// function y(){
//     console.log("Y fun");
    
// }
// x();
// y();


// function x(){
//     var a=10;
//     console.log(a);
    
// }
// x();
// console.log(a);

// function x(){
//     console.log("Hello There 1")
//     setTimeout(()=>{
//         console.log("Hello There 2")
//     },3000)
//     console.log("Hello There 3");
    
// }
// x();


function x(){
    console.log("x function");
    
}
function y(){
    setTimeout(() => {
        console.log("Y function");
        
    }, 3000);
}
function Z(){
    setTimeout(() => {
        console.log("Z function");
        
    }, 3000);
}
y()
Z()
x()