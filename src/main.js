// Query-selectors

var turnTrackerText = document.querySelector('.turn-tracker-text');
var p1WinText = document.querySelector('.p1-win-text');
var p2WinText = document.querySelector('.p2-win-text');

// Event listeners

window.addEventListener('click', clickHandler);
window.addEventListener('load', loadHandler);

// Global variables

// Functions
function loadHandler() {

}

function clickHandler() {
  if (event.target.className === "sector-img") takeSpace();
}

function takeSpace() {
  if (11 === 11) {
    console.log('Yay, bitch')
  }
}
