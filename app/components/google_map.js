import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/eventAction';
import Helpers from './utils/helpers';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import _ from "lodash";
import Halogen from 'halogen';

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 30.2672, lng: -97.7431 }}
    >
        {props.events && props.events.data && props.events.data.data.map((marker,i) => (
            <Marker
                key={i}
                {...{ position: { lat: marker.lat, lng: marker.lng } }}
                onClick={() => props.onMarkerClick(marker)}
            >
                {marker.showInfo && <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                    <div>
                        <div><strong style={{ color:'dodgerblue' }}>Event: </strong><span className='eventInfo'>{marker.title}</span></div>
                        <div><strong style={{ color: 'dodgerblue' }}>Sport: </strong><span className='eventInfo'>{marker.sport}</span></div>
                        <div><strong style={{ color: 'dodgerblue' }}>Location: </strong><span className='eventInfo'>{marker.location}</span></div>
                        <div><strong style={{ color: 'dodgerblue' }}>Time: </strong><span className='eventInfo'>{marker.time}</span></div>
                    </div>
                </InfoWindow>}
            </Marker>
        ))}
    </GoogleMap>
));

@connect((store) => {
    return {
        events: store.events,
    }
})

export default class GMap extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch(fetchEvents('#'));
    }
    

    componentWillReceiveProps(nextProps) {
        this.setState({ events: nextProps.events });
    }

    handleMarkerClick(targetMarker) {

        console.log(targetMarker);


        this.setState({
            events: {
                data: {
                    data: this.state.events.data.data.map(marker => {
                        if (marker === targetMarker) {
                            return {
                                ...marker,
                                showInfo: true,
                            };
                        }
                        return marker;
                    })
                }
            }
        });
    }

    handleMarkerClose(targetMarker) {
        this.setState({
            events: {
                data: {
                    data: this.state.events.data.data.map(marker => {
                        if (marker === targetMarker) {
                            return {
                                ...marker,
                                showInfo: false,
                            };
                        }
                        return marker;
                    })
                }
            }
        });
    }

    handleMarkerClick = this.handleMarkerClick.bind(this);
    handleMarkerClose = this.handleMarkerClose.bind(this);


    render() {
        if (!this.props.events || !this.props.events.data) return <div><Halogen.RingLoader color='#4DAF7C'/></div>
        return (
                <RenderMap
                    containerElement={<div className="map" style={{ height: 500, width: 554 }} />}
                    mapElement={<div style={{ height: 500, width: 554 }} />}
                    events={this.state.events}
                    onMarkerClick={this.handleMarkerClick}
                    onMarkerClose={this.handleMarkerClose}
                />
        );
    }
}