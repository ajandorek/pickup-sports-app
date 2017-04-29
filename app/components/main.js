import React, { Component, PropTypes as T } from 'react';
// import AuthService from './utils/AuthService';
import Weather from '../components/weather';
import NewGame from '../components/new_game_form';
import GMap from '../components/google_map';
import AuthService from "./utils/AuthService"
import EventNav from '../components/event_nav';

class Main extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       loggedOut: this.props.routes[1].path === "/logout"
//     };
//   }
//   static propTypes = {
//     location: T.object,
//     auth: T.instanceOf(AuthService),
//   }
//   componentWillMount() {
//     if (this.state.loggedOut) {
//         this.props.auth.logout();
//     }
//   }
//   createMessage() {
//     if (!this.state.loggedOut) {
//       return "Try Out The Login System";
//     }
//     else {
//       return "You Have Been Logged Out";
//     }
//   }
//   header() {
//     if (!this.state.loggedOut) {
//       return "Login";
//     }
//     else {
//       return "Log Out";
//     }
//   }
  render() {
    const { auth } = this.props;
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h2 className="navbar-text">PickUp!</h2>
                        </div>
                            <button className="btn btn-info pull-right">Log In</button>
                    </div>
                </nav>
                <Weather className="content"/>
                <GMap className="content"/>
                <NewGame className="content"/>
                <EventNav />
            </div>
        );
    }
}

export default Main;