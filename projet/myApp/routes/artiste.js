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
router.delete('/:id',Artiste.delete);

/* UPDATE artiste. */
router.post('/:id', Artiste.update);

module.exports = router;
