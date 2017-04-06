"use strict";

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentsSchema = new Schema({
  author: String,
  text: String
})

var Comment = mongoose.model('Comment', CommentsSchema)

module.exports = Comment
