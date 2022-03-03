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

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = `${temperature}°C`;

    let weather = response.data.weather[0].description;
    let currentWeather = document.querySelector("#current-weather");
    currentWeather.innerHTML = weather;

    let humidity = response.data.main.humidity;
    let currentHumidity = document.querySelector("#humidity");
    currentHumidity.innerHTML = `${humidity}%`;

    let windSpeed = response.data.wind.speed;
    let currentWindSpeed = document.querySelector("#wind-speed");
    currentWindSpeed.innerHTML = windSpeed;

    let cityName = document.querySelector("#city-name");
    cityName.innerHTML = response.data.name;
  }
  let apiKey = "5306333b3e62e52ba951ab4ebf05f12e";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", search);
