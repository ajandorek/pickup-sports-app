var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SportSchema = new Schema({
    title: {
        type: String
    },
    sport: {
        type: String
    },
    location: {
        type: String
    },
    time: {
        type: Date
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },
    expireAt: {
        type: Date
    }
});

var Sport = mongoose.model("Sport", SportSchema);

module.exports = Sport;