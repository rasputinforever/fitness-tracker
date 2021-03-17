
const db = require('../models');
const path = require('path');

module.exports = function(app) {

  app.get('/api/workouts/range', (req, res) => {
    console.log("GET request at /stats page")
    db.Workouts.aggregate([
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
          res.json(data) 
      });
  })

  app.get('/api/workouts', (req, res) => {
    console.log("GET request for all workouts")
    db.Workouts.aggregate([
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
          res.json(data) 
      });
  })
  
  app.post('/api/workouts', (req, res) => {
    console.log("POST request for new workout")
    db.Workouts.create({})
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
    db.Workouts.findByIdAndUpdate(req.params.id
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

}
