import axios from 'axios';

export const CREATE_EVENT = "CREATE_EVENT";

export function newEvent(props) {
    const request = axios.post('/api/events', props)
    return{
        type: CREATE_EVENT,
        payload: request
    }
}
export const FETCH_EVENTS = "FETCH_EVENTS";
export function fetchEvents() {
    const request = axios.get('api/events')
    return{
        type: FETCH_EVENTS,
        payload:request
    }
}

// export const REQUEST_EVENTS = 'REQUEST_EVENTS';
// function requestEvents() {
//     return {
//         type: REQUEST_EVENTS
//     }
// }

// export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
// function receiveEvents(data) {
//     return {
//         type: RECEIVE_EVENTS,
//         payload: data
//     }
// }

// export const FAILURE_EVENTS = 'FAILURE_EVENTS';
// function failureEvents(message) {
//     return {
//         type: FAILURE_EVENTS,
//         payload: {
//             message
//         }
//     }
// }

// export function fetchEvents() {
//     return function (dispatch) {
//         dispatch(requestEvents())
//         return axios.get('api/events')
//             .then(response => {
//                 if (response.status >= 400) {
//                     dispatch(failureEvents("Bad response from server"));
//                 }
//                 return response.json
//             })
//             .then(data => {
//                 dispatch(receiveEvents(data))
//             });
//     }
// }