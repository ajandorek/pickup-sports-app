import React, { Component } from 'react';
// import { Router, Route, IndexRoute } from 'react-router';

import GoogleMap from '../components/google_map';
import Main from '../components/main';

class App extends Component {

    render() {
        return (
            <div>
                <Main />
                <GoogleMap />
            </div>
        );
    }
}
module.exports = App;