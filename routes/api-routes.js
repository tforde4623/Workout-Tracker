// require db
const db = require("../models/workout.js");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });
  
  app.get('/api/workouts?', (req, res) => {
    db.findOne({_id: req.query.id})
      .then(data =>
      res.json(data))
      .catch(err => res.json(err));
  });
  
  app.get('/api/workouts/range', (req, res) => {
    db.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });
  
  app.post('/api/workouts', (req, res) => {
    db.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

  app.put('/api/workouts/:id', (req, res) => {
    // checks for body.name so it won't add a blank exercise
    if (req.body.name) {
      db.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } })
        .then(data => res.json(data))
        .catch(err => res.json(err));
    } else {
      res.json("No body sent.")
    }
  });
}