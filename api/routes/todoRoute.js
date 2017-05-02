'use strict'
module.exports = function(app) {
    var todoController = require('../controllers/todoController');

app.route('/todos')
    .get(todoController.getAll)
    .post(todoController.post);

app.route('/todos/:id')
    .get(todoController.get)
    .put(todoController.put)
    .delete(todoController.delete);

};