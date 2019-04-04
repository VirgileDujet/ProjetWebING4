const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const Album = require("../controllers/album.controller.js");

// Create RAW data array


/* GET albums listing. */
router.get('/', Album.findAll);

/* GET one album. */
router.get('/:id',Album.findOne);


/* PUT new album. */
router.put('/',Album.create);


/* DELETE artiste. */
router.delete('/:id',Album.delete);

/* UPDATE album. */
router.post('/:id', Album.update);

module.exports = router;
