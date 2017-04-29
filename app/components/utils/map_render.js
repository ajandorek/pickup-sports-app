import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const pins = {
    markers: [
        {
            position: new google.maps.LatLng(30.26722, -97.7431)
        }, {
            position: new google.maps.LatLng(30.25, -97.75)
        }
    ]
}

export const RenderMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 30.2672, lng: -97.7431 }}
    >
        {pins.markers.map((marker) => (
            <Marker
                {...marker}
                onClick={() => props.onMarkerClick(marker)}
            >
                {marker.showInfo && (
                    <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                        <div>{marker.infoContent}</div>
                    </InfoWindow>
                )}
            </Marker>
        ))}
    </GoogleMap>
));