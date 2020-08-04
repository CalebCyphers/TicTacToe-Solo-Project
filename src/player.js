class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.moves = [];
  }
  saveWinToStorage() {
    var wins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.name}`, wins);
  }
  retrieveWinFromStorage() {
    var stuffInStorage = JSON.parse(localStorage.getItem(`${this.name}`))
    if (stuffInStorage === null) {
      this.saveWinToStorage()
    } else {
    this.wins = JSON.parse(localStorage.getItem(`${this.name}`))
    }
  }
}
