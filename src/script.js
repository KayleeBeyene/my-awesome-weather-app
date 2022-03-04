let now = new Date();
let currentDay = document.querySelector("#current-day");
let currentTime = document.querySelector("#current-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = now.getDay();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
currentDay.innerHTML = days[day];
currentTime.innerHTML = `${hours}:${minutes}`;



function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}`;
  celsiusTemperature = response.data.main.temp
  let weather = response.data.weather[0].description;
  let currentWeather = document.querySelector("#current-weather");
  currentWeather.innerHTML = weather;


  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${humidity}%`;

  let windSpeed = response.data.wind.speed;
  let currentWindSpeed = document.querySelector("#wind-speed");
  currentWindSpeed.innerHTML = windSpeed;

  let cityName = response.data.name;
  let city = document.querySelector("#city-name");
  city.innerHTML = cityName;
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  searchCity(city);
}
function searchCity(city) {
  let apiKey = "5306333b3e62e52ba951ab4ebf05f12e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function searchLocation(position) {
  let apiKey = "5306333b3e62e52ba951ab4ebf05f12e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function showCelsiusTemperature(event) {
  event.preventDefault()
  let temperatureElement = document.querySelector("#current-temperature")
temperatureElement.innerHTML = Math.round(celsiusTemperature)
celsiusLink.classList.add("active")
fahrenheitLink.classList.remove("active")
}

function showFahrenheitTemperature(event) {
event.preventDefault()
let fahrenheitTemperature = (celsiusTemperature * 9)/ 5 + 32 
let temperatureElement = document.querySelector("#current-temperature")
celsiusLink.classList.remove("active")
fahrenheitLink.classList.add("active")
temperatureElement.innerHTML = Math.round(fahrenheitTemperature)
console.log(celsiusTemperature)
}
let celsiusTemperature = null;

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", search);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let fahrenheitLink = document.querySelector("#fahrenheit")
fahrenheitLink.addEventListener("click", showFahrenheitTemperature)


let celsiusLink = document.querySelector("#celsius")
celsiusLink.addEventListener("click", showCelsiusTemperature)

searchCity("Calgary");