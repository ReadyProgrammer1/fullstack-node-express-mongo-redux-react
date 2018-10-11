'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserEntrySchema = new Schema({
    no: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.new
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserEntry', UserEntrySchema)
