import React, { Component } from 'react';
// import { Router, Route, IndexRoute } from 'react-router';

import GoogleMap from '../components/google_map';
import Main from '../components/main';
import Weather from '../components/weather';
import NewGame from '../components/new_game_form';

export default class App extends Component {
    render() {
        return (
            <div>
                <Main />
                <GoogleMap />
                <Weather />
                <NewGame />
            </div>
        );
    }
}