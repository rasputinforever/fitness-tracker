
const Workouts = require('../models/workouts.js');
const path = require('path');

module.exports = function(app) {

  app.get('/api/workouts', (req, res) => {
    Workouts.aggregate([
      { $group: { '$length': { $sum: "$amount" } } }
     ], (err, result) => {

        return (JSON.stringify(result))
     }
     )

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


  app.get('/api/workouts/range', (req, res) => {

    res.status(500)
  }

// HTML Routes

  app.get('/exercise', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'exercise.html'));

  })

  app.get('/stats', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'stats.html'));

  })
}

  