//Variables for DOM elements
var searchButton = document.getElementById("search-button");
var formInput = document.getElementById("city-input");

//Variables for API call
var weatherApiKey = "6d0d140bc9de6d8f67fbf90ff50eae92"

//Variables for main display
let locationName = document.getElementById("city-name");
let locationTemp = document.getElementById("temp");
let locationWind = document.getElementById("wind");
let locationHumidity = document.getElementById("humidity");
let locationUvIndex = document.getElementById("uv-index");

//Function to grab the city from the form and search for forecast
var weather = function(event) {
  event.preventDefault();

  let city = formInput.value.trim();
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6d0d140bc9de6d8f67fbf90ff50eae92&units=imperial"
  
  fetch(apiUrl).then(response => response.json())
    .then(json => console.log(json));
    console.log(city);

  
};

var displayWeather = function(data) {
  const { name } = data;
  console.log(name);

  document.querySelector("city").innerText = formInput;
  
}
    
//Event listener for the submit button
searchButton.addEventListener("click", weather);
  

