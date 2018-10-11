'use strict';

module.exports = function(app) {
    const userEntries = require('./user_entries')
    userEntries(app)
}