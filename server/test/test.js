var supertest=require('supertest');
var should=require('should'),
routes = require("../routes");
var expect=require('chai').expect;
var api = supertest('http://localhost:8084');

//unit test begin
describe("unit tests",function(){
  it("should return login page",function(done){
    api.get('/')
    .end(function(err,res){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("should return register page",function(done){
    api.get('/register')
    .end(function(err,res){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should login an authentic user or send to login page',function(done){
    api.post('/login')
    .send({
      name:'divya',
      password:'ddd'
    })
    .end(function(err,res){
      expect(res.statusCode).to.equal(302);
      done();
    });
  });
  it('should register a user with it',function(done){
    api.post('/newRegister')
    .send({
      name:'User1',
      email:'a@gmail.com',
      phone:'7838218481',
      password:'user1'
    })
    .end(function(err,res){
      expect(res.statusCode).to.equal(302);
      done();
    });
  });
});
