var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var schema = mongoose.Schema({

  login: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  nome: {
    type: String,
    require: true
  },

  inclusao: {
    type: Date,
    default: Date.now
  }

});

schema.plugin(findOrCreate);
mongoose.model('Usuario', schema);
