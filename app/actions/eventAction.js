import axios from 'axios';

export const FETCH_EVENTS = "FETCH_EVENTS";
export function fetchEvents(sport) {
    const request = axios.get(`api/events/${sport}`);
    return{
        type: FETCH_EVENTS,
        payload:request
    }
}