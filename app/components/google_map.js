import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/formAction';
import Helpers from './utils/helpers';

@connect((store) => {
    return {
        events: store.events,
    }
})

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchEvents());
    }
    componentDidMount() {
        setTimeout(function(){console.log(this.props.events)}, 1000);
        var map = this.refs.map
        var gmap = new google.maps.Map(map, {
            center: {
                lat: 30.2672,
                lng: -97.7431
            },
            zoom: 13
        });
        Helpers.initMap(gmap);
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

function mapStateToProps({ events }) {
    return { events }
};

export default connect(mapStateToProps)(GoogleMap);