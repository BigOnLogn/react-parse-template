/** @jsx React.DOM */
/*global React*/

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Logout = React.createClass({

  mixins: [FluxChildMixin],

  render: function() {

    return (
      <li><a href="#" onClick={this.logout}>Logout</a></li>
    );

  },

  logout: function(e) {
    e.preventDefault();

    this.getFlux().actions.logout();
  }

});

module.exports = Logout;