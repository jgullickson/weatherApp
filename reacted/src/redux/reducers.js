import { createStore, applyMiddleware } from 'redux';
import { TOGGLE_UNITS, TOGGLE_MODE, RECEIVE_DATA } from './actions';
import ReduxThunk from 'redux-thunk';

const defaultState = {
    key: '6fa2ee15e2da46c3b7c184521202002',
    units: 'imperial',
    mode: 'geo',
    data: {}
}

const mainReducer = (state = defaultState, action) => {
    switch(action.type){
        case TOGGLE_UNITS:
            return Object.assign({}, state, { units: state.units === 'imperial' ? 'metric' : 'imperial'});
        case TOGGLE_MODE:
            return Object.assign({}, state, { mode: state.mode === 'geo' ? 'manual' : 'geo'});
        case RECEIVE_DATA:
            console.log('receiving data');
            return Object.assign({}, state, { data: action.data });
        default:
            return state;
    }
}

export const store = createStore(mainReducer, applyMiddleware(ReduxThunk));