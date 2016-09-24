var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'ejs' });
});

router.get('/login', function(req, res, next) {
  res.send('respond with some resource');
});

module.exports = router;
