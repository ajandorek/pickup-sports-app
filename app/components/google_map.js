import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/formAction';
import Helpers from './utils/helpers';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import _ from "lodash";

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
                        <div>{`Event: ${marker.title}`}</div>
                        <div>{`Sport: ${marker.sport}`}</div>
                        <div>{`Location: ${marker.location}`}</div>
                        <div>{`Time: ${marker.time}`}</div>
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
        this.props.dispatch(fetchEvents());

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
        if (!this.props.events || !this.props.events.data) return <div ref="map">loading</div>
        return (
            <div>
                <RenderMap
                    containerElement={<div className="map" style={{ height: 450, width: 500 }} />}
                    mapElement={<div className="map" style={{ height: 450, width: 500 }} />}
                    events={this.state.events}
                    onMarkerClick={this.handleMarkerClick}
                    onMarkerClose={this.handleMarkerClose}
                />
            </div>
        );
    }
}