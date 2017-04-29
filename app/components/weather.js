import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherAction';
import _ from 'lodash';

@connect((store) => {
    return {
        weather: store.weather,
    }
})

class Weather extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch(fetchWeather());
    }

    render() {
        if (this.props.weather.isFetching) {
            return (<div>I AM LOADING</div>)
        }
        if (!this.props.weather.data) {
            return (<div>I Have no weather</div>)
        }
        return (
            <div className="well">
                <h3>Current Weather for Austin</h3>
                <p><strong>High Temp: </strong>{Math.floor((this.props.weather.data.list[0].main.temp_max) * 9/5 - 459.67)} Degrees Fahrenheit</p>
                <p><strong>Low Temp: </strong>{Math.floor((this.props.weather.data.list[0].main.temp_min) * 9/5 - 459.67)} Degrees Fahrenheit</p>
                <p><strong>Weather: </strong>{_.startCase(this.props.weather.data.list[0].weather[0].description)}</p>
                <p><strong>Humidity: </strong>{_.startCase(this.props.weather.data.list[0].main.humidity)}</p>
                <p><strong>Wind Speed: </strong>{_.startCase(this.props.weather.data.list[0].wind.speed)}</p>
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
};

export default connect(mapStateToProps)(Weather);