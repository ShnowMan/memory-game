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
  // tileOne: document.getElementById('1'),
  // tileTwo: document.getElementById('2'),
  // tileThree: document.getElementById('3'),
  // tileFour: document.getElementById('4'),
  // tileFive: document.getElementById('5'),
  // tileSix: document.getElementById('6'),
  // tileSeven: document.getElementById('7'),
  // tileEight: document.getElementById('8'),
  // tileNine: document.getElementById('9'),
  // tileTen: document.getElementById('10'),
  // tileEleven: document.getElementById('11'),
  // tileTwelve: document.getElementById('12'),
  // tileThirteen: document.getElementById('13'),
  // tileFourteen: document.getElementById('14'),
  // tileFifteen: document.getElementById('15'),
  // tileSixteen: document.getElementById('16'),
  randomizeTileIndex: function() {
    while (tempInd.length > 0) {
      var idx = Math.floor(Math.random() * tempInd.length);
      var thing = tempInd[idx];
      tempInd.splice(idx, 1);
      randomTileInd.push(thing);
    }
  },
  // addColorToTiles: function() {
  //   tracker.tileElArr[0].style.backgroundColor = tileObjArr[randomTileInd[0]].color;
  //   tracker.tileElArr[1].style.backgroundColor = tileObjArr[randomTileInd[1]].color;
  //   tracker.tileElArr[2].style.backgroundColor = tileObjArr[randomTileInd[2]].color;
  //   tracker.tileElArr[3].style.backgroundColor = tileObjArr[randomTileInd[3]].color;
  //   tracker.tileElArr[4].style.backgroundColor = tileObjArr[randomTileInd[4]].color;
  //   tracker.tileElArr[5].style.backgroundColor = tileObjArr[randomTileInd[5]].color;
  //   tracker.tileElArr[6].style.backgroundColor = tileObjArr[randomTileInd[6]].color;
  //   tracker.tileElArr[7].style.backgroundColor = tileObjArr[randomTileInd[7]].color;
  //   tracker.tileElArr[8].style.backgroundColor = tileObjArr[randomTileInd[8]].color;
  //   tracker.tileElArr[9].style.backgroundColor = tileObjArr[randomTileInd[9]].color;
  //   tracker.tileElArr[10].style.backgroundColor = tileObjArr[randomTileInd[10]].color;
  //   tracker.tileElArr[11].style.backgroundColor = tileObjArr[randomTileInd[11]].color;
  //   tracker.tileElArr[12].style.backgroundColor = tileObjArr[randomTileInd[12]].color;
  //   tracker.tileElArr[13].style.backgroundColor = tileObjArr[randomTileInd[13]].color;
  //   tracker.tileElArr[14].style.backgroundColor = tileObjArr[randomTileInd[14]].color;
  //   tracker.tileElArr[15].style.backgroundColor = tileObjArr[randomTileInd[15]].color;
  // }
  flip: function(event) {
    var tileNum = event.target.id;
    tracker.tileElArr[tileNum - 1].style.backgroundColor = tileObjArr[randomTileInd[tileNum - 1]].color;
    tracker.tileFlipCount++;
    setTimeout(tracker.flipToWhite, 100);
  },
  flipToWhite: function() {
    if (tracker.tileFlipCount === 2) {
      alert('you flipped 2 tiles, now resetting');
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
// tracker.addColorToTiles();

for (var i = 0; i < tileObjArr.length; i++) {
  tracker.tileElArr[i].addEventListener('click', tracker.flip);
}
