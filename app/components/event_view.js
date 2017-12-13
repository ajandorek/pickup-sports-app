import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

let EventView = () => {
  return (
    <div className='eventView'>
      <div className='event-btn-view'>
        <IndexLink to='/' className='event-btn'>
          <RaisedButton primary={true} label='Map View' />
        </IndexLink>
        <Link to='/list_view' className='event-btn'>
          <RaisedButton primary={true} label='List View' />
        </Link>
      </div>
    </div>
  )
}

export default EventView;