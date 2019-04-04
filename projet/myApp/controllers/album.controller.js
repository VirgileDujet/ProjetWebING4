const Album = require('../models/album.model.js');

// Create and Save a new album
exports.create = (req, res) => {
  // Validate request
  if (!req.body.titre) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Create a new album
  const album = new Album({
    titre: req.body.titre,
    cover: req.body.cover,
    dispo: req.body.dispo,
    sortie: req.body.sortie,
    genre : req.body.genre,
    auteur : req.body.auteur,
    tracks: req.body.tracks || ''
  });

  // Save album in the database
  album
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly album integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new album in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the album.'
      });
    });
};

// Retrieve and return all albums from the database.
exports.findAll = (req, res) => {


  Album.find({})
    .then(albums => {
      console.log("album", albums);
      res.status(200).json(albums);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving albums.'
      });
    });
};

// Find a single album with a albumId
exports.findOne = (req, res) => {
  Album.findById(req.params.id)
    .then(album => {
      if (!album) {
          console.log("album", albums);
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      res.json(album);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving album with id ' + req.params.albumId
      });
    });
};

// Update a album identified by the albumId in the request
exports.update = (req, res) => {
  // Validate Request

  //////////////////////////////////////////////////////////
  if(req.body.titre!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
      titre: req.body.titre
    //  cover: req.body.cover,
    //  sortie: req.body.sortie,
    //  genre : req.body.genre,
    //  auteur : req.body.auteur,
    //  tracks: req.body.tracks
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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
  if(req.body.sortie!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
    //  titre: req.body.titre
    //  cover: req.body.cover
      sortie: req.body.sortie
    //  genre : req.body.genre,
    //  auteur : req.body.auteur,
    //  tracks: req.body.tracks
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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
  if(req.body.genre!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
    //  titre: req.body.titre
    //  cover: req.body.cover
    //sortie: req.body.sortie
     genre : req.body.genre
    //  auteur : req.body.auteur,
    //  tracks: req.body.tracks
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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
  if(req.body.cover!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
    //  titre: req.body.titre
      cover: req.body.cover
    //sortie: req.body.sortie
    // genre : req.body.genre
    //  auteur : req.body.auteur,
    //  tracks: req.body.tracks
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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
  if(req.body.auteur!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
    //  titre: req.body.titre
      //cover: req.body.cover
    //sortie: req.body.sortie
    // genre : req.body.genre
      auteur : req.body.auteur
    //  tracks: req.body.tracks
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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
  if(req.body.dispo!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
    //  titre: req.body.titre
      //cover: req.body.cover
    //sortie: req.body.sortie
    // genre : req.body.genre
    //  auteur : req.body.auteur
    //  tracks: req.body.tracks
    dispo: req.body.dispo
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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
  if(req.body.tracks!=null)
  {
  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.id,
    {
    //  titre: req.body.titre
      //cover: req.body.cover
    //sortie: req.body.sortie
    // genre : req.body.genre
    //  auteur : req.body.auteur
      tracks: req.body.tracks
  //  dispo: req.body.dispo
      || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).json({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json(album);
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

// Delete a album with the specified albumId in the request
exports.delete = (req, res) => {
  Album.findByIdAndRemove(req.params.id)
    .then(album => {
      if (!album) {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.id
        });
      }
      res.json({ message: 'album deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete album with id ' + req.params.id
      });
    });
};
