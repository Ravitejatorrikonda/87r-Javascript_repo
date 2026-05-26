/**
 * 
 * get->
 * post->post
 * put->update
 * patch->update
 * Delete->
 * 
 * 
 */




// fetch("http://localhost:3000/data",{"method":"GET"})
// .then(res=>res.json())
// .then(data=>console.log(data))

let options={
    "method":"DELETE",
    // "headers":{
    //     "Text-content":"application/json"
    // },
    // "body":JSON.stringify({
    //     "id":"5",
    //     "name":"Sampoornesh"
    // })
}

fetch("http://localhost:3000/data",options)
.then(res=>{
    if(res.ok){
        console.log(res.ok,res.statusText)
    }else{
        console.log("Data not created")
    }
})