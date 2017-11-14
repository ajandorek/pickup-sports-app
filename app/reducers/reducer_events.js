import { RECEIVE_EVENTS, FAILURE_EVENTS, FETCH_FILTERED_EVENTS } from '../actions/formAction';
export default function (state = {
    data: null
}, action) {
    switch (action.type) {
        // case REQUEST_EVENTS:
        case 'FETCH_EVENTS_FULFILLED':
            return Object.assign({}, state, {
                data: action.payload
            })
            break;
        case 'CREATE_EVENT_FULFILLED':
            return Object.assign({}, state, {
                data: {
                    data: state.data.data.concat(action.payload.data)
                }
            })
            break;
        case 'FETCH_FILTERED_EVENTS_FULFILLED':
            console.log(action.payload);
            return Object.assign({}, state, {
                data: action.payload
            })
        case FAILURE_EVENTS:
    }
    return state
};