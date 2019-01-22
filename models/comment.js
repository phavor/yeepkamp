const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comment = new Schema({
  text: { type: String, trim: true },
  author: String,
  createdAt: { type: Date, default: Date().toLocaleString() }
})

const Comment = mongoose.model('Comment', comment)

module.exports = Comment