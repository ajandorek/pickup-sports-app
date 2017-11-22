import fetch from 'isomorphic-fetch';
var API_KEY = 'e81dc1712e53391f108b9af5f4ebc3ad';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=${API_KEY}`

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
function requestWeather() {
    return {
        type: REQUEST_WEATHER
    }
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
function receiveWeather(data) {
    return {
        type: RECEIVE_WEATHER,
        payload: data
    }
}

export const FAILURE_WEATHER = 'FAILURE_WEATHER';
function failureWeather(message) {
    return {
        type: FAILURE_WEATHER,
        payload: {
            message
        }
    }
}

export function fetchWeather() {
    return function (dispatch) {
        dispatch(requestWeather())
        return fetch(ROOT_URL)
            .then(response => {
                if (response.status >= 400) {
                    dispatch(failureWeather("Bad response from server"));
                }
                return response.json();
            })
            .then(data => {
                dispatch(receiveWeather(data))
            });
    }
}