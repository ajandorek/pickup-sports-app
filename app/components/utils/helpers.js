var axios = require("axios");
var API_KEY = 'AIzaSyCNqEZEDGBUxNmIpnCtnjf7EZDRhM7G7JQ';
var Helpers = {
    initMap: function (lat, lng) {
        // var marker = new google.maps.Marker({
        //     position: {
        //         lat: lat,
        //         lng: lng
        //     },
        //     map: e,
        //     title: 'Hello World!'
        // });
        // var infowindow = new google.maps.InfoWindow({
        //     content: `Sport: Basketball Title: 5v5 Pickup Time: 7:30`
        // });
        // marker.addListener('click', function () {
        //     infowindow.open(e, marker);
        // });
    },
    geoLocate: function (address) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
            .then(function (response) {
                return response.data.results[0].geometry.location;
            });
    }

}

module.exports = Helpers;