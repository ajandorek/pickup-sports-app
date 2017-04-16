import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            center: {
                lat: 30.307182,
                lng: -97.755996
            },
            zoom: 12
        });
    }
    
    render () { 
        const mapStyle = {
            width: 500,
            height: 500,
            border: '1px solid black'
        };
        return <div ref="map" style={mapStyle} />;
    }
}

export default GoogleMap;