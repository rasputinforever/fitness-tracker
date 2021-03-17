
const Workouts = require('../models/workouts.js');
const path = require('path');

module.exports = function(app) {

  app.get('/api/workouts/range', (req, res) => {
    Workouts.aggregate([
      {
        "$addFields": {
          "totalDuration": {
            "$reduce": {
              "input": "$exercises",
              "initialValue": 0,
              "in": { "$add" : ["$$value", "$$this.duration"] }
            }
          }
        }
      }
      ]).exec((err, data) => {  
          if (err) console.log(err);
          console.log(data[data.length - 1]);
          res.json(data) 
      });



  })





  app.get('/api/workouts', (req, res) => {

    Workouts.aggregate([
      {
        "$addFields": {
          "totalDuration": {
            "$reduce": {
              "input": "$exercises",
              "initialValue": 0,
              "in": { "$add" : ["$$value", "$$this.duration"] }
            }
          }
        }
      }
      ]).exec((err, data) => {  
          if (err) console.log(err);
          console.log(data[data.length - 1]);
          res.json(data) 
      });

  })
  

  app.post('/api/workouts', (req, res) => {

    Workouts.create({})
    .then(workout => {
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

    Workouts.findByIdAndUpdate(req.params.id
      ,{$push: {"exercises" : req.body}}
      ,{safe: true, upsert: true, new : true}
      , function(err, result){

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
  })

// HTML Routes

  app.get('/exercise', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'exercise.html'));

  })

  app.get('/stats', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'stats.html'));

  })
}

  