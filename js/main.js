const KEY = '6fa2ee15e2da46c3b7c184521202002';
// let DATA = null;
LOCATION = '';
UNITS = 'metric';

async function getWeatherByLocation(event) {
    console.log(event)
    let url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${LOCATION}`;
    fetch(url)
        .then(response =>{
            console.log(response)
            return response.json()
        }).then(data => {
            console.log(data)
            document.getElementById('location-title').innerHTML = data.location.name;
            document.getElementById('location-region').innerHTML = `${data.location.region}, `;
            document.getElementById('location-country').innerHTML = data.location.country;
            document.getElementById('weather-icon').src = data.current.condition.icon;
            document.getElementById('weather-condition').innerHTML = data.current.condition.text;
            document.getElementById('temp').innerHTML = UNITS === 'imperial' ? `${data.current.temp_f} &deg; F` : `${data.current.temp_c} &deg; C`;
            document.getElementById('wind').innerHTML = UNITS === 'imperial' ? `<b>Wind: </b> ${data.current.wind_mph} mph <span class='dir'>${data.current.wind_dir}</span>` : `<b>Wind: </b> ${data.current.wind_kph} kph <span class='dir'>${data.current.wind_dir}</span>`; 
            document.getElementById('uv').innerHTML = `<b>UV: </b>${data.current.uv}`
            document.getElementById('feel').innerHTML = UNITS === 'imperial' ? `<b>Feels like: </b>${data.current.feelslike_f} &deg; F` : `<b>Feels like: </b>${data.current.feelslike_c} &deg; C`;
        })
}

function setLocation(event){
    LOCATION = event.target.value
}

// getWeatherByLocation('saint paul');
// console.log(DATA)


//for kelly
//uv index, felt temp, celsius, wind