const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
        foodName: {
            type: String,
            required: true
        },
  daysSinceIAte:{
            type: Number,
            required: true
        }
})

const Food = mongoose.model('Foods', FoodSchema)

module.exports = Food
