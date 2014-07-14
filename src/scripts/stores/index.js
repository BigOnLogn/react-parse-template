var TodoStore = require('./TodoStore');
var UserStore = require('./UserStore');

var stores = {
  TodoStore: new TodoStore(),
  UserStore: new UserStore()
};

module.exports = stores;