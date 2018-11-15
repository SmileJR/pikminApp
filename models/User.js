const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    pikmins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pikmin'
        }
    ]
})

module.exports = mongoose.model('User', User)