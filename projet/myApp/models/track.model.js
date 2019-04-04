const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true
    },
    duree: Number,
    ecoute: String,
    like: Number,
    feat: Array,
  },





    { collection: "Track" }
);

module.exports = mongoose.model('Track', trackSchema);
