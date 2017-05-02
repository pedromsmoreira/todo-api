'use strict';
var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

var jsonpatch = require('json-patch');

exports.getAll = function(req, res) {
    Todo.find({}, function(err, todo) {
        if (err){
            res.send(err);
        }

        res.json(todo);
    });
};

exports.get = function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (err){
            res.send(err);
        }

        res.json(todo);
    });
};

exports.post = function(req, res) {
    var new_todo = new Todo(req.body);

    new_todo.save(function(err, todo) {
        if(err) {
            res.send(err);
        }

        res.json(todo);
    });
};

// https://github.com/Starcounter-Jack/JSON-Patch
exports.patch = function(req, res) {
    var domainTodo = Todo.findById(req.params.id, function(err, todo) {
        if (err) {
            res.send(err);
        }
        return todo;
    });

    jsonpatch.apply(domainTodo, req.body);
    
    Todo.findByIdAndUpdate(req.params.id, domainTodo, {new: true}, function(err, todo) {
        if (err) {
            res.send(err);
        }

        res.json(todo);
    });
};

exports.delete = function(req, res) {
    Todo.remove({ _id: req.params.id }, function(err, task) {
        if (err){
            res.send(err);
        }

        res.json({ message: 'Todo successfully deleted' });
    });
};