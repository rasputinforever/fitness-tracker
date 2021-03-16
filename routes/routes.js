const express = require('express');
const Cardio = require('../models/workoutsCardio.js');
const Resistance = require('../models/workoutsResistance.js');
const path = require('path');

module.exports = function(app) {

  app.get('/api/workouts', (req, res) => {

    Cardio.find({})
    .then(allCardio => {

      Resistance.find({})
      .then(allResistance => {
        res.status(200).json([...allCardio, ...allResistance]);
      })
      .catch(err => {
        res.status(500).json(err);
      });

    })
    .catch(err => {
      res.status(500).json(err);
    });

  })

  app.post('/api/workouts', (req, res) => {

    console.log("POST api router")
    res.json();

  })

// HTML Routes

  app.get('/exercise', (req, res) => {

    console.log("Router Connected!")
    res.sendFile(path.join(__dirname, '..', 'public', 'exercise.html'));
  })


}

  