var tileObjArr = [];
var tempIdxArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var randomTileIdxArr = [];

function TileObj(color) {
  this.color = color;
  this.match = false;
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
  tileColorCompareArr: [],
  tileNum: 0,
  tileMatchArr: [],
  getTileElements: function() {
    for (var i = 0; i < tileObjArr.length; i++) {
      this.tileElArr[i] = document.getElementById(i);
    }
  },
  randomizeTileIndex: function() {
    while (tempIdxArr.length > 0) {
      var idx = Math.floor(Math.random() * tempIdxArr.length);
      var randomIdx = tempIdxArr[idx];
      tempIdxArr.splice(idx, 1);
      randomTileIdxArr.push(randomIdx);
    }
  },
  flip: function(event) {
    tileNum = event.target.id;
    tracker.tileMatchArr.push(tileNum);
    tracker.tileElArr[tileNum].style.backgroundColor = tileObjArr[randomTileIdxArr[tileNum]].color;
    tracker.tileColorCompareArr.push(tracker.tileElArr[tileNum].style.backgroundColor);
    tracker.tileFlipCount++;
    if (tracker.tileFlipCount >= 2) {
      setTimeout(tracker.compareTiles,100);
    }
  },
  compareTiles: function() {
    tracker.tileFlipCount = 0;
    if (tracker.tileColorCompareArr[0] === tracker.tileColorCompareArr[1]) {
      tracker.tileColorCompareArr = [];
      if (tracker.tileMatchArr.length >= tileObjArr.length) {
        alert('Congrats!');
      } else {
        alert('You found a match!');
      }
    } else {
      alert('No match!');
      tracker.tileColorCompareArr = [];
      tracker.tileMatchArr.splice(tracker.tileMatchArr.length - 1);
      tracker.tileMatchArr.splice(tracker.tileMatchArr.length - 1);
      tracker.tilesReturnWhite();
    }
  },
  tilesReturnWhite: function() {
    for (var i = 0; i < tileObjArr.length; i++) {
      if (tracker.tileMatchArr.indexOf(i.toString()) < 0) {
        tracker.tileElArr[i].style.backgroundColor = 'white';
      }
    }
  },
};

createTiles();
createTiles();
tracker.getTileElements();
tracker.randomizeTileIndex();

for (var i = 0; i < tileObjArr.length; i++) {
  tracker.tileElArr[i].addEventListener('click', tracker.flip);
}
