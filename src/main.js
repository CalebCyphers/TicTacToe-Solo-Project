// Query-selectors

var turnTrackerText = document.querySelector('.turn-tracker-text');
var p1WinText = document.querySelector('.p1-win-text');
var p2WinText = document.querySelector('.p2-win-text');

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
  } else if (game.checkForDraw()) {
    console.log(`It's a draw! Try again, nerds!`)
    game.resetBoard()
  } else {
    console.log("No wins yet. Keep playing!")
    game.passTurn()
  }
}

function takeSpace(event) {
  if (game.player1turn) {
  event.target.attributes.src.nodeValue = "./img/x-ink.png";
} else if (!game.player1turn) {
  event.target.attributes.src.nodeValue = "./img/o-ink.png";
};
}
