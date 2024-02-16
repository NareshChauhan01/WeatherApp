
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

async function getWeatherData() {

    let city = "goa";

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    let data = await response.json();

    console.log(data.main.temp)
}
getWeatherData()