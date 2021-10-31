const iconObj = {
   "clear sky" : "☀️",
   "few clouds" : "⛅",
   "scattered clouds" : "☁",
   "broken clouds" : "☁",
   "shower rain" : "☔",
   "rain" : "☂",
   "thunderstorm" : "⚡",
   "snow" : "❄️",
   "mist" : "💦",
}

const API_KEY ="f62c9e56b478aebeb0306206b24cb18a";
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lng = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
     fetch(url)
       .then((response) => response.json())
       .then((data) => {
       const weatherOfCity = document.querySelector(".weatherofcity");
       const weatherName = document.querySelector(".weatherofname");
        weatherOfCity.innerText = data.name;
        weatherName.innerText  = `${data.weather[0].description}${iconObj[data.weather[0].description]} / ${data.main.temp}°C`;
   });
}

function onGeoError(){
   alert("Cannot upload Weather");
}

