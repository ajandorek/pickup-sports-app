import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

let EventView = () => {
  return (
    <div className="eventView">
      <IndexLink
        to='/'
        className="btn btn-primary"
      >
        Map View
        </IndexLink>
      <Link
        to='/list_view'
        className="btn btn-primary"
      >
        List View
        </Link>
    </div>
  )
}

export default EventView;