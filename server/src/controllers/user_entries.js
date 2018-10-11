'use strict';

const UserEntry = require('../models/user_entry')

exports.index = function(req, res) {
    UserEntry.find({}, function(err, userEntry) {
        if (err) res.send(err)
        res.json(userEntry)
    })
}

exports.create = function(req, res) {
    const newUserEntry = new UserEntry(req.body)
    newUserEntry.save(function(err, userEntry) {
        if (err) res.send(err)
        res.json(userEntry)
    })
}

exports.show = function(req, res) {
    UserEntry.findById(req.params.id, function(err, userEntry) {
        if (err) res.send(err)
        res.json(userEntry)
    })
}

exports.update = function(req, res) {
    UserEntry.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function(err, userEntry) {
        if (err) res.send(err)
        res.json(userEntry)
    })
}

exports.destroy = function(req, res) {
    UserEntry.deleteOne({ _id: req.params.id }, function(err, userEntry) {
        if (err) res.send(err)
        res.json({ message: `User entry (${req.params.id}) was successfully deleted.` })
    })
}
