/**
 * 
 * Get,post,put,patch,Delete
 * 
 * 
 */


// fetch("http://localhost:3000/products/3",{
//     "method":"DELETE"
// }).then(res=>{
//     console.log(res.status,res.statusText)
// }).catch(data=>console.log(data))

// let options = {
//     "method": "GET"
// }
// fetch("http://localhost:3000/products", options)
//     .then(res => res.json())
//     .then(res => {
//         for (i = 0; i <= res.length; i++) {
//             fetch(`http://localhost:3000/products/${res[i].id}`, {
//                 "method": "DELETE"
//             }).then(res => {
//                 console.log(res.status, res.statusText)
//             }).catch(res => console.log(res))
//         }
//     })

let data = [
    {
        "id": "1",
        "name": "mukesh"
    },
    {
        "id": "2",
        "name": "asish"
    },
    {
        "id": "3",
        "name": "Likith"
    },
    {
        "id": "4",
        "name": "Rahul"
    },
    {
        "id": "5",
        "name": "Rohith"
    },
]

let options={
    "method":"POST",
    "headers":{
        "Text-Content":"application/json"
    },

}

for(i=0;i<data.length;i++){
    let obj=data[i];
   options.body=JSON.stringify(obj)
   fetch("http://localhost:3000/products",options)
   .then(res=>{
    console.log(res.status,res.statusText)
   }).catch(res=>console.log(data))
}