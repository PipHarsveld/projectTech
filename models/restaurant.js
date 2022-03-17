const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  naam: {
    type: String,
    required: true,
  },
  id: Number,
  voorkeur: String,
  prijs: String,
  tags: [String],
  omschrijving: String,
});

module.exports = mongoose.model("restaurant", restaurantSchema);
