import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        var map = new google.maps.Map(this.refs.map, {
            center: {
                lat: 30.2672,
                lng: -97.7431
            },
            zoom: 13
        });
        var marker = new google.maps.Marker({
            position: {
                lat: 30.2669624,
                lng: -97.77285930000001
            },
            map: map,
            title: 'Hello World!'
        });
        var infowindow = new google.maps.InfoWindow({
            content: `Sport: Basketball Title: 5v5 Pickup Time: 7:30`
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }

    render() {
        const mapStyle = {
            width: 500,
            height: 500,
            border: '1px solid black',
            display: 'block',
            margin: '0 auto'
        };
        return <div ref="map" style={mapStyle} />;
    }
}

export default GoogleMap;