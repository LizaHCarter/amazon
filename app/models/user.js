'use strict';

var bcrypt = require('bcrypt'),
    _      = require('underscore-contrib'),
    Mongo  = require('mongodb');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, function(err, obj){
    var user = Object.create(User.prototype);
    user = _.extend(user, obj);
    cb(err, user);
  });
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    o.type = 'local';
    User.collection.save(o, cb);
  });
};

User.localAuthenticate = function(email, password, cb){
  User.collection.findOne({email:email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.twitterAuthenticate = function(token, secret, twitter, cb){
  User.collection.findOne({twitterId:twitter.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {twitterId:twitter.id, username:twitter.username, displayName:twitter.displayName, type:'twitter'};
    User.collection.save(user, cb);
  });
};

User.githubAuthenticate = function(token, secret, github, cb){
  User.collection.findOne({githubId:github.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {githubId:github.id, username:github.username, type:'github'};
    User.collection.save(user, cb);
  });
};

User.googleAuthenticate = function(token, secret, google, cb){
  User.collection.findOne({googleId:google.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {googleId:google.id, displayName:google.displayName, type:'google'};
    User.collection.save(user, cb);
  });
};

User.instagramAuthenticate = function(token, secret, instagram, cb){
  User.collection.findOne({instagramId:instagram.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {instagramId:instagram.id, type:'instagram'};
    User.collection.save(user, cb);
  });
};

User.spotifyAuthenticate = function(token, secret, spotify, cb){
  User.collection.findOne({spotifyId:spotify.id}, function(err, user){
    if(user){return cb(null, user);}
    user = {spotifyId:spotify.id, type:'spotify'};
    User.collection.save(user, cb);
  });
};

User.prototype.update = function(o, cb){
  this.email = o.email;
  this.age = o.age *1;
  this.photo = o.photo;
  User.collection.save(this, cb);
};

module.exports = User;

