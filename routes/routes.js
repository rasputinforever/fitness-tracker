
const Workouts = require('../models/workouts.js');
const path = require('path');

module.exports = function(app) {

  app.get('/api/workouts', (req, res) => {

    Workouts.find({})
    .then(allWorkout => {

      res.status(200).json(allWorkout);

    })
    .catch(err => {
      res.status(500).json(err);
    });

  })

  app.post('/api/workouts', (req, res) => {


    res.status(200)

  })

// HTML Routes

  app.get('/exercise', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'exercise.html'));

  })


}

  