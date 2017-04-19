import Helper from './utils/helpers';
import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: '',
            weather: ''
        };
    }
    componentDidMount() {
        // Helper.getWeather().then((data) => {
        //     console.log(data);
        // });
        // }
        var apiKey = 'e81dc1712e53391f108b9af5f4ebc3ad';
        var url = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=$Austin,us`;
        axios.get(url).then((res) => {
            const weather = res.data;
            this.setState({ 
                temp: (weather.list[0].main.temp * 9/5 - 459.67),
                weather: weather.list[0].weather[0].description});
            console.log(weather);
        }, function (err) {
            throw err;
        });
    }

    render() {
        return (
            <div className="well">
                <h2>Current Weather for Austin</h2>
                <p>It is currently {this.state.temp} degrees Farenheit with {this.state.weather}</p>
            </div>
        );
    }
}

module.exports = Weather;