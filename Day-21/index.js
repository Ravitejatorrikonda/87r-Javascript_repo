/**
 * Array ityerative methods:-
 * ----------------------------
 * foreach, map, filter,reduce, reduceright, find, some
 * 
 * 
 * foreach((ele,index,arr)=>{
 * })
 * 
 */

// let arr=[1,2,3,4,5,6, , ,undefined,undefined];
// arr.forEach((ele)=>{
//     console.log(ele)
// })


// fetch("http://localhost:3000/products")
// .then(res=>res.json())
// .then(res=>{
//     res.forEach(ele => {
//         console.log(ele)
//     });
// })


//o/p:-[1,4,9,16,25]

// let newarr=[]
// for(i=0;i< arr.length;i++){
    //   newarr.push(arr[i]**2)
    // }
    // console.log(newarr)
    
    // let arr=[1,2,3,4,5]
    // let newarr=[];
    // arr.forEach((ele)=>newarr.push(ele ** 2))
    // console.log(newarr)


    // let arr=[1,2,3,4,5]
    // //o/p:-[odd,even,odd,even,odd]

//     let arr=[1,2,3,4,5]

//    let newarr= arr.map((ele)=>ele * ele)
//    console.log(newarr)

// let arr=["html","css","javascript","reactjs"]
// let newarr=[]
// arr.forEach((ele)=>newarr.push(ele.toUpperCase()))
// console.log(newarr)


// let newarr1=arr.map((ele)=>ele.toUpperCase())
// console.log(newarr1)





let arr=[1,2,3,4,5]

let newarr=arr.filter((ele)=>ele%2==0)
console.log(newarr)
