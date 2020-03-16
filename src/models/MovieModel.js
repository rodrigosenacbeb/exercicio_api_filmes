const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    title: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
    like: {type: Boolean, default: false},   
});

module.exports = mongoose.model('Movie', MovieSchema);