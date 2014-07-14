/** @jsx React.DOM */

// Bring in jQuery and React as a Bower component in the global namespace
require("script!react/react-with-addons.js");
require("script!jquery/jquery.js");
require("script!bootstrap/dist/js/bootstrap.js");
require('script!parse/parse-1.2.18.js');

Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_ID');

var App = require("./components/App");

var Fluxxor = require('fluxxor');
var stores = require('./stores');
var actions = require('./actions');

var flux = new Fluxxor.Flux(stores, actions);

require('../styles/app.css');

React.renderComponent(<App flux={flux} />, document.getElementById('react-root'));

