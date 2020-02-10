var express = require('express');
var router = express.Router();
var model = require('../model');

/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect(function (db) {
    db.collection('users').find().toArray(function(error, docs) {
      console.log('user list:', docs);
      res.render('index', { title: 'Homepage' });
    });
  });
});

/* GET Register page. */
router.get('/register', function (req, res, next) {
  res.render('register', {});
});

/* GET Login page. */
router.get('/login', function (req, res, next) {
  res.render('login', {});
});

module.exports = router;
