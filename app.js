var tileObjArr = [];
var tempInd = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
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
  tileOne: document.getElementById('1'),
  tileTwo: document.getElementById('2'),
  tileThree: document.getElementById('3'),
  tileFour: document.getElementById('4'),
  tileFive: document.getElementById('5'),
  tileSix: document.getElementById('6'),
  tileSeven: document.getElementById('7'),
  tileEight: document.getElementById('8'),
  tileNine: document.getElementById('9'),
  tileTen: document.getElementById('10'),
  tileEleven: document.getElementById('11'),
  tileTwelve: document.getElementById('12'),
  tileThirteen: document.getElementById('13'),
  tileFourteen: document.getElementById('14'),
  tileFifteen: document.getElementById('15'),
  tileSixteen: document.getElementById('16'),

  randomInd: [],

  // makeTileInd: function() {
  //   for (var i = 1; i <= 16; i++) {
  //     tempInd.push(i);
  //   }
  // },

  randomizeTileIndex: function() {
    while (tempInd.length > 0) {
      var idx = Math.floor(Math.random() * tempInd.length);
      var thing = tempInd[idx];
      tempInd.splice(idx, 1);
      randomTileInd.push(thing);
    }
  },
  addColorToTiles: function() {
    tracker.tileOne.style.backgroundColor = tileObjArr[randomTileInd[0]].name;
    tracker.tileTwo.style.backgroundColor = tileObjArr[randomTileInd[1]].name;
    tracker.tileThree.style.backgroundColor = tileObjArr[randomTileInd[2]].name;
    tracker.tileFour.style.backgroundColor = tileObjArr[randomTileInd[3]].name;
    tracker.tileFive.style.backgroundColor = tileObjArr[randomTileInd[4]].name;
    tracker.tileSix.style.backgroundColor = tileObjArr[randomTileInd[5]].name;
    tracker.tileSeven.style.backgroundColor = tileObjArr[randomTileInd[6]].name;
    tracker.tileEight.style.backgroundColor = tileObjArr[randomTileInd[7]].name;
    tracker.tileNine.style.backgroundColor = tileObjArr[randomTileInd[8]].name;
    tracker.tileTen.style.backgroundColor = tileObjArr[randomTileInd[9]].name;
    tracker.tileEleven.style.backgroundColor = tileObjArr[randomTileInd[10]].name;
    tracker.tileTwelve.style.backgroundColor = tileObjArr[randomTileInd[11]].name;
    tracker.tileThirteen.style.backgroundColor = tileObjArr[randomTileInd[12]].name;
    tracker.tileFourteen.style.backgroundColor = tileObjArr[randomTileInd[13]].name;
    tracker.tileFifteen.style.backgroundColor = tileObjArr[randomTileInd[14]].name;
    tracker.tileSixteen.style.backgroundColor = tileObjArr[randomTileInd[15]].name;
  },

};


createTiles();
createTiles();
// tracker.makeTileInd();
tracker.randomizeTileIndex();
console.log(randomTileInd);
tracker.addColorToTiles();
