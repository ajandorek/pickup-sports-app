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
        type: String
    }
});

var Sport = mongoose.model("Sport", SportSchema);

module.exports = Sport;