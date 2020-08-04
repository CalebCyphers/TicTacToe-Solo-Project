// Query-selectors

var turnTrackerText = document.querySelector('.turn-tracker-text');
var p1WinText = document.querySelector('.p1-win-text');
var p2WinText = document.querySelector('.p2-win-text');
var sectors = document.querySelectorAll('.sector-img');

// Event listeners

window.addEventListener('click', clickHandler);
window.addEventListener('load', loadHandler);

// Global variables

var firstPlayer = new Player("Ryan")
var secondPlayer = new Player("Kaia")
var game = new Game(firstPlayer, secondPlayer)

// Functions
function loadHandler() {
  domUpdate()
}

function clickHandler() {
  if (event.target.className === "sector-img" && event.target.attributes.src.nodeValue === "./img/box-ink.png") {
  takeSpace(event);
  game.updateBoard(parseInt(event.target.dataset.sector))
  resolver()
  domUpdate()
  }
}

function resolver() {
  if (game.checkForWin()) {
    console.log(`${game.currentPlayer().name} got a win!`)
    game.resetMoves()
    turnTrackerText.innerText = game.player1turn ? `X got a win!` : `O got a win!`
  } else if (game.checkForDraw()) {
    console.log(`It's a draw! Try again, nerds!`)
    game.resetMoves()
  } else {
    console.log("No wins yet. Keep playing!")
    game.passTurn()
  }
}

function domUpdate() {
  turnTrackerText.innerText = game.player1turn ? `X's turn` : `O's turn`;
  p1WinText.innerText = `X wins: ${game.player1.wins}`;
  p2WinText.innerText = `O wins: ${game.player2.wins}`;
  if (game.player1.moves.length === 0 && game.player2.moves.length === 0) {
    for (var i = 0; i < sectors.length; i++) {
      sectors[i].src = "./img/box-ink.png";
    }
  }
}

function takeSpace(event) {
  if (game.player1turn) {
  event.target.attributes.src.nodeValue = "./img/x-ink.png";
} else if (!game.player1turn) {
  event.target.attributes.src.nodeValue = "./img/o-ink.png";
};
}
