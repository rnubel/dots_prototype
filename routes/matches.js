var mongoose = require('mongoose'),
    Match = mongoose.model('Match');

exports.create = function(req, res) {
  var match = new Match();
  match.createBoard(6, 6);
  match.save(function(err) {
    if(err) { 
      return handleError(err);
    } else {
      res.send(match);
    }
  });
};

exports.show = function(req, res) {
  var match = Match.findById(req.params.id, function(err, match) {
    if (err) {
      res.send(404, "Match Not Found");
    } else {
      res.send(match)
    }
  })
}

exports.drawLine = function(req, res) {
  var match = Match.findById(req.params.id, function(err, match) {
    if (err) {
      res.send(404, "Match Not Found");
    } else {
      match.drawLine(req.params.x, req.params.y, req.params.side);
      match.save(function(err) { 
        if (err) {
          res.send(err);
        } else {
          res.send(match);
        }
      });
    }
  })
}
