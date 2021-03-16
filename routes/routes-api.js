const express = require('express');
const Cardio = require('../models/workoutsCardio.js');
const Resistance = require('../models/workoutsResistance.js');

module.exports = function(app) {

      // get specific encounter information
  app.get('/api/:workout', (req, res) => {

    console.log("Router Connected!")

  }
}

  