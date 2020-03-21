import { createStore, applyMiddleware } from 'redux';
import { TOGGLE_UNITS, TOGGLE_MODE, REQUEST_DATA, RECEIVE_DATA, TOGGLE_SPINNER } from './actions';
import ReduxThunk from 'redux-thunk';

const defaultState = {
    key: '6fa2ee15e2da46c3b7c184521202002',
    units: 'imperial',
    mode: 'geo',
    isFetching: false,
    data: {
        forecast: {}
    }
}

const mainReducer = (state = defaultState, action) => {
    switch(action.type){
        case TOGGLE_UNITS:
            return Object.assign({}, state, { units: state.units === 'imperial' ? 'metric' : 'imperial'});
        case TOGGLE_MODE:
            return Object.assign({}, state, { mode: state.mode === 'geo' ? 'manual' : 'geo'});
        case REQUEST_DATA:
            return Object.assign({}, state, { isFetching: true });
        case RECEIVE_DATA:
            console.log('receiving data');
            return Object.assign({}, state, { isFetching: false, data: action.data });
        case TOGGLE_SPINNER:
            return Object.assign({}, state, { isFetching: !state.isFetching })
        default:
            return state;
    }
}

export const store = createStore(mainReducer, applyMiddleware(ReduxThunk));