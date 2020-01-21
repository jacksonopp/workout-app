const express = require('express');
const router = express.Router();
const db = require("../models/workout")

router.post('/workouts', function (req, res, next) {
  console.log(req.body)
  db.create({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => console.log(err))
});

router.get('/workouts', function (req, res) {
  db.find()
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => console.log(err))
})

router.put('/workouts/:id', function (req, res) {
  const id = req.params.id
  db.findOneAndUpdate({ _id: id }, { $push: { exercises: req.body } })
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => console.log(err))
})

router.get('/workouts/range', function (req, res) {
  console.log(req.body)
  db.find()
    .limit(7)
    .sort({ day: -1 })
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => console.log(err))
})

module.exports = router;
