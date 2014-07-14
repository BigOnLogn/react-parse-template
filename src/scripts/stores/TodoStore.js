var Fluxxor = require('fluxxor');
var TodoConstants = require('../constants/TodoConstants');

var todoStoreActions = {};
todoStoreActions[TodoConstants.ADD_TODO] = "onAddTodo";
todoStoreActions[TodoConstants.TOGGLE_TODO] = "onToggleTodo";
todoStoreActions[TodoConstants.CLEAR_COMPLETED] = "onClearCompleted";
todoStoreActions[TodoConstants.TOGGLE_COMPLETED] = "onToggleCompleted";

var Todo = require('../models/Todo');

var TodoList = require('../models/TodoList');

var TodoStore = Fluxxor.createStore({

  actions: todoStoreActions,

  initialize: function() {

    var user = Parse.User.current();

    // initial Parse
    this.todos = new TodoList();

    this.todos.on('all', this.onChange.bind(this));

    this.todos.query = new Parse.Query(Todo);
    this.todos.query.equalTo('user', user);

    this.todos.fetch();    
  },

  onAddTodo: function(payload) {
    var todo = {
      text: payload.text,
      order: this.todos.nextOrder(),
      done: false,
      user: Parse.User.current(),
      ACL: new Parse.ACL(Parse.User.current())
    };
    this.todos.create(todo);
  },

  onToggleTodo: function(payload) {
    payload.todo.toggle();
  },

  onToggleCompleted: function(payload) {
    var completed = payload.completed;
    if (completed) {
      this.todos.remaining().forEach(function(todo) {
        todo.toggle();
      });
    } else {
      this.todos.each(function(todo) {
        todo.toggle();
      });
    }
  },

  onClearCompleted: function(payload) {
    Todo.destroyAll(this.todos.done(), {silent: true})
      .then(function() {
        this.todos.remove(
          this.todos.done()
        );
      }.bind(this));
  },

  onChange: function() {
    this.emit('change');
  },

  getState: function() {
    return this.todos;
  }

});

module.exports = TodoStore;