const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();
const Album = require("../controllers/album.controller.js");

// Create RAW data array




/* UPDATE album. */
router.post('/:id', Album.update);

module.exports = router;
