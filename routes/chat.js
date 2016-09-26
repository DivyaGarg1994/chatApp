var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ejs' });
});

router.get('/user',function(req,res,next){
  var name = req.query.username;
//  console.log(name);
  res.render('index');
});
module.exports = router;
