'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');

// Get list of polls
exports.index = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(polls);
  });
};

// Get a single poll
exports.show = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    return res.json(poll);
  });
};

// Creates a new poll in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Poll.create(req.body, function(err, poll) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(poll);
  });
};

// Updates an existing poll in the DB.
// probably should amend this so it's its own route for added votes: more clarity
exports.update = function(req, res) {
  console.log('call to update made')
  if(req.body._id) { delete req.body._id; }
  Poll.findById(req.params.id, function (err, poll) {
    if (err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    poll.options.forEach(function(val){
        if(val.optionName === req.body.optionName){
          val.votes ++
        }
    });
    poll.voted.push(req.body.votingUser);
    poll.save(function (err) {
      if (err) { return handleError(res, err); }
      console.log('updated poll saved');
      return res.status(200).json(poll);
    });
  });
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    poll.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

//Returns all a specific users Polls
exports.usersPolls = function(req,res){
  var user = req.params.user;
  Poll.find({owner:user}, function(err,polls){
    if(err){return handleError(res,err);}
     return res.json(polls);
  });
}

function handleError(res, err) {
  return res.status(500).send(err);
}
