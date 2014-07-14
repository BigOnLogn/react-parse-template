var TodoConstants = require('../constants/TodoConstants');

var actions = {

  saveProfile: function(attributes) {
    this.dispatch(TodoConstants.SAVE_PROFILE, attributes);
  }

};

module.exports = actions;