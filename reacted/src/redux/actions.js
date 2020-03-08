export const TOGGLE_UNITS = 'TOGGLE_UNITS';
export const toggleUnits = () => {
    return {
        type: TOGGLE_UNITS
    }
}

export const TOGGLE_MODE = 'TOGGLE_MODE';
export const toggleMode = () => {
    return {
        type: TOGGLE_MODE
    }
}

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const receiveData = (data) => {
    return {
        type: RECEIVE_DATA,
        data
    }
}

export const GET_WEATHER_BY_MANUAL_LOCATION = 'GET_WEATHER_BY_MANUAL_LOCATION';
export const getWeatherByManualLocation = (location) => {
    return (dispatch, getState) => {
        const { key } = getState();
        let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch(receiveData(data))
                console.log(getState())
            })
    }
}

export const GET_WEATHER_BY_GEOLOCATION = 'GET_WEATHER_BY_GEOLOCATION';
export const getWeatherByGeoLocation = () => {
    return (dispatch, getState) => {
        let options = {
            enableHighAccuracy: true
        };
        const error = (err) => console.warn(`Error: ${err.code}: ${err.message}`);
        const success = (geoLocationObject) => {
            const { latitude, longitude } = geoLocationObject.coords;
            const { key } = getState();
            console.log(`lat: ${latitude}, lon: ${longitude}`)
            let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    dispatch(receiveData(data))
                    console.log(getState())
                })
        }
        navigator.geolocation.getCurrentPosition(success, error, options)
    }
}