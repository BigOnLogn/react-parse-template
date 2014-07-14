/** @jsx React.DOM */
/*global React*/

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);

var Profile = React.createClass({

  mixins: [FluxChildMixin],

  propTypes: {
    user: React.PropTypes.object.isRequired,
    stats: React.PropTypes.object.isRequired
  },

  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-2 col-lg-offset-2">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  {getUsername(this.props.user)}
                </h3>
              </div>

              <div className="panel-body">

                <div className="row">
                  <div className="col-md-3 col-lg-3" align="center">
                    <img className="img-circle" alt="User Pic" src="//placekitten.com/123/123" />
                  </div>
                  <div className="col-md-9 col-lg-9">
                    <form role="form" className="form-horizontal">
                      <div className="form-group">
                        <label className="col-sm-3 strong-label control-label">
                          Todo Count:
                        </label>
                        <div className="col-sm-9">
                          <p className="form-control-static">{this.props.stats}</p>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 strong-label control-label">
                          First Name:
                        </label>
                        <div className="col-sm-9">
                          <input ref="firstName"
                            className="form-control"
                            placeholder="First Name"
                            defaultValue={this.props.user.get('firstName')} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 strong-label control-label">
                          Last Name:
                        </label>
                        <div className="col-sm-9">
                          <input ref="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          defaultValue={this.props.user.get('lastName')} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>

              <div className="panel-footer">
                <div className="pull-right">
                  <a href="#" onClick={this.handleSave} className="btn btn-primary">Save</a> <a href="#" className="btn btn-default">Home</a>
                </div>
                <div className="clearfix" />
              </div>

            </div>

          </div>
        </div>
      </div>
    );

  },

  handleSave: function(e) {
    e.preventDefault();

    var payload = {
      firstName: this.refs.firstName.getDOMNode().value,
      lastName: this.refs.lastName.getDOMNode().value
    };

    console.log(payload);

    this.getFlux().actions.saveProfile(payload);
  }

});

function getUsername(parseUser) {
  if (!parseUser.get('firstName') && !parseUser.get('lastName')) {
    return parseUser.getUsername();
  }

  return parseUser.get('firstName') + ' ' + parseUser.get('lastName');
}

module.exports = Profile;