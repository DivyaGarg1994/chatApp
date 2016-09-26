var express = require('express');
var router = express.Router();
var app = require('../app');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
 var UserModel = require('../model/UserSchema');

/* login page */
 router.get('/', function(req, res, next) {
   res.render('login', { title: 'ejs' });
 });

/* New user registeration form */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'ejs' });
});


/*   REGISTER A NEW USER */
router.post('/newRegister', function(req, res, next) {

    var name = req.body.username;
    var email = req.body.email;
    var contact = req.body.contact;
    var password = req.body.password;
    var newUser = new UserModel({ name : name , password : password , email : email , contact : contact});

    //save a user
      newUser.save(function (err,newUser){
          if(err) return console.log(err);
          else {
            console.log("..........save success...........");
          }
      });
      res.redirect('/');
}); //register


 /*   validate user from login   */
    router.post('/login', function(req, res, next) {

      UserModel.findOne({ 'name': req.body.username,'password': req.body.password},function (err, users) {
          if (err || users==null) {
            res.redirect('/');
          }
          else{
            res.redirect('/chat/user?username='+req.body.username);
          }
        });

    });



module.exports = router;
