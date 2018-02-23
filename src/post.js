const mongoose = require('mongoose');

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.connect('mongodb://localhost/so-posts');

const PostSchema = new mongoose.Schema({
  // TODO: write your schema here
});

module.exports = mongoose.model('Posts', PostSchema);
