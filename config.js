'use strict';

var config = {};

config.twitter = {
  apiKey : '0vU1k13noNmHivVUGyp6khMM2',
  apiSec : process.env.TWITTER_SECRET,
  callbackUrl : 'http://liza-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId: '82b37368b22581154e75',
  clientSecret: process.env.GITHUB_SECRET,
  callbackUrl: 'http://liza-vm:3333/auth/github/callback'
};

config.google = {
  clientId: '218470943165-j1nvrscrerbhcvuljpjrr30pcgksa5dn.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET,
  callbackUrl: 'http://liza-vm.com:3333/auth/google/callback'
};

config.instagram = {
  clientId:'9716ff5b60964fb6b9fde54f5b38dc8f',
  clientSecret: process.env.INSTAGRAM_SECRET,
  callbackUrl: 'http://liza-vm.com:3333/auth/instagram/callback'
};

config.spotify = {
  clientId:'8690ea4bf6994b9c9ef3df5bee954217',
  clientSecret: process.env.SPOTIFY_SECRET,
  callbackUrl: 'http://liza-vm.com:3333/auth/spotify/callback'
};

config.stripe = {
  publishKey: 'pk_test_WSxVyGJU1EnH0kO9NvBE5C0i',
  secretKey: process.env.STRIPE_SECRET
};

module.exports = config;
