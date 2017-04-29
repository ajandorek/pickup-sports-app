import React, { Component } from 'react';

export default class EventNav extends Component {
    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-primary">Baseball</button>
                <button className="btn btn-primary">Basketball</button>
                <button className="btn btn-primary">Football</button>
                <button className="btn btn-primary">Soccer</button>
                <button className="btn btn-primary">Volleyball</button>
                <button className="btn btn-primary">Other</button>
            </div>
        )
    }
}