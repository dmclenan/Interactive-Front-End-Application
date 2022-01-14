// Global varibles
var searhHistory = [];
var weatherApi = "https://api.openweathermap.org";
var weatherApikey = "8d454173b027d1db0c34d03591638b8e";
// Fetch weather function while Utillize the weather api
function fetchWeather(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + weatherApikey)
        .then(response => response.json())
        .then(data => {
            populatedCurrentWeather(data)
            console.log(data)
        });
}
// Fetching the coordinates of the city
function getCityCoord(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + weatherApikey)
        .then(response => response.json())
        .then(data => {
            console.log(data.coord)
            var lat = data.coord.lat
            var lon = data.coord.lon
            fetchWeather(lat, lon)
        });
}
// Seacrh button which dynamically change depending on the city
const searchBtn = document.getElementById("search");
searchBtn.addEventListener('click', function (event) {
    event.preventDefault()
    var cityInput = document.getElementById("citySearch")
    console.log(cityInput.value)
    getCityCoord(cityInput.value);
})
//Dom elements
const clearHistory = document.getElementById("clear-history");
const currentCity = document.getElementById("current-city");
const currentTemperature = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWindSpeed = document.getElementById("wind-speed");
const currentUvindex = document.getElementById("uv-index");

// Function that populated the current weather/temp into text
function populatedCurrentWeather(weather) {
    currentTemperature.textContent = weather.current.temp
    console.log(weather.current.temp)
}



// function that saves things to local storage
// A way to pull things from local storage




