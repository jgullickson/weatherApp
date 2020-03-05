import { createStore, applyMiddleware } from 'redux';
import { TOGGLE_UNITS, UPDATE_LOCATION, RECEIVE_DATA } from './actions';
import ReduxThunk from 'redux-thunk';

const defaultState = {
    key: '6fa2ee15e2da46c3b7c184521202002',
    manual_location: 'not set',
    geolocation: {
        lat: '0',
        lon: '0'
    },
    units: 'imperial',
    data: {}
}

const mainReducer = (state = defaultState, action) => {
    switch(action.type){
        case TOGGLE_UNITS:
            return Object.assign({}, state, { units: state.units === 'imperial' ? 'metric' : 'imperial'});
        case UPDATE_LOCATION:
            console.log('location updating');
            return Object.assign({}, state, { manual_location: action.location });
        case RECEIVE_DATA:
            console.log('receiving data');
            return Object.assign({}, state, { data: action.data });
        default:
            return state;
    }
}

export const store = createStore(mainReducer, applyMiddleware(ReduxThunk));