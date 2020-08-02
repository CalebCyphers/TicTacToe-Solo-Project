class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = [0,0,0,0,0,0,0,0,0];
    this.player1turn = true;
  }
  updateBoard(sector) {
    if (this.player1turn) {
      this.player1.moves.push(sector)
    } else {
      this.player2.moves.push(sector)
    }
    this.checkForWin()
    this.passTurn()
  }
  resetBoard() {

  }
  passTurn() {
    if (this.player1turn) {
      this.player1turn = false
    } else {
      this.player1turn = true
    }
  }
  checkForWin() {

  }
}
