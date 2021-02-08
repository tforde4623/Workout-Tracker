// require db
const db = require("../models/workout.js");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });
  
  app.put('/api/workouts/:id', (req, res) => {
    db.findOneAndUpdate(
      { _id: req.body.id },
      { exercises: req.body.exercises },
      { new: true}
    );
  });
  
  app.get('/api/workout?', (req, res) => {
    db.findOne({_id: req.query.id})
      .then(data =>
      res.json(data))
      .catch(err => res.json(err));
  });
  
  app.get('/api/workouts/range', (req, res) => {
    res.end("test")
  });
  
  // working
  app.post('/api/workouts', (req, res) => {
    db.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });
}