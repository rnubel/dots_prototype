require('../db');

var mongoose = require('mongoose');
var Match = mongoose.model("Match");

describe("Anything", function() {
  it("should test", function(done) {
    expect(1).toBe(1);
    done();
  });
});

describe("Match", function() {
  it("instantiates with an empty board", function(done) {
    var m = new Match();

    expect(m.board.length).toBe(0);
    done();
  });

  it("creates an empty board", function(done) {
    var m = new Match();
    m.createBoard(8, 6);

    expect(m.board.length).toBe(6);
    expect(m.board[0].length).toBe(8);
    done();
  });
});
