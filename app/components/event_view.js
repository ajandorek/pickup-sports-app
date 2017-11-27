import React, { Component } from 'react';

class EventView extends Component {
  render() {
    return (
      <div className="eventView">
        <button
          className="btn btn-primary"
        >
          Map View
        </button>
        <button
          className="btn btn-primary"
        >
          List View
        </button>
      </div>
    )
  }
}

export default EventView;