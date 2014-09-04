'use strict';

var SpotifyStrategy = require('passport-spotify').Strategy,
    User            = require('../../models/user'),
    config          = require('../../../config'),
    spotify         = new SpotifyStrategy({clientID: config.spotify.clientId, clientSecret: config.spotify.clientSecret, callbackURL: config.spotify.callbackUrl}, User.spotifyAuthenticate);

module.exports = spotify;

