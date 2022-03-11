const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    naam: {
        type: String,
        required: true,
    },
    id: Number,
    voorkeur: String,
    // prijs: String,
    // tags: [String],
    // omschrijving: String,
    // swipedOp: {
    //     type: Date,
    //     inmutable: true.valueOf,
    //     default: () => Date.now(), //Huidige datum opslaan
    // }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)