/**
 * 
 * 
 * 
 * 
 */

// function sum(val){
//     return new Promise((resolve,reject)=>{
//         resolve(val+10);
//     })
// }

// sum().then(res=>console.log(res))



// let promise1 = new Promise((res, rej) => {
//     rej("hello there ")
// });

// console.log(promise1.then((res)=>console.log(res)).catch(res=>console.log(res)))




// function sum(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val + 10);
//     })
// }

// function sub(val) {
//     return new Promise(res => {
//         res(val - 5);
//     })
// }
// function mul(val) {
//     return new Promise(resolve => {
//         resolve(val * 5);
//     })
// }
// function div(val) {
//     return new Promise(resolve => {
//         resolve(val / 2);
//     })
// }



// sum(10).then(res=>console.log(res))
// sub(10).then(res=>console.log(res));
// mul(10).then(res=>console.log(res));
// div(10).then(res=>console.log(res));


// sum(10).then(sumres => {
//     // console.log(sumres)
//     sub(sumres).then(subres => {
//         // console.log(subres);
//         mul(subres).then(mulres => {
//             // console.log(mulres);
//             div(mulres).then(divres => {
//                 console.log(divres);

//             })

//         })

//     })
// })


// let promise1=new Promise((res,rej)=>{
//     rej("failure")
// })
// promise1.then(res=>console.log(res)).catch(res=>console.warn(res))



// const URL = "https://fakestoreapi.com/products";
// fetch(URL).then((res) => {
//     return res.json();
// }).then(res => console.log(res))

// const URL="https://fakestoreapi.com/products"

// fetch(URL).then(res=>res.json()).then(data=>console.log(data))




// fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => {
//         for(i=0;i<data.length;i++){
//             console.log(data[i].rating.rate)
//         }
//     })


// fetch("https://dummyjson.com/quotes")
// .then(res=>
//     {
//         if(!res.ok){
//             console.log("something went wrong")
//         }else{
//             return res.json();
//         }
//     })
// .then(data=>{
//     for(i=0;i<data.quotes.length;i++){
//         console.log(data.quotes[i].quote)
//     }
// })



