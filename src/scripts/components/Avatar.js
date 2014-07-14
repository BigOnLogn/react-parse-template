/** @jsx React.DOM */

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Avatar = React.createClass({

  mixins: [FluxChildMixin],

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render: function() {

    return (
      <form className="navbar-form navbar-right">
        <div className="btn-group">
          <button className="btn btn-xs btn-link" data-toggle="dropdown">
            <img className="img img-circle dropdown-toggle" src="//placekitten.com/30/30" />
          </button>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#/profile">Profile</a></li>
            <li><a href="#" onClick={this.logoutClick}>Logout</a></li>
          </ul>
        </div>
      </form>
    );

  },

  logoutClick: function(e) {
    e.preventDefault();

    this.getFlux().actions.logout();
  }

});

module.exports = Avatar;