var axios = require("axios");
var API_KEY = 'AIzaSyCNqEZEDGBUxNmIpnCtnjf7EZDRhM7G7JQ';

var Helpers = {
    initMap: function(e){
        var marker = new google.maps.Marker({
            position: {
                lat: 30.2669624,
                lng: -97.77285930000001
            },
            map: e,
            title: 'Hello World!'
        });
        var infowindow = new google.maps.InfoWindow({
            content: `Sport: Basketball Title: 5v5 Pickup Time: 7:30`
        });
        marker.addListener('click', function () {
            infowindow.open(e, marker);
        });
    },
    geoLocate: function(address){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
        console.log(address);
    }
    
}

export default Helpers;