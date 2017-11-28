import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherAction';
import _ from 'lodash';
import Halogen from 'halogen';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch(fetchWeather());
    }

    render() {
        if (this.props.weather.isFetching) {
            return (<div><Halogen.RingLoader color='#4DAF7C'/></div>)
        }
        if (!this.props.weather.data) {
            return (<div><Halogen.RingLoader color='#4DAF7C'/></div>)
        }
        return (
            <div className="well">
                <h3>Austin Weather</h3>
                <p><strong>Current Temp: </strong>{Math.floor((this.props.weather.data.main.temp) * 9/5 - 459.67)} Degrees Fahrenheit</p>
                <p><strong>Weather: </strong>{_.startCase(this.props.weather.data.weather[0].description)}</p>
                <p><strong>Humidity: </strong>{_.startCase(this.props.weather.data.main.humidity)}</p>
                <p><strong>Wind Speed: </strong>{(this.props.weather.data.wind.speed)} MPH</p>
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
};

export default connect(mapStateToProps)(Weather);