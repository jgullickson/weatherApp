export const TOGGLE_UNITS = 'TOGGLE_UNITS';
export const toggleUnits = () => {
    return {
        type: TOGGLE_UNITS
    }
}

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const updateLocation = (location) => {
    return {
        type: UPDATE_LOCATION,
        location
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
export const getWeatherByManualLocation = (updatedLocation) => {
    return (dispatch, getState) => {

        dispatch(updateLocation(updatedLocation));
        
        const { key, manual_location } = getState();
        let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${manual_location}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch(receiveData(data))
                console.log(getState())
            })
    }
}