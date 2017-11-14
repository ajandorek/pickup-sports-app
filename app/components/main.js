import React, { Component, PropTypes as T } from 'react';
import Weather from '../components/weather';
import NewGame from '../components/new_game_form';
import GMap from '../components/google_map';
import AuthService from "./utils/AuthService"
import EventNav from '../components/event_nav';

class Main extends Component {
    static propTypes = {
        location: T.object,
        auth: T.instanceOf(AuthService),
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
                <div className='parent'>
                    <Weather className="content" />
                    <GMap className="content" />
                    <NewGame className="content" />
                    </div>
                    <EventNav />
            </div>
        );
    }
}

export default Main;