let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let newDate = document.querySelector("#temp-day");
newDate.innerHTML = `${day}, ${hours}: ${minutes} `;

//Challenge 1
function getWeather(response) {
  document.querySelector("#temp-city").innerHTML = response.data.name;
  document.querySelector("#temp-celsius").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "302c93e3e9e39b90c8c02a8d733c82ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(getWeather);
}

function displayWeatherInfo(event) {
  event.preventDefault();
  let apiKey = "302c93e3e9e39b90c8c02a8d733c82ec";
  let city = document.querySelector("#name-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(getWeather);
}

let form = document.querySelector("#details-form");
form.addEventListener("submit", displayWeatherInfo);

searchCity("Lagos");
//Bonus 2
