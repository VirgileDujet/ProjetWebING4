const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true
    },
    sortie: Date,
    genre: String,
    cover: String,
    auteur: String,
    tracks : Array,
    dispo: String,
  },





    { collection: "Album" }
);

module.exports = mongoose.model('Album', albumSchema);
