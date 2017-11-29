import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main';
import Container from '../components/container';
import GMap from '../components/google_map';
import EventList from '../components/event_list';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Router history={hashHistory}>
                    <Route path="/" component={Container}>
                        <Route path='list_view' component={EventList} />
                        <IndexRoute component={GMap} />
                    </Route>
                </Router>
            </div>
        );
    }
}