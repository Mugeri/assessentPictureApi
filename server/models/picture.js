const mongoose = require('mongoose');

const schema = mongoose.Schema;

const pictureSchema = new Schema({
  'albumId': Number,
  'id': Number,
  'title': String,
  'url': String,
  'thumbnailUrl': String,
});

module.exports = mongoose.model('Picture', pictureSchema);
