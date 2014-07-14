var _merge = require('lodash-node/modern/objects/merge');

var TodoActions = require('./TodoActions');
var ProfileActions = require('./ProfileActions');

module.exports = _merge({}, TodoActions, ProfileActions);