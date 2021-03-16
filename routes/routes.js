const express = require('express');
const Cardio = require('../models/workoutsCardio.js');
const Resistance = require('../models/workoutsResistance.js');

module.exports = function(app) {

  app.get('/api/workouts', (req, res) => {

    Cardio.find({})
    .then(allCardio => {

      Resistance.find({})
      .then(allResistance => {
        res.json([...allCardio, ...allResistance]);
      })
      .catch(err => {
        res.status(202).json(err);
      });
      
    })
    .catch(err => {
      res.status(202).json(err);
    });

  })

  app.get('/api/workouts', (req, res) => {

    console.log("Router Connected!")
    res.json();

  })

  app.get('/exercise', (req, res) => {

    console.log("Router Connected!")
    res.end();
  })


}

  