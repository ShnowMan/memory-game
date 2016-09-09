var tileArr = [];

function TileObj(color) {
  this.name = color;
  tileArr.push(this);
};

var createTiles = function() {
  new TileObj('red');
  new TileObj('blue');
  new TileObj('green');
  new TileObj('orange');
  new TileObj('brown');
  new TileObj('purple');
  new TileObj('yellow');
  new TileObj('cyan');
};
