/** @jsx React.DOM */
/*globals React, Parse*/

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Login = React.createClass({

  mixins: [FluxChildMixin],

  render: function() {

    return (
      <form role="form">
        <div className="form-group">
          <label className="sr-only" htmlFor="email">Email Address</label>
          <input ref="email" type="email" className="input-lg form-control" id="email" placeholder="email@address" required autofocus />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="password">Password</label>
          <input ref="password" type="password" className="input-lg form-control" id="password" placeholder="Password" required />
        </div>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.onLogin}>Sign In</button>
        <button className="btn btn-lg btn-success btn-block" onClick={this.onSignup}>Sign Up</button>
      </form>
    );

  },

  onLogin: function(e) {
    e.preventDefault();

    var email = this.refs.email.getDOMNode().value,
      password = this.refs.password.getDOMNode().value;

    this.getFlux().actions.login({username: email, password: password});
  },

  onSignup: function(e) {
    e.preventDefault();

    var email = this.refs.email.getDOMNode().value,
      password = this.refs.password.getDOMNode().value;

    Parse.User.signUp(email, password, {ACL: new Parse.ACL()}).then(

      function(user) {
        this.getFlux().actions.login(user);
      }.bind(this),

      function(err) {
        // TODO: flash error here
        console.log('Sign up error:', err);
      }
    );
  }

});

module.exports = Login;