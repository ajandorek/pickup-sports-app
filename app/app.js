import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import App from './config/routes';
import GMap from './components/google_map';
import EventList from './components/event_list';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        {/* <Router history={hashHistory}>
            <Route path='/' component={App}>
                <Route path='list_view' component={EventList} />
                <IndexRoute component={GMap} />
            </Route>
        </Router> */}
        <App />
    </Provider>,
    document.getElementById("app")); 