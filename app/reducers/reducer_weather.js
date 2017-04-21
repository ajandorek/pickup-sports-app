import { REQUEST_WEATHER, RECEIVE_WEATHER, FAILURE_WEATHER } from '../actions/weatherAction';

export default function(state = {
    isFetching: false,
    didInvalidate: false,
    data: null
    }, action) {
    switch (action.type) {
    case REQUEST_WEATHER: 
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false,
        })
    case RECEIVE_WEATHER:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            data: action.payload,
            lastUpdated: action.receivedAt
      })
    case FAILURE_WEATHER:
        return Object.assign({}, state, {
            didInvalidate: true
        })
    }
    
    return state;
}