
        const apiKey= "b9bf0eac98424dc106714c595e198348";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        
        async function checkWeather(city){
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            document.querySelector(".feels-like").innerHTML = data.main.feels_like + "°c";

            if(data.weather[0].main == "clouds"){
                weatherIcon.src = "images/cloudy.png";

            }

        }
        
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
        
  