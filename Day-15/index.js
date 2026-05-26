/**
 * Promise in Javascript
 * ------------------------
 * Promise are used to overcome the callbackhell
 * promise is used to perfomr asynchronusn operations
 * 
 * 
 * Sy:-
 * 
 * datatype variname=new Promise(callback);
 * 
 * 
 * 
 * 
 */


// let promise=new Promise((resolve,reject)=>{
//      reject("failure");
// })

// promise.then((res)=>console.log(res)).catch((res)=>console.log(res))



// let data = new Promise((resolve, reject) => {
//     reject();
// })

// data.then(() => console.log("Success")).catch(() => console.log("failure"))



// function exicute(){
//     return new Promise((callback1,callback2)=>{
//         callback2("failure")
//     })
// }
// exicute().then((res)=>console.log(res)).catch((res)=>console.log(res))



// function logA(){console.log("A")}
// function logB(){console.log("B")}
// function logC(){console.log("C")}
// function logD(){console.log("D")}

// logA();
// setTimeout(logB,1000);
// Promise.resolve(()=>{
//     logC();
// });
// logD()



// Promise.resolve("success").then((res)=>console.log(res))
// Promise.reject("Failure").catch((res)=>console.log(res))


// let print=new Promise(resolve=>{
//     resolve();
// })

// print.then(()=>console.log("success"))

// let promise1=new Promise(resolve=>{
//     resolve
// })

// function promise1(){
//     return new Promise(res=>{
//         res("success")
//     })
// }

// console.log(promise1().then((ress)=>console.log(ress)))






let promise1 = new Promise((resolve, reject) => {
    console.log("Prmoise1")
    setTimeout(() => {
        resolve("Promise1 success")
    }, 3000);
})
let promise2 = new Promise((resolve, reject) => {
    console.log("Prmoise2")
    setTimeout(() => {
        resolve("Promise2 success")
    }, 1500);
})
let promise3 = new Promise((resolve, reject) => {
    console.log("Prmoise3")
    setTimeout(() => {
        resolve("Promise3 success")
    }, 2000);
})

// promise1.then(res=>console.log(res))
// promise2.then(res=>console.log(res))
// promise3.then(res=>console.log(res))

// promise1.then(res => {
//     console.log(res)
//     promise2.then(res => {
//         console.log(res)
//         promise3.then(res => {
//             console.log(res)
//         })
//     })
// })



// function sum(val){
//     return new Promise(resolve=>{
//         resolve(val+10)
//     })
// }
// sum(10).then(res=>console.log(res))
Promise.resolve(1)
  .then(val => {
    console.log(val);
    return val + 1;
  })
  .then(val => console.log(val));
