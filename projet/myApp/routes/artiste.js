const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const Artiste = require("../controllers/artiste.controller.js");

// Create RAW data array


/* GET artistes listing. */
router.get('/', Artiste.findAll);

/* GET one artiste. */
router.get('/:id',Artiste.findOne);


/* PUT new artiste. */
router.put('/',Artiste.create);


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
  const { nom } = req.body;
  // Find in DB
  const artisteToUpdate = _.find(artistes, ["id", id]);
  // Update data with new data (js is by address)
  artisteToUpdate.nom = nom;

  // Return message
  res.json({
    message: `Just updated ${id} with ${nom}`
  });
});

module.exports = router;
