/**
 * 
 * foreach, splice, filter, map
 * 
 */



async function fetchData() {
    let res = await fetch("http://localhost:3000/products");
    try {
        if (!res.ok) {
            throw new Error("Something went wrong");

        }
        let data = await res.json();

        localStorage.setItem("products", JSON.stringify(data));
        // console.log(data)

        displayData(data);
    } catch (error) {
        console.log(error)
    }
}

//Filter btn
function filterbtn() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let datas = products.map(product => product.category);
    let sets = new Set(datas)
    
    let fdata= Array.from(sets);

    let btnContainer=document.getElementById("btn-container");
   fdata.forEach(obj=>{
    let btn=document.createElement("button");
    btn.innerHTML=obj;
    btnContainer.appendChild(btn);
    btn.onclick=()=>{
        filterData(obj);
    }
   })
   
    
}



//filter data

function filterData(catego) {
    // let cat = window.prompt();//cat
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let filterdata = products.filter(product => product.category == catego);

    //    console.log(filterdata)

    displayData(filterdata)
}



//displaying data
function displayData(products) {
    // let products= JSON.parse( localStorage.getItem("products"))||[];
    // console.log(products)
    if (products.length == 0) {
        fetchData();
    } else {
        let container = document.getElementById("container");
        container.innerHTML = "";
        products.forEach((obj, index) => {
            let item = document.createElement("div");
            item.innerHTML = `
            <h3>Id : ${obj.id}</h3>
            <img src='${obj.image}'>
            <p>Price : ${obj.price}</p>
            <p>Category : ${obj.category}</p>
            <button onclick="deleteData(${index})">Delete</button>
            `
            container.appendChild(item);
        });
    }

}

//Deletying the data

function deleteData(index) {
    let products = JSON.parse(localStorage.getItem("products"))
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    displayData(products);
}



window.onload = () => {
    let products = JSON.parse(localStorage.getItem("products")) || []
    if (products.length == 0) {
        fetchData();
    } else {
        displayData(products)
        filterbtn()
    }
}

