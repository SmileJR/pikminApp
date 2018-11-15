const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Pikmin = new Schema({
    title: String,
    description: String
})

module.exports = mongoose.model('Pikmin', Pikmin)