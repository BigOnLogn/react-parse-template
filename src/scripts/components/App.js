/** @jsx React.DOM */
/*global React*/

var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ContentArea = require('./ContentArea');
var NavBar = require('./NavBar');
var Router = require('../router/Router');

var router = new Router();

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore", "UserStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();

    var state = {
      todos: flux.store("TodoStore").getState(),
      user: flux.store("UserStore").getState()
    };

    return state;
  },

  render: function() {

    return (
      <main>

        <NavBar user={this.state.user} title="react-parse-template" />

        <ContentArea todos={this.state.todos} user={this.state.user} router={router} />
        
      </main>
    );

  }
  
});

router.history.start();

module.exports = App;