const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();

// Create RAW data array
let artistes = [{
  nom: "Ellish",
  id: "0"
}];

/* GET artistes listing. */
router.get('/', (req, res) => {
  // Get List of artiste and return JSON
  res.status(200).json({ artistes });
});

/* GET one artiste. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find artiste in DB
  const artiste = _.find(artistes, ["id", id]);
  // Return artiste
  res.status(200).json({
    message: 'artiste found!',
    artiste
  });
});

/* PUT new artiste. */
router.put('/', (req, res) => {
  // Get the data from request from request
  const { artiste } = req.body;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  artistes.push({ artiste, id });
  // Return message
  res.json({
    message: `Just added ${id}`,
    artiste: { artiste, id }
  });
});

/* DELETE artiste. */
router.delete('/:id', (req, res) => {
  // Get the :id of the artiste we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(artistes, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE artiste. */
router.post('/:id', (req, res) => {
  // Get the :id of the artiste we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the artiste we want to update from the body of the request
  const { artiste } = req.body;
  // Find in DB
  const artisteToUpdate = _.find(artistes, ["id", id]);
  // Update data with new data (js is by address)
  artisteToUpdate.artiste = artiste;

  // Return message
  res.json({
    message: `Just updated ${id} with ${artiste}`
  });
});

module.exports = router;
