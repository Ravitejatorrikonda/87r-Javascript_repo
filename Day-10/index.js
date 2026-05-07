/**
 * 
 * a fun defination is passing as a arggiment to another funcalling is known as a callback function
 * 
 * to perform asynchronus operations 
 * 
 * 
 * First class Function:-
 * ----------------------
 * a function which is stored in a variable ref is known as a first class function
 * 
 */

//  var y=function x(){
//     console.log("Hello There")
// }
// // x();

// y()

// function funone(a,b,callback){
//     return a+b+callback(a,b)
// }
// function funtwo(c,b){
//     console.log(c+b)
// }

// funone(10,20,funtwo)

// //a function parameter which is passing as a callback is known as a higherorder //function
// function funthree(a, b,c,d) {
//     var result = a(a,b) + b(a, b);
//     console.log(result);//60
// }

// function funfour(a, b) {
//     return a+b;
// }
// function funfive(a,b){
//     return a+b
// }
// funthree(funfour, funfive)

/**
 * 
 * anonymous function:-
 * -------------------
 * a function does not have fun name is known as a anonymous function
 * 
 * we can stored in a variable / passing as a argument to another function calling
 * 
 * function (){
 * //statements
 * }
 * 
 * 
 */

// var x=function (){
//     console.log("Hello There")
// }
// x();


// function print1(callback) {
//     callback("Hellothere")
// }



// print1(function (s) {
//     console.log(s);

// });

function x(callback){
    return callback(10);
}



x(
    function (a){
    console.log(a+10);
    
}
)