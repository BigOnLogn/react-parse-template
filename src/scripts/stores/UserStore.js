/*global Parse*/

var Fluxxor = require('fluxxor');

var TodoConstants = require('../constants/TodoConstants');

var userStoreActions = {};
userStoreActions[TodoConstants.SAVE_PROFILE] = 'onSaveProfile';
userStoreActions[TodoConstants.LOGIN] = "onLogin";
userStoreActions[TodoConstants.LOGOUT] = "onLogout";

var UserStore = Fluxxor.createStore({

  actions: userStoreActions,

  initialize: function() { },

  onLogin: function(payload) {
    Parse.User.logIn(payload.username, payload.password)
      .then(function(user) {
        this.emit('change');
      }.bind(this),
      function(err) {
        this.emit('change');
      }.bind(this));
  },

  onLogout: function() {
    Parse.User.logOut();
    this.emit('change');
  },

  onSaveProfile: function(attributes) {
    var user = Parse.User.current();
    console.log('save user:', user);
    if (!user) return;

    user.save(attributes);

    this.emit('change');
  },

  getState: function() {
    return Parse.User.current();
  }

});

module.exports = UserStore;