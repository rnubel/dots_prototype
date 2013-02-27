var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var matchSchema = new Schema({
    board: Array,
    boxes: Number,
    updated_at : Date
});

matchSchema.methods.createBoard = function(width, height) {
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      row.push(0);
    }

    this.board.push(row);
  }
}

matchSchema.methods.drawLine = function(x, y, side) {
  x = Number(x);
  y = Number(y);

  var sides = { "top" :   { val: 8, oppcell: [x, y-1], oppval: 2 },
                "right":  { val: 4, oppcell: [x+1, y], oppval: 1 },
                "bottom": { val: 2, oppcell: [x, y+1], oppval: 8 },
                "left":   { val: 1, oppcell: [x-1, y], oppval: 4 }  };
  var s = sides[side]
  this.modifyCell(x, y, s.val);
  this.modifyCell(s.oppcell[0], s.oppcell[1], s.oppval);

  this.markModified('board');
}

matchSchema.methods.modifyCell = function(x, y, val) {
  console.log("Modifiying " + x + ", " + y + " by " + val + ".");
  if (x < 0 || x >= this.board[0].length || y < 0 || y >= this.board.length) return;
  if (this.board[y][x] != 15) {
    this.board[y][x] |= val;
    if (this.board[y][x] == 15) {
      this.boxes |= 0;
      this.boxes += 1;
    }
  }
}
 
var Match = mongoose.model('Match', matchSchema);
 
mongoose.connect( 'mongodb://localhost/express-dots' );
