const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

/* GET home page. */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities', { celebrities });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/add', (req, res, next) => {
  res.render('celebrities/add');
});
router.get('/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celeb => {
      console.log(celeb);
      res.render('celebrities/details', celeb)
        .catch(err => {
          console.log(err);
          next();
        });
    });
});

module.exports = router;