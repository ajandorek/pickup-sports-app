import axios from 'axios';

export const CREATE_EVENT = "CREATE_EVENT";

export function newEvent(props) {
    const request = axios.post('/api/events', props);
    return{
        type: CREATE_EVENT,
        payload: request
    }
}