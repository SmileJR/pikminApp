const User = require('../models/User')
const Pikmin = require('../models/Pikmin')

const pikminsController = {
    index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('pikmins')
        .then((user) => {
            res.send(user.pikmins)
        })
    },
    show: (req, res) => {
        let pikminId = req.params.pikminId
        Pikmin.findById(pikminId)
        .then((pikmin) => {
            res.send(pikmin)
        })
    }
}

module.exports = pikminsController