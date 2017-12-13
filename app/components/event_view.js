import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

let EventView = () => {
  return (
    <div className="eventView">
      <IndexLink to='/' >
        <RaisedButton primary={true} label='Map View' />
      </IndexLink>
      <Link to='/list_view'>
        <RaisedButton primary={true} label='List View' />
      </Link>
    </div>
  )
}

export default EventView;