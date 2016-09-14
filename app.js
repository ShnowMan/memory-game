var tileObjArr = [];
var tempIdxArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var randomTileIdxArr = [];
var wrongSound = new Audio('http://www.wavsource.com/snds_2016-08-21_1204101428963685/tv/simpsons/homer/aw_crap.wav');
var correctSound = new Audio('http://noproblo.dayjo.org/ZeldaSounds/LOZ/LOZ_Fanfare.wav');
var finishSound = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_stage_clear.wav');

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
var userStats = {
  score: 500,
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
    tracker.tileElArr[tileNum].removeEventListener('click', tracker.flip);
    if (tracker.tileFlipCount >= 2) {
      tracker.playSound();
      setTimeout(tracker.compareTiles,500);
    }
  },
  playSound: function() {
    if (tracker.tileColorCompareArr[0] === tracker.tileColorCompareArr[1]) {
      correctSound.play();
    } else {
      wrongSound.play();
    }
  },
  compareTiles: function() {
    tracker.tileFlipCount = 0;
    if (tracker.tileColorCompareArr[0] === tracker.tileColorCompareArr[1]) {
      tracker.tileColorCompareArr = [];
      userStats.score += 1000;
      tracker.resetScoreBoard();
      tracker.populateScoreBoard();
      if (tracker.tileMatchArr.length >= tileObjArr.length) {
        finishSound.play();
        alert('Congrats! You\'re final score is ' + userStats.score + ' points!');
        tracker.resetScoreBoard();
        tracker.populateScoreBoard();
      }
    } else {
      tracker.tileColorCompareArr = [];
      tracker.tileMatchArr.splice(tracker.tileMatchArr.length - 1);
      tracker.tileMatchArr.splice(tracker.tileMatchArr.length - 1);
      tracker.tilesReturnbeige();
      userStats.score -= 250;
      tracker.resetScoreBoard();
      tracker.populateScoreBoard();
    }
  },
  tilesReturnbeige: function() {
    for (var i = 0; i < tileObjArr.length; i++) {
      if (tracker.tileMatchArr.indexOf(i.toString()) < 0) {
        tracker.tileElArr[i].style.backgroundColor = 'beige';
        tracker.tileElArr[i].addEventListener('click', tracker.flip);
      }
    }
  },

  populateScoreBoard: function() {
    var scoreBoard = document.getElementById('score_board');
    var currentScore = document.createElement('li');
    currentScore.textContent = userStats.score;
    scoreBoard.appendChild(currentScore);
  },
  resetScoreBoard: function() {
    var scoreBoard = document.getElementById('score_board');
    scoreBoard.innerHTML = '';
  }

};

createTiles();
createTiles();
tracker.getTileElements();
tracker.randomizeTileIndex();



for (var i = 0; i < tileObjArr.length; i++) {
  tracker.tileElArr[i].addEventListener('click', tracker.flip);
}
