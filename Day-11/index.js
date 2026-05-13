/**
 * 
 * Named function
 * higher order function
 * lower order fun
 * First class
 * callback
 * anonymous func
 * 
 * 
 * Arrow function:-
 * -----------------
 * a function does not have function key word and function name and it is defined with symbol =>, is known as a arrow function
 * 
 * it is a short hand property of anonymous fun
 * 
 * is is also used for asynchronus operations
 * 
 * ()=>{
 * //statements
 * }
 * 
 * 
 */


// var x=()=>{
//     console.log("Hello There")
// }

// x();

// function x(callback){
//   console.log( callback(10));
  
    
// }

// x(a=>{return a})

// function print(callback1, callback2){
//     var res1=callback1(10);
//     var res2=callback2(20)
//     console.log(res1,res2)
// }
// print( a=>a,b=>b
// );

// function X(callback1, callback2){
// console.log("X function");
// console.log(callback1("hello"));

// console.log(callback2("likith"));



// }

// X( name1=>{
//     console.log("Y function");
//     return name1  
// },
//  name2=>{
//     console.log("Z function");
//     return name2
// }
// )



function A(callback1,callback2){
    var res=callback1(20)+callback2(40)
    console.log(res);
    
}

A(a=>a+20, b=>b+30)