'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var PollOptionSchema = new Schema({
    optionName:String,
    votes:Number
});
var PollSchema = new Schema({
  question: String,
  owner:String,
  options:[PollOptionSchema]
  
});

module.exports = mongoose.model('Poll', PollSchema);
