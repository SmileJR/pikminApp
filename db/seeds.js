const mongoose = require('../db/connections')
const Schema = mongoose.Schema


//this is what a pikmin format will look like
const Pikmin = new Schema({
    imageUrl: String,
    pikminName: String,
    type: String,
    level: Number,
    weakness: String,
})

module.exports = mongoose.model('Pikmin', Pikmin)