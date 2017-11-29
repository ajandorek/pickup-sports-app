import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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
      <div className='panel panel-primary' key={title}>
        <div className='panel-heading'>
          <h3 className='panel-title'>{title}</h3>
        </div>
        <div className='panel-body'>
            <p>Time: {moment(time).format("MM/DD/YYYY h:mm A")}</p>
            <p>Sport: {sport}</p>
            <p>Location: {location}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='list-view'>
        {this.props.events && this.props.events.data && this.props.events.data.data.map(this.renderEvents)}
      </div>
    )
  }
}

function mapStateToProps({ events }) {
  return { events }
};

export default connect(mapStateToProps)(EventList);