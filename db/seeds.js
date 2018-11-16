const User = require('../models/User')
const Pikmin = require('../models/Pikmin')
const mongoose = require('./connections')

const pikminA = new Pikmin({
    imageUrl: 'https://vignette.wikia.nocookie.net/vsbattles/images/a/a5/Pikmin-red.png/revision/latest?cb=20171215025726',
    pikminName: 'Feisty',
    type: 'Fire',
    level: '3',
    weakness: 'Water'
})

const pikminB = new Pikmin({
    imageUrl: 'https://vignette.wikia.nocookie.net/fantendo/images/f/ff/Blue_Pikmin_%28alt_3%29_-_Pikmin_2.png/revision/latest?cb=20151004113830',
    pikminName: 'Azure',
    type: 'Water',
    level: '3',
    weakness: 'Electricity'
})

const smile = new User({
    username: 'smiler',
    password: 'happy',
    pikmins: [pikminA, pikminB]
})

User.remove({})
    .then(() => Pikmin.remove({}))
    .then(() => Pikmin.insertMany([pikminA, pikminB]))
    .then(() => smile.save())
    .then(() => console.log('Successfully Seeded'))
    .then(() => mongoose.connection.close())