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
                    onClick={() => { this.props.fetchEvents('Baseball') }}
                />
                <RaisedButton
                    label="Basketball"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('Basketball') }}
                />
                <RaisedButton
                    label="Football"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('Football') }}
                />
                <RaisedButton
                    label="Soccer"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('Soccer') }}
                />
                <RaisedButton
                    label="Volleyball"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('Volleyball') }}
                />
                <RaisedButton
                    label="Other"
                    primary={true}
                    onClick={() => { this.props.fetchEvents('Other') }}
                />
            </div>
        )
    }
}

export default connect(null, { fetchEvents })(EventNav);