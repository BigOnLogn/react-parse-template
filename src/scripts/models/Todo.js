/*global Parse*/

var Todo = Parse.Object.extend("Todo", {

  defaults: {
    text: "empty todo...",
    complete: false
  },

  initialize: function() {
    if (!this.get('text')) {
      this.set({'text': this.defaults.text});
    }
  },

  // Toggle the 'done' state
  toggle: function() {
    this.save({complete: !this.get('complete')});
  }

});

module.exports = Todo;