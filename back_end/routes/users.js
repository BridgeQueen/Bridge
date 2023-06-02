const router = require("express").Router();
let Record = require("../models/user.model");


router.route('/').get((req, res) => {
  Record.find()
    .then(records => res.json(records))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const newRecord = new Record({
    username: "test",
    email: "test@example.com",
    profilePictureURL: "google.com"
  });

  newRecord.save()
  .then(() => res.json('Record added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/find').get((req, res) => {
//   Record.find({"year":`${req.query.year}`,"grade":`${req.query.grade}`,"dept":`${req.query.dept}`})
//     .then(record => res.json(record))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:id').delete((req, res) => {
  Record.findByIdAndDelete(req.params.id)
    .then(() => res.json('Record deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
  Record.findOne({"year":`${req.body.year}`,"grade":`${req.body.grade}`,"dept":`${req.body.dept}`})
    .then(record => {
      res.json(record)
      record.records = req.body.records;
      record.courses = req.body.courses;

      record.save()
        .then(() => res.json('Record updated!'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router