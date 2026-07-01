/**
 * 
 * 
 * 
 */

// let ul=document.createElement("ul")
// for(i=1;i<=3;i++){
//    let li= document.createElement("li")
//    li.innerText=i;
//    ul.appendChild(li)
// }
// document.body.appendChild(ul);


// let table=document.createElement("table");
// let row=document.createElement("tr")
// for(i=1;i<=3;i++){
//     let td=document.createElement("td")
//     td.innerText=i;
//     row.appendChild(td);
// }
// table.appendChild(row)
// document.body.appendChild(table)

// let div1=document.createElement("div")
// div1.innerText="<i>javascript</i>";
// document.body.appendChild(div1)

// let div2=document.createElement("div");
// div2.innerHTML="<i style='color:red'>javascript</i>";
// document.body.appendChild(div2)


// let div=document.createElement("div");
// div.id="main";
// div.className="container"

// div.setAttribute("name","cont-2")
// console.log(div)



/**
 * div
 *     p ->name1
 *     p ->name2
 *     p ->name3
 * 
*/
// let data=["sandeep","anudeep","mahinder","yash"]

// let div=document.createElement("div")
// data.forEach(ele=>{
//     let p=document.createElement("p");
//     p.innerText=ele;
//     div.appendChild(p)
// })
// document.body.appendChild(div)


let data=[
   {"id":"1",
    "name":"BOB"
   },
   {"id":"2",
    "name":"Pavan"
   },
   {"id":"3",
    "name":"Allu"
   },
   {"id":"4",
    "name":"Ramcharan"
   },
   {"id":"5",
    "name":"NTR"
   }


]

/**
 * 
 * div
 *   p->name=BOB
 *   p->name=Pavan
 */


let div=document.createElement("div")
data.forEach(ele=>{
    let p=document.createElement("p");
    p.innerHTML=`<p>Name = ${ele.name}</p>  <p>Price : ${ele.id}</p> ` ;
    div.appendChild(p)
})
document.body.appendChild(div)