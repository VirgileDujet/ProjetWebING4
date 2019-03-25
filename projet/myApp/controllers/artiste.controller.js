const Artiste = require('../models/artiste.model.js');

// Create and Save a new Artiste
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Create a new Artiste
  const artiste = new Artiste({
    nom: req.body.nom,
    followers: req.body.followers,
    birth: req.body.birth,
    albums: req.body.albums
     || ''
  });

  // Save artiste in the database
  artiste
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly artiste integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new artiste in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Artiste.'
      });
    });
};

// Retrieve and return all artistes from the database.
exports.findAll = (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) :  1000000;

  Artiste.find({}, null, { limit: limit })
    .then(artistes => {
      console.log("Artiste", artistes);
      res.status(200).json(artistes);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving artistes.'
      });
    });
};

// Find a single Artiste with a ArtisteId
exports.findOne = (req, res) => {
  Artiste.findById(req.params.id)
    .then(artiste => {
      if (!artiste) {
        return res.status(404).send({
          message: 'artiste not found with id ' + req.params.artisteId
        });
      }
      res.json(artiste);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'artiste not found with id ' + req.params.artisteId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving artiste with id ' + req.params.artisteId
      });
    });
};

// Update a artiste identified by the artisteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Find Artiste and update it with the request body
  Artiste.findByIdAndUpdate(
    req.params.artisteId,
    {
      nom: req.body.nom,
      followers: req.body.followers,
      birth: req.body.birth,
      albums: req.body.albums || ''
    },
    { new: true }
  )
    .then(artiste => {
      if (!artiste) {
        return res.status(404).send({
          message: 'artiste not found with id ' + req.params.artisteId
        });
      }
      res.send(artiste);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'artiste not found with id ' + req.params.artisteId
        });
      }
      return res.status(500).send({
        message: 'Error updating artiste with id ' + req.params.artisteId
      });
    });
};

// Delete a artiste with the specified artisteId in the request
exports.delete = (req, res) => {
  Artiste.findByIdAndRemove(req.params.artisteId)
    .then(artiste => {
      if (!artiste) {
        return res.status(404).send({
          message: 'artiste not found with id ' + req.params.artisteId
        });
      }
      res.send({ message: 'artiste deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'artiste not found with id ' + req.params.artisteId
        });
      }
      return res.status(500).send({
        message: 'Could not delete artiste with id ' + req.params.artisteId
      });
    });
};
