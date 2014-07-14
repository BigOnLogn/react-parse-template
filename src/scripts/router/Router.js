
var Router = require('ampersand-router');

module.exports = Router.extend({

  routes: {
    '': 'home',
    'profile': 'profile'
  },

  home: function() {
    this.current = 'home';
  },

  profile: function() {
    this.current = 'profile';
  }

});