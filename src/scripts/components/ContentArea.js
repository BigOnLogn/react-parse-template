/** @jsx React.DOM */

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);
var RouteMixin = require('../router/RouteMixin');

var TodoItems = require('./TodoItems');
var Login = require('./Login');
var Profile = require('./Profile');

var ContentArea = React.createClass({

  mixins: [FluxChildMixin, RouteMixin],

  render: function() {

    var router = this.props.router;

    if (!this.props.user) {
      return renderContent(<Login />);
    }

    if (router.current === 'profile') {
      // render Profile
      return renderContent(<Profile user={this.props.user} stats={computeStats(this.props.todos)} />);

    } else if (router.current === 'home' && this.props.user) {
      // render TodoItems
      return renderContent(<TodoItems todos={this.props.todos} />);
    }

  }

});

function computeStats(todos) {
  return {
    count: todos.remaining().length
  };
}

function renderContent(content) {
  return (
    <div className="container">
      {content}

      <div className="footer">
        <p>&copy; Nick Moore 2014</p>
      </div>
    </div>
  );
}

module.exports = ContentArea;