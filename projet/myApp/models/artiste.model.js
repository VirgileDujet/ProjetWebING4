const mongoose = require('mongoose');

const artisteSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true
    },
    followers: String,
    birth: String,
    albums : Array,
  },





    { collection: "Artiste" }
);

module.exports = mongoose.model('Artiste', artisteSchema);
