//Feature #1 This is the day and time
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

//Feature #2 This is the search engine feature
function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchCity.value;
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", search);

//Bonus Feature: Display the temperature in Celsius and Fahrenheit
function changeFahrenheit() {
  let celsiusTemperature = document.querySelector("#current-temperature");
  celsiusTemperature.innerHTML = "66";
}
function changeCelsius() {
  let fahrenheitTemperature = document.querySelector("#current-temperature");
  fahrenheitTemperature.innerHTML = "19";
}

let celsius = document.querySelector("#celsius-link");
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", changeFahrenheit);
celsius.addEventListener("click", changeCelsius);
