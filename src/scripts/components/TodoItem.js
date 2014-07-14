/** @jsx React.DOM */
/*global React*/

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var TodoItem = React.createClass({
  mixins: [FluxChildMixin],

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {

    var style = {
      "text-decoration": this.props.todo.get('complete') ? "line-through" : ""
    };

    return (
      <tr>
        <td><input type="checkbox" checked={!!this.props.todo.get('complete')} onChange={this.toggleComplete} /></td>
        <td style={style}>{this.props.todo.get('text')}</td>
      </tr>
    );

  },

  toggleComplete: function(e) {
    this.getFlux().actions.toggleTodo(this.props.todo);
  }

});

module.exports = TodoItem;