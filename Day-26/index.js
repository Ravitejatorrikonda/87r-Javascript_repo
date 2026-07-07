/**
 * 
 * 
 * 
 * 
 */
function showdata(){
  let input= document.getElementById("city")
       getData(input.value);
}
async function getData(city){
const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f2a9ec4dd7mshb2ceeb0706a4475p1eb426jsnb14d36b9faee',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	displayData(result.main.temp)
} catch (error) {
	console.log(error);
}
}

function displayData(data){
  let container=document.getElementById("main")
  container.innerHTML=`
  <h3>Temparature : ${data}</h3>
  `

}
