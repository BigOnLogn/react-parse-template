var TodoConstants = require('../constants/TodoConstants');

var actions = {
  addTodo: function(text) {
    this.dispatch(TodoConstants.ADD_TODO, {text: text});
  },

  toggleTodo: function(todo) {
    this.dispatch(TodoConstants.TOGGLE_TODO, {todo: todo});
  },

  toggleCompleted: function(completed) {
    this.dispatch(TodoConstants.TOGGLE_COMPLETED, {completed: completed});
  },

  login: function(payload) {
    this.dispatch(TodoConstants.LOGIN, payload);
  },

  logout: function() {
    this.dispatch(TodoConstants.LOGOUT);
  },

  clearCompleted: function() {
    this.dispatch(TodoConstants.CLEAR_COMPLETED);
  }
};

module.exports = actions;