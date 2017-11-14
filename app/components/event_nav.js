import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventAction';

class EventNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-primary" 
                    onClick={() => {this.props.fetchEvents('#')}}>
                    View All
                </button>
                <button 
                    className="btn btn-primary" 
                    onClick={() => {this.props.fetchEvents('Baseball')}}>
                    Baseball
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.fetchEvents('Basketball')}}>
                    Basketball
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.fetchEvents('Football')}}>
                    Football
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.fetchEvents('Soccer')}}>
                    Soccer
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.fetchEvents('Volleyball')}}>
                    Volleyball</button>
                <button 
                    className="btn btn-primary"
                    onClick={() => {this.props.fetchEvents('Other')}}>
                    Other
                </button>
            </div>
        )
    }
}

export default connect(null, { fetchEvents })(EventNav);