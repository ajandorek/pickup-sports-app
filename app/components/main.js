import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Weather from '../components/weather';
import NewGame from '../components/new_game_form';
import AuthService from "./utils/AuthService"
import EventNav from '../components/event_nav';
import EventView from '../components/event_view';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';

class Main extends Component {
    static propTypes = {
        location: PropTypes.object,
        auth: PropTypes.instanceOf(AuthService),
    }

    render() {
        const { auth } = this.props;
        return (
            <div className='container-fluid'>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="PickUp!" />
                    </ToolbarGroup>
                    <ToolbarSeparator />
                    <ToolbarGroup>
                        <RaisedButton label="Login" primary={true} onClick={auth.login.bind(this)} />
                    </ToolbarGroup>
                </Toolbar>
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