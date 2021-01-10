const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Book = new Schema({
  name: String,
  author: [String],
  price: Number,
});

module.exports = mongoose.model("Book", Book);
