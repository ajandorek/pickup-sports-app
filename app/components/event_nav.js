import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventAction';
import RaisedButton from 'material-ui/RaisedButton';

class EventNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="btn-group">
                <RaisedButton
                    label="View All"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('#') }}
                />
                <RaisedButton
                    label="Baseball"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('baseball') }}
                />
                <RaisedButton
                    label="Basketball"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('basketball') }}
                />
                <RaisedButton
                    label="Football"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('football') }}
                />
                <RaisedButton
                    label="Soccer"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('soccer') }}
                />
                <RaisedButton
                    label="Volleyball"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('volleyball') }}
                />
                <RaisedButton
                    label="Other"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('other') }}
                />
            </div>
        )
    }
}

export default connect(null, { fetchEvents })(EventNav);