/**
 * 
 * 
 * 
 */

fetch("http://localhost:3000/products/4",{
    "method":"PUT",
    "headers":{
        "Text-Content":"application/json"
    },
    "body":JSON.stringify({
        
        "name":"Donkey"
    })
}).then(res=>{
    if(res.ok){
        console.log(res.status, res.statusText)
    }else{
        console.log("Data not deleted...");
        
    }
}).catch(data=>console.log(data))
