import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Weather from '../components/weather';
import NewGame from '../components/new_game_form';
import AuthService from "./utils/AuthService"
import EventNav from '../components/event_nav';
import EventView from '../components/event_view';

class Main extends Component {
    static propTypes = {
        location: PropTypes.object,
        auth: PropTypes.instanceOf(AuthService),
    }

    render() {
        const { auth } = this.props;
        return (
            <div className='container-fluid'>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h2 className="navbar-text">PickUp!</h2>
                        </div>
                        <button className="btn btn-info pull-right" onClick={auth.login.bind(this)}>Log In</button>
                    </div>
                </nav>
                <EventView />
                <div className='parent'>
                    <Weather className="content" />
                    {this.props.children}
                    <NewGame className="content" />
                </div>
                <EventNav />
            </div>
        );
    }
}

export default Main;