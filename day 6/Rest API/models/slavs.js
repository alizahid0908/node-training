const mongoose = require('mongoose')

const Schema = mongoose.Schema

const geoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
})

const slavSchema = new Schema({
    name:{
        type: String,
        required:[true, 'Name field is required']
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },

    geometry: geoSchema
})

const Slav = mongoose.model('slav', slavSchema)

module.exports = Slav