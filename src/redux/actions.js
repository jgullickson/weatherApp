import Swal from "sweetalert2";

export const TOGGLE_UNITS = 'TOGGLE_UNITS';
export const toggleUnits = () => {
    return {
        type: TOGGLE_UNITS
    }
}

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const receiveData = (data, query) => {
    return {
        type: RECEIVE_DATA,
        data,
        query
    }
}

export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';
export const toggleSpinner = () => {
    return {
        type: TOGGLE_SPINNER,
    }
}

export const REFRESH = 'REFRESH';
export const refresh = () => {
    return async (dispatch, getState) => {
        dispatch(requestData());
        const { last_query } = getState();
        let data = await fetch(last_query)
                    .then(response => response.json())
                    .then(data => { return data })
                    .catch(error => console.error(error));
        if (data.error){
            console.log(data.error)
            Swal.fire({
                title: 'Oops!',
                icon: "error",
                html: `<br>${data.error.message}
                    <br>ERROR CODE: ${data.error.code}`,
            })
            dispatch(toggleSpinner())
        } else {
            let query = last_query;
            dispatch(receiveData(data, query))
        }
    }
}

export const GET_WEATHER_BY_MANUAL_LOCATION = 'GET_WEATHER_BY_MANUAL_LOCATION';
export const getWeatherByManualLocation = (location, days = 7) => {
    return async (dispatch, getState) => {
        dispatch(requestData());
        const { key } = getState();
        let url_cur = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=${days}`;
        let data = await fetch(url_cur).then(response => response.json()).then(data => {return data;}).catch(error => console.error(error))
        if (data.error){
            console.log(data.error)
            Swal.fire({
                title: 'Oops!',
                icon: "error",
                html: `You searched for <b>"${location}"</b>.
                    <br>${data.error.message}
                    <br>Please check spelling or try another location.
                    <br>ERROR CODE: ${data.error.code}`,
            })
            dispatch(toggleSpinner())
        } else {
            let query = url_cur;
            dispatch(receiveData(data, query))
        }
        // console.log(getState())
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
                    let query = url;
                    dispatch(receiveData(data, query))
                    console.log(getState())
                })
        }
        navigator.geolocation.getCurrentPosition(success, error, options)
    }
}