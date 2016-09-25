var express = require('express');
var router = express.Router();
var app = require('../app');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'ejs' });
});

router.get('/login', function(req, res, next) {
  res.send('respond with some resource passport');
});

// router.get('/auth', function(req, res, next) {
//   res.send('respond with some resource');
// });

router.get('/auth',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

module.exports = router;
