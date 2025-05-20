let inputCity = document.getElementById('cityName')
let buttonSubmit = document.getElementById('submitCityName')
let weatherDetails = document.getElementById('weatherDetails')


function showData(data){
    console.log(data);
    weatherDetails.innerHTML = `
        <h1>${data.name} , ${data.sys.country}</h1>
        <p>Rain : <b>${data.weather[0].main}</b></p>
    `
}


function getWEatherInfoOfCity(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca018df54353f065aaed7d802825b8be`)
    .then(responce=>responce.json())     //JSON.stringify(responce)
    .then(data=>showData(data))
}




buttonSubmit.addEventListener('click', ()=>{
    let city = inputCity.value
    console.log(city)
    getWEatherInfoOfCity(city)
})




