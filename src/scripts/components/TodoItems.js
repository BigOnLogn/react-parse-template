/** @jsx React.DOM */
/*global React*/

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var TodoItem = require('./TodoItem');

var TodoItems = React.createClass({

  mixins: [FluxChildMixin],

  render: function() {

    return (
      <div className="row marketing">
        <div className="panel panel-default">
          <div className="panel-heading">
            <form className="form-inline" role="form">
              <div className="form-group">
                <label className="sr-only" htmlFor="addTodo">Add Todo</label>
                <input ref="todoInput" className="form-control input-sm" id="addTodo" placeholder="Add Todo" />
              </div>
              <button className="btn btn-sm btn-default" onClick={this.addTodo}>Add Todo</button>
              <button className="btn btn-sm btn-default" onClick={this.clearCompletedTodos}>Clear Completed</button>
            </form>
          </div>
          <div className="panel-body">
            <table className="table table-condensed table-striped">
              <thead>
                <tr>
                  <th><input ref="toggleAll" type="checkbox" checked={this.props.todos.allCompleted()} onChange={this.completeAll} /> Toggle All</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                { this.props.todos.map(function(todo, i) {
                  return <TodoItem key={i} todo={todo} />
                }) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

  },

  addTodo: function(e) {
    e.preventDefault();
    var node = this.refs.todoInput.getDOMNode();
    this.getFlux().actions.addTodo(node.value);
    node.value = "";
  },

  completeAll: function(e) {
    var checked = this.refs.toggleAll.getDOMNode().checked;
    this.getFlux().actions.toggleCompleted(checked);
  },

  clearCompletedTodos: function(e) {
    e.preventDefault();
    
    this.getFlux().actions.clearCompleted();
  }

});

module.exports = TodoItems;