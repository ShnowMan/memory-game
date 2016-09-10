var tileObjArr = [];
var tempInd = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var randomTileInd = [];

function TileObj(color) {
  this.color = color;
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
  tileElArr: [],
  tileFlipCount: 0,
  getTileElements: function() {
    for (var i = 0; i < tileObjArr.length; i++) {
      this.tileElArr[i] = document.getElementById(i + 1);
    }
  },

  randomizeTileIndex: function() {
    while (tempInd.length > 0) {
      var idx = Math.floor(Math.random() * tempInd.length);
      var thing = tempInd[idx];
      tempInd.splice(idx, 1);
      randomTileInd.push(thing);
    }
  },

  flip: function(event) {
    var tileNum = event.target.id;
    tracker.tileElArr[tileNum - 1].style.backgroundColor = tileObjArr[randomTileInd[tileNum - 1]].color;
    tracker.tileFlipCount++;
    setTimeout(tracker.flipToWhite, 700);

  },
  flipToWhite: function() {
    if (tracker.tileFlipCount === 2) {
      tracker.tileFlipCount = 0;
      for (var i = 0; i < tileObjArr.length; i++) {
        tracker.tileElArr[i].style.backgroundColor = 'white';
      }
    }
  }
};

createTiles();
createTiles();
tracker.getTileElements();
tracker.randomizeTileIndex();

for (var i = 0; i < tileObjArr.length; i++) {
  tracker.tileElArr[i].addEventListener('click', tracker.flip);
}
