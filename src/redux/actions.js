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

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => {
    return {
        type: REQUEST_DATA
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
export const getWeatherByManualLocation = (location, days = 7) => {
    return (dispatch, getState) => {
        dispatch(requestData());
        const { key } = getState();
        let url_cur = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=${days}`;
        fetch(url_cur)
            .then(response => response.json())
            .then(data => {
                dispatch(receiveData(data))
                console.log(getState())
            })
    }
}

export const GET_WEATHER_BY_GEOLOCATION = 'GET_WEATHER_BY_GEOLOCATION';
export const getWeatherByGeoLocation = (days = 7) => {
    return (dispatch, getState) => {
        dispatch(requestData());
        let options = {
            enableHighAccuracy: true
        };
        const error = (err) => console.warn(`Error: ${err.code}: ${err.message}`);
        const success = (geoLocationObject) => {
            const { latitude, longitude } = geoLocationObject.coords;
            const { key } = getState();
            console.log(`lat: ${latitude}, lon: ${longitude}`)
            let url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=${days}`;
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