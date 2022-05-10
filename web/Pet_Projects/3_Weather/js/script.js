fetch("https://api.openweathermap.org/data/2.5/weather?lat=47.83&lon=35.16&appid=cc388093753ffe4cb9cde218c9f915e2")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
        document.querySelector(".weather__content-city").textContent = `${data.name} (${data.sys.country})`;
        document.querySelector(".weather__content-temperature").innerHTML = Math.floor(data.main.temp - 273) + "&degC";
        document.querySelector(".weather__content-fellslike").innerHTML = "(Feels like " + Math.floor(data.main.feels_like - 273) + "&degC)";
        document.querySelector(".weather__content-description").textContent = data.weather[0].description;
        document.querySelector(".wind__speed").textContent = `${data.wind.speed} m/sec`;
        document.querySelector(".wind__deg").innerHTML = data.wind.deg + "&deg";
    });
