/**
 * 
 * 
 * 
 * 
 * Events IN Js:-
 * ---------------
 */


// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// btn1.onclick = () => {
//     document.body.style.background = "red";

//     btn2.style.display="none";
//     // btn2.remove();
// }






// btn.onclick=()=>{
    //     container.style.display="none";
    // }
    // btn.addEventListener("click",async()=>{
        //     container.style.display="none";
        // })
        
        let btn=document.getElementById("btn1");
        
        btn.addEventListener("click",async()=>{
            let res=await fetch("https://fakestoreapi.com/products");
            let data=await res.json();
            showdata(data);
        })
        
        let container=document.getElementsByClassName("main")[0]
        function showdata(data){
            data.forEach(ele => {
               let item=document.createElement("div")
               item.innerHTML=`
               <p>Id : ${ele.id}</p>
               <p>Title : ${ele.title}</p>
               <img src='${ele.image}'>
               `
               container.appendChild(item);
            });

        }



