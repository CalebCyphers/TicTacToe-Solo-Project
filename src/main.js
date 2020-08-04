// Query-selectors

var turnTrackerText = document.querySelector('.turn-tracker-text');
var p1WinText = document.querySelector('.p1-win-text');
var p2WinText = document.querySelector('.p2-win-text');
var sectors = document.querySelectorAll('.sector-img');
var overlay = document.querySelector('.overlay');

// Event listeners

window.addEventListener('click', clickHandler);
window.addEventListener('load', loadHandler);

// Global variables

var firstPlayer = new Player("Ryan")
var secondPlayer = new Player("Kaia")
var game = new Game(firstPlayer, secondPlayer)

// Functions
function loadHandler() {
  game.player1.retrieveWinFromStorage()
  game.player2.retrieveWinFromStorage()
  domUpdate()
}

function clickHandler() {
  if (event.target.className === "sector-img" && event.target.attributes.src.nodeValue === "./img/box-ink.png") {
    takeSpace(event);
    game.updateBoard(parseInt(event.target.dataset.sector));
    resolver();
    game.player1.saveWinToStorage()
    game.player2.saveWinToStorage()
  }
}

function resolver() {
  if (game.checkForWin()) {
    turnTrackerText.innerText = game.player1turn ? `X got a win!` : `O got a win!`;
    game.resetMoves();
    stopClick();
    window.setTimeout(domUpdate, 3000);
  } else if (game.checkForDraw()) {
    game.resetMoves();
    turnTrackerText.innerText = `Draw`;
    stopClick()
    window.setTimeout(domUpdate, 3000);
  } else {
    game.passTurn();
    domUpdate();
  }
}


function domUpdate() {
  allowClick()
  turnTrackerText.innerText = game.player1turn ? `X's turn` : `O's turn`;
  p1WinText.innerText = `X wins: ${game.player1.wins}`;
  p2WinText.innerText = `O wins: ${game.player2.wins}`;
  if (game.player1.moves.length === 0 && game.player2.moves.length === 0) {
    for (var i = 0; i < sectors.length; i++) {
      sectors[i].src = "./img/box-ink.png";
    }
  }
}

function stopClick() {
  overlay.classList.remove("hidden")
}

function allowClick() {
  overlay.classList.add("hidden")
}

function takeSpace(event) {
  if (game.player1turn) {
    event.target.attributes.src.nodeValue = "./img/x-ink.png";
  } else if (!game.player1turn) {
    event.target.attributes.src.nodeValue = "./img/o-ink.png";
  };
}
