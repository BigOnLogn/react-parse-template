/*global Parse*/

var Todo = require('./Todo');

var TodoList = Parse.Collection.extend({

  model: Todo,

  // filter for all done todos
  done: function() {
    return this.filter(function(todo) { return todo.get('complete'); });
  },

  // filter for all not done
  remaining: function() {
    return this.without.apply(this, this.done());
  },

  // getst the next available order number
  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  allCompleted: function() {
    if (!this.length) return false;
    return this.done().length === this.length;
  },

  // sort comparator
  comparator: function(todo) {
    return todo.get('order');
  }

});

module.exports = TodoList;