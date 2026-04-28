/**
 *
 * what is loop?
 *  starting at a point end at point when u meet the condition.
 * 
 * when we use loops ?
 * when u wanted to exctue the bock of code multiple times
 * 
 * types of loops
 *   for 
 *   while 
 *   do while 
 *   for...in 
 *   for...of
 * 
 *   synatx for for loop:
 *     for(intilation; condition ; update){
 *       // code 
 *       }  
 * 
 *     intilation
 *         |
 *     conditon (true-> code run in block)
 *       |
 *     update
 *        |
 *      condition(false-> exit)
 *     
 * while loop
 * 
 * syntax for while loop:
 * 
 * intialization
 * while(condition){
 *  //code
 * updation
 * }
 * 
 * 
 * let a = 10;
 * let b = 20;
 * while(a<b){
 *  console.log(a);
 * a++;
 * b--;
 * }
 * 
 * syntax:
 * intialization
 * do{
 * updation
 * }while(condition)
 * 
 * for...of
 * 
 * 
 * let arr= [10,20,30]
 * for( )
 * 
 */


// console.log("2 * 1"+ 2);

// console.log("2 * 2"+ 4);

// const table=2;
// var i;
// for(i=1;i<=20;i++){
//     console.log("2 * "+ i +" = "+(table*i));
// }

// 

let obj={
    insta: "instagram",
    fb: "facebook"
}
for(let i in obj){
    console.log(i ,obj[i]);
    
}