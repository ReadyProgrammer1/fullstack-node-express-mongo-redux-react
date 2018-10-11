'use strict';

module.exports = function(app) {
    const controller = require('../controllers/user_entries')

    app.route('/user-entries')
        .get(controller.index)
        .post(controller.create)
    
    app.route('/user-entries/:id')
        .get(controller.show)
        .put(controller.update) 
        .delete(controller.destroy)
}

