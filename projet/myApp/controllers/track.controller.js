const Track = require('../models/track.model.js');

// Create and Save a new track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.titre) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Create a new track
  const track = new Track({
    titre: req.body.titre,
    duree: req.body.duree,
    ecoute: req.body.ecoute,
    like: req.body.like,
    feat : req.body.feat
     || ''
  });

  // Save track in the database
  track
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly track integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new track in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the track.'
      });
    });
};

// Retrieve and return all tracks from the database.
exports.findAll = (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) :  1000000;

  Track.find({}, null, { limit: limit })
    .then(tracks => {
      console.log("track", tracks);
      res.status(200).json(tracks);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving tracks.'
      });
    });
};

// Find a single track with a trackId
exports.findOne = (req, res) => {
  Track.findById(req.params.id)
    .then(track => {
      if (!track) {
        return res.status(404).send({
          message: 'track not found with id ' + req.params.trackId
        });
      }
      res.json(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'track not found with id ' + req.params.trackId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving track with id ' + req.params.trackId
      });
    });
};

// Update a track identified by the trackId in the request
exports.update = (req, res) => {
  // Validate Request


  // Find track and update it with the request body
  //////////////////////////////////////////////////////////
  if(req.body.titre!=null)
  {
  // Find album and update it with the request body
  Track.findByIdAndUpdate(
    req.params.id,
    {
      titre: req.body.titre
      //cover: req.body.cover
    //sortie: req.body.sortie
    // genre : req.body.genre
    //  auteur : req.body.auteur
    //  tracks: req.body.tracks
  //  dispo: req.body.dispo
      || ''
    },
    { new: true }
  )
    .then(track => {
      if (!track) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error updating album with id ' + req.params.id
      });
    });
  }
  //////////////////////////////////////////////////////////
  if(req.body.duree!=null)
  {
  // Find album and update it with the request body
  Track.findByIdAndUpdate(
    req.params.id,
    {
      //titre: req.body.titre
      duree: req.body.duree
      //ecoute: req.body.ecoute,
      //like: req.body.like,
      //feat : req.body.feat
      || ''
    },
    { new: true }
  )
    .then(track => {
      if (!track) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error updating album with id ' + req.params.id
      });
    });
  }
  //////////////////////////////////////////////////////////
  if(req.body.like!=null)
  {
  // Find album and update it with the request body
  Track.findByIdAndUpdate(
    req.params.id,
    {
      //titre: req.body.titre
    //  duree: req.body.duree
      //ecoute: req.body.ecoute,
      like: req.body.like
      //feat : req.body.feat
      || ''
    },
    { new: true }
  )
    .then(track => {
      if (!track) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error updating album with id ' + req.params.id
      });
    });
  }
  //////////////////////////////////////////////////////////
  if(req.body.ecoute!=null)
  {
  // Find album and update it with the request body
  Track.findByIdAndUpdate(
    req.params.id,
    {
      //titre: req.body.titre
    //  duree: req.body.duree
      ecoute: req.body.ecoute
      //like: req.body.like
      //feat : req.body.feat
      || ''
    },
    { new: true }
  )
    .then(track => {
      if (!track) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error updating album with id ' + req.params.id
      });
    });
  }
  //////////////////////////////////////////////////////////
  if(req.body.feat!=null)
  {
  // Find album and update it with the request body
  Track.findByIdAndUpdate(
    req.params.id,
    {
      //titre: req.body.titre
    //  duree: req.body.duree
    //  ecoute: req.body.ecoute
      //like: req.body.like
      feat : req.body.feat
      || ''
    },
    { new: true }
  )
    .then(track => {
      if (!track) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(track);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error updating album with id ' + req.params.id
      });
    });
  }
};

// Delete a track with the specified trackId in the request
exports.delete = (req, res) => {
  Track.findByIdAndRemove(req.params.id)
    .then(track => {
      if (!track) {
        return res.status(404).send({
          message: 'track not found with id ' + req.params.id
        });
      }
      res.send({ message: 'track deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'track not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete track with id ' + req.params.id
      });
    });
};
