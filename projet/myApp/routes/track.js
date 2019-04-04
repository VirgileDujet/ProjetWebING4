const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const Track = require("../controllers/track.controller.js");

// Create RAW data array


/* GET tracks listing. */
router.get('/', Track.findAll);

/* GET one Track. */
router.get('/:id',Track.findOne);


/* PUT new Track. */
router.put('/',Track.create);


/* DELETE Track. */
router.delete('/:id',Track.delete);

/* UPDATE album. */
router.post('/:id', Track.update);

module.exports = router;
