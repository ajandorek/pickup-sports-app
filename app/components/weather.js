import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchWeather } from '../actions/weatherAction';

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
                <h2>Current Weather for Austin</h2>
                <p>It is currently {Math.floor((this.props.weather.data.list[0].main.temp) * 9/5 - 459.67)} degrees fahrenheit and the current weather is {this.props.weather.data.list[0].weather[0].description}.</p>
            </div>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
};

export default connect(mapStateToProps)(Weather);