import React, { Component } from 'react';
import Main from './main';
import AuthService from './utils/AuthService';

const auth = new AuthService('OrwLWfv2mySWydRKsPIdoEKVR6-HPagE', 'ajandorek.auth0.com');

export default class Container extends Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
        <div className='container-fluid'>
        <Main auth={auth}/>
        </div>
    )
  }
}
