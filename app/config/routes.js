import React, { Component } from 'react';
// import { Router, Route, IndexRoute } from 'react-router';

import GoogleMap from '../components/google_map';
import Main from '../components/main';
import Weather from '../components/weather';

export default class App extends Component {
    render() {
        return (
            <div>
                <Main />
                <GoogleMap />
                <Weather />
            </div>
        );
    }
}