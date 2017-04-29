import React, { Component } from 'react';

export default class EventNav extends Component {
    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-primary disabled">Baseball</button>
                <button className="btn btn-primary disabled">Basketball</button>
                <button className="btn btn-primary disabled">Football</button>
                <button className="btn btn-primary disabled">Soccer</button>
                <button className="btn btn-primary disabled">Volleyball</button>
                <button className="btn btn-primary disabled">Other</button>
            </div>
        )
    }
}