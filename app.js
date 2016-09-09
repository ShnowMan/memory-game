var tileArr = [];

function TileObj(name, color) {
  this.name = name;
  this.color = color;
  tileArr.push(this);
};

var createTiles = function() {
  new TileObj('red', red);
  new TileObj('blue', blue);
  new TileObj('green', green);
  new TileObj('orange', orange);
  new TileObj('brown', brown);
  new TileObj('purple', purple);
  new TileObj('yellow', yellow);
  new TileObj('cyan', cyan);
};
