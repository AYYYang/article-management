var express = require('express');
var router = express.Router();
var model = require('../model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users to send user data to /register */
router.post('/register', function(req,res,next) {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    password2: req.body.password2
  };

  model.connect(function (db) {
    db.collection('users').insertOne(user, function (error, ret) {
      if (error) {
        console.error('failed to register');
        // redirect to register page
        res.redirect('/register');
      } else {
        res.redirect('/login')
      }
    })
  });
});

module.exports = router;
