import { REQUEST_EVENTS, RECEIVE_EVENTS, FAILURE_EVENTS } from '../actions/formAction';
export default function(state = {
    data: null
}, action){
    switch (action.type) {
    // case REQUEST_EVENTS:
    case RECEIVE_EVENTS:
    return Object.assign({}, state, {
            data: action.payload
      })
    // case FAILURE_EVENTS:
    }
    return state
};