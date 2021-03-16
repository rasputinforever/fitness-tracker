
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

    Workouts.create({})
    .then(workout => {
      console.log(workout);
      res.json(workout)
    })
    .catch(({ message }) => {
      console.log(message);
    });


    res.status(500)

  })

  app.put('/api/workouts/:id', (req, res) => {
    console.log("PUT request on exercide ID...", req.params.id)

    console.log("Data: ", req.body)

    Workouts.findByIdAndUpdate(req.params.id,req.body, function(err, result){

        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
     })
  })



// HTML Routes

  app.get('/exercise', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'exercise.html'));

  })


}

  