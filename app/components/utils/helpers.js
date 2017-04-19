var axios = require("axios");
var apiKey = 'e81dc1712e53391f108b9af5f4ebc3ad';

var Helper = {
    getWeather: function(){
        var url = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=$Austin,us`;
        return axios.get(url).then((res) => {
            console.log(res);
        }, function(err){
            throw err;
        });
    }
}

export default Helper;