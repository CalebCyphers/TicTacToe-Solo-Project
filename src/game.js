class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.player1turn = true;
    this.turnsTaken = 0
  }

  updateBoard(sector) {
    if (this.player1turn) {
      this.player1.moves.push(sector)
    } else {
      this.player2.moves.push(sector)
    }
  }

  resetMoves() {
    this.player1.moves = []
    this.player2.moves = []
    this.player1turn = true
    this.turnsTaken = 0
  }

  passTurn() {
    if (this.player1turn) {
      this.player1turn = false
    } else {
      this.player1turn = true
    }
  }

  includesWin(winState, moves) {
    for (var i = 0; i < winState.length; i++) {
      if (!moves.includes(winState[i])) {
        return false;
      }
    }
    return true;
  }

  checkForWin(player) {
    var winStates = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
    var player = this.currentPlayer()
    var testresponse = `the current player is ${player.name} and they have taken these spaces: ${player.moves}`
    console.log(testresponse)
    for (var i = 0; i < winStates.length; i++) {
      if (this.includesWin(winStates[i], player.moves)) {
        return true
      }
    }
    return false
  }
  checkForDraw() {
    this.turnsTaken ++
    if (this.turnsTaken === 9){
      return true
    }
  }
  currentPlayer() {
    if (this.player1turn) {
      return this.player1
    } else {
      return this.player2
    }
  }
}
