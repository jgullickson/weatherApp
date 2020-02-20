const KEY = '6fa2ee15e2da46c3b7c184521202002';
// let DATA = null;
LOCATION = '';

async function getWeatherByLocation(event) {
    console.log(event)
    let url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${LOCATION}`;
    fetch(url)
        .then(response =>{
            return response.json()
        }).then(data => {
            console.log(data)
            document.getElementById('location-title').innerHTML = data.location.name;
            document.getElementById('location-region').innerHTML = `${data.location.region}, `;
            document.getElementById('location-country').innerHTML = data.location.country;
            document.getElementById('weather-icon').src = data.current.condition.icon;
            document.getElementById('weather-condition').innerHTML = data.current.condition.text;
            document.getElementById('temp').innerHTML = `${data.current.temp_f} &deg; F`;
        })
}

function setLocation(event){
    LOCATION = event.target.value
}

// getWeatherByLocation('saint paul');
// console.log(DATA)
