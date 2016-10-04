var express = require('express');
var router = express.Router();
var auth = require('../config/auth.js')();

/* GET home page. */
router.get('/chatPage',auth.authenticate(), function(req, res, next) {
  console.log(req.user.name);
   res.json(req.user.name);
});

router.get('/user',function(req,res,next){
  var name = req.query.username;
  res.render('index');
});

module.exports = router;
