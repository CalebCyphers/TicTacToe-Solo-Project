class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.moves = [];
  }
  saveWinToStorage() {
    this.wins++
  }
}
