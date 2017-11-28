import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventAction';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  renderEvents(events) {
    const title = events.title;
    const time = events.time;
    const sport = events.sport;
    const location = events.location;
    return (
      <div key={title}>
        <ul>
          <li>{title}</li>
          <li>{time}</li>
          <li>{sport}</li>
          <li>{location}</li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.events && this.props.events.data && this.props.events.data.data.map(this.renderEvents)}
      </div>
    )
  }
}

function mapStateToProps({ events }) {
  return { events }
};

export default connect(mapStateToProps)(EventList);