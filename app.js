var tileObjArr = [];
var tempInd = [];
var randomTileInd = [];

function TileObj(color) {
  this.name = color;
  tileObjArr.push(this);
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

var tracker = {
  randomInd: [],
  makeTileInd: function() {
    for (var i = 1; i <= 16; i++) {
      tempInd.push(i);
    }
  },
  randomizeTileIndex: function() {
    while (tempInd.length > 0) {
    // for (var i = 0; i < 16; i++) {
      var idx = Math.floor(Math.random() * tempInd.length);
      var thing = tempInd[idx];
      tempInd.splice(idx, 1);
      randomTileInd.push(thing);
    }
  },

};

createTiles();
createTiles();
tracker.makeTileInd();
tracker.randomizeTileIndex();
console.log(randomTileInd);
// console.table(randomTileInd);
