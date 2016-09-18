var tileObjArr = [];
var tempIdxArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var randomTileIdxArr = [];
var userHighScores = [];
var wrongSound = new Audio('http://soundfxcenter.com/video-games/mega-man/8d82b5_Mega_Man_Warning_Sound_Effect.mp3');
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
  new TileObj('pink');
  new TileObj('purple');
  new TileObj('yellow');
  new TileObj('cyan');
};

var userStats = {
  score: 0,
};

var tracker = {
  tileElArr: [],
  tileFlipCount: 0,
  tileColorCompareArr: [],
  tileNum: 0,
  tileMatchArr: [],
  currentPage: [],

  getCurrentPage: function(){
    tracker.currentPage = location.pathname.split('/');
  },

  getTileElements: function() {
    for (var i = 0; i < tileObjArr.length; i++) {
      tracker.tileElArr[i] = document.getElementById(i);
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
      for (var i = 0; i < tileObjArr.length; i++) {
        tracker.tileElArr[i].removeEventListener('click', tracker.flip);
      }
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
      for (var i = 0; i < tileObjArr.length; i++) {
        if (tracker.tileMatchArr.indexOf(i.toString()) < 0) {
          tracker.tileElArr[i].addEventListener('click', tracker.flip);
        }
      }
      tracker.tileColorCompareArr = [];
      userStats.score += 1000;
      tracker.resetScoreBoard();
      tracker.populateScoreBoard();
      if (tracker.tileMatchArr.length >= tileObjArr.length) {
        finishSound.play();
        tracker.addButton();
        tracker.resetScoreBoard();
        tracker.populateScoreBoard();
        tracker.storeHighScoresArray();
        tracker.setLSHighScores();
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
  addButton: function() {
    var buttonDivEl = document.getElementById('resetButton');
    var resetButtonEl = document.createElement('a');
    resetButtonEl.className = 'button';
    resetButtonEl.textContent = 'Play again?';
    resetButtonEl.href = 'game.html';
    buttonDivEl.appendChild(resetButtonEl);
  },
  populateScoreBoard: function() {
    if (tracker.currentPage[tracker.currentPage.length - 1] === 'game.html') {
      var scoreBoard = document.getElementById('score_board');
      var titleBoard = document.createElement('ul');
      var currentScore = document.createElement('li');
      currentScore.textContent = userStats.score;
      titleBoard.textContent = 'Current Score';
      titleBoard.appendChild(currentScore);
      scoreBoard.appendChild(titleBoard);
    }
  },

  resetScoreBoard: function() {
    var scoreBoard = document.getElementById('score_board');
    scoreBoard.innerHTML = '';
  },

  storeHighScoresArray: function(){
    if (localStorage.userHighScore){
      var lsHighScores = JSON.parse(localStorage.getItem('userHighScore'));
      for(var i = 0; i < lsHighScores.length; i++){
        userHighScores.push(lsHighScores[i]);
      }
    }
    userHighScores.push(userStats.score);
  },

  setLSHighScores: function() {
    localStorage.setItem('userHighScore',JSON.stringify(userHighScores));
  },

  populateHighScorePage: function() {
    if (tracker.currentPage[tracker.currentPage.length - 1] === 'highscores.html') {
      if (localStorage.userHighScore){
        var lsHighScores = JSON.parse(localStorage.getItem('userHighScore'));
        for(var i = 0; i < lsHighScores.length; i++){
          userHighScores.push(lsHighScores[i]);
        }
      }
      var highScorePage = document.getElementById('highScore');
      for (var j = 0; j < userHighScores.length; j++) {
        var highScoreLiEl = document.createElement('li');
        highScoreLiEl.textContent = userHighScores[j];
        highScorePage.appendChild(highScoreLiEl);
      }
    }
  }

};

tracker.getCurrentPage();
createTiles();
createTiles();
tracker.getTileElements();
tracker.randomizeTileIndex();
tracker.populateScoreBoard();
tracker.populateHighScorePage();

if (tracker.currentPage[tracker.currentPage.length - 1] === 'game.html'){
  for (var i = 0; i < tileObjArr.length; i++) {
    tracker.tileElArr[i].addEventListener('click', tracker.flip);
  }
};
