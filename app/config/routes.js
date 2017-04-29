import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/main';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Router history={browserHistory}>
                    <Route path="/" component={Main} />
                    {/*<Route path="/" component={GoogleMap} />
                    <Route path="/" component={Weather} />
                    <Route path="/" component={NewGame} />*/}
                    {/*<Route path="/login" component={Login} />*/}
                    {/*<Main />
                    <GoogleMap />
                    <Weather />
                    <NewGame />*/}
                </Router>
            </div>
        );
    }
}