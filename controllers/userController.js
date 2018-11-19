const User = require('../models/User')
 const Pikmin = require('../models/Pikmin')

const userController = {
    index: (req, res) => {
        User.find({})
        .then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('pikmins')
        .then((user) => {
            res.send(user)
        })
},
update: (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body)
        .then((updatedUser) => {
            updatedUser.save()
            res.send(updatedUser)
        })
},
delete: (req, res) => {
    User.findByIdAndDelete(req.params.userId)
        .then(() => {
            res.send(200)
        })
},
create: (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.send(user)
        })
}
}

module.exports = userController
