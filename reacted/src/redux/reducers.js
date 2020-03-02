import { createStore, applyMiddleware } from 'redux';
import { TOGGLE_UNITS } from './actions';
import ReduxThunk from 'redux-thunk';

const defaultState = {
    key: '6fa2ee15e2da46c3b7c184521202002',
    manual_location: '',
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
        default:
            return state;
    }
}

export const store = createStore(mainReducer, applyMiddleware(ReduxThunk));