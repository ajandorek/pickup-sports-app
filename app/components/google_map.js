import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            center: {
                lat: 30.2672,
                lng: -97.7431
            },
            zoom: 12
        });
    }
    
    render () { 
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