/** @jsx React.DOM */
/*global React*/

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Avatar = require('./Avatar');

var NavBar = React.createClass({

  mixins: [FluxChildMixin],

  render: function() {

    var avatar = <div />;

    if (this.props.user) {
      avatar = <Avatar user={this.props.user} />
    }

    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navibation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{this.props.title}</a>
          </div>
          <div className="navbar-collapse collapse">
            <span className="navbar-right">
              {avatar}
            </span>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = NavBar;