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

}

function clickHandler() {
  if (event.target.className === "sector-img") takeSpace(event);
}

function takeSpace(event) {
  if (event.target.attributes.src.nodeValue === "./img/box-ink.png" && game.player1turn) {
  event.target.attributes.src.nodeValue = "./img/x-ink.png";
  game.updateBoard(parseInt(event.target.dataset.sector))
} else if (event.target.attributes.src.nodeValue === "./img/box-ink.png" && !game.player1turn) {
  event.target.attributes.src.nodeValue = "./img/o-ink.png";
  game.updateBoard(parseInt(event.target.dataset.sector))
};
}
