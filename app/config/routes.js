import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/main';
import Container from '../components/container';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Router history={browserHistory}>
                    <Route path="/" component={Container} />
                </Router>
            </div>
        );
    }
}