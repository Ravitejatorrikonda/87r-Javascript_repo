/**
 * 
 * Functions in JS:-
 * -------------------
 * 
 *Functions is a Re Usable block of code, it can re used any no of times, and re arrage our code to organize our code,
 ->Named Functions can be hoisted

 There are diff types of Functions:-
 -------------------------------------
 ->1.Named Functions
 ->2.First class Functions
 ->3.anonymous Functions
 ->4.Arrow function
 ->5.Call back Functionshigh
   6. lower order function
   7.Higher order function
   8. optional parameter function
   9. default parameter function
   10.generator function
   11.imediate invoked function
   12.constructore functions
    13.rest parameter functions
 * 
 * 
 * 
 * Sy:-
 * ---
 *   function Defination:-
 * --------------------------
 *              function funName([parameters.....]){
 *                    //statements
 *                        [ return ]
 *                  }
 * 
 * 
 * Note:-  function defination is alaway stored in a Function Name
 * 
 * Function calling:-
 * ----------------------
 *      funname();
 * 
 * 
 * 
 */



//    function kitchen(){
//     console.log("Enter into Kitchen..........");
//     order();
//     console.log("started coocking.......")
//     console.log("stop cooking..........");
//     console.log("Exist");
    
//    }
//    function order(){
//     console.log("Order taken...");
//     console.log("Went back to kitchen");
    
    
//    }

//    kitchen();
   

//    let x=()=>{
//         console.log("This is X function");
        
//     }
//     console.log(x);



// function print(a,b){
    
//     console.log(a+b);//
    
// }
// print(10);



// function x(a,b,c){
//     console.log(a+b, a)
//     y(a,c,b);
// }
// function y(a,b, c){
//     console.log(a+b+c);
    
// }
// x(10,20,30)


function x(a,b,c){
    y(a,b+c);
}
function y(a,b,c){
    console.log(a+b)
}
x(10,20,30);