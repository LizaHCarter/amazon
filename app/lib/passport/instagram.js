'use strict';

var InstagramStrategy = require('passport-instagram').Strategy,
    User              = require('../../models/user'),
    config            = require('../../../config'),
    instagram         = new InstagramStrategy({clientID: config.instagram.clientId, clientSecret: config.instagram.clientSecret, callbackURL: config.instagram.callbackUrl}, User.instagramAuthenticate);

module.exports = instagram;

