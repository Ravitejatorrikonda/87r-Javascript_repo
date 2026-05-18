/**
 * 
 * 
 * 
 */

// console.log("Start");
// setTimeout(() => {
//    console.log("First callback");

// }, 3000);
// for(i=0;i<=50000;i++){
//     console.log("i");

// }
// setTimeout(() => {
//    console.log("Second callback");

// }, 2000);






// function sum(val, callback) {
//     callback(val + 10);
// }


// function sub(val, callback) {
//     if(false){
//         callback(val - 5);
//     }else{
//         console.log("something went wrong")
//     }
// }



// function mul(val, callback) {
//     callback(val * 10);
// }


// function div(val, callback) {
//     callback(val / 2)
// }




// sum(10, (sumres) => {
//     console.log(sumres)
//     sub(sumres, (subres) => {
//         console.log(subres)
//         mul(subres, (mulres) => {
//             console.log(mulres)
//             div(mulres, (divres) => {
//                 console.log(divres)
//             })
//         })
//     })
// })

function order(dispatch) {
    console.log("Order placed successfullly")
    dispatch("Dispatch successfully")
}
function shipping(delvery) {
    console.log("Shipping success");
    delvery("Out of delevery")

}
order((res1) => {
    console.log(res1)
    shipping((res2) => {
        console.log(res2)
    })
})