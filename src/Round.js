class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard());
    turn.evaluateGuess();
    turn.giveFeedback();
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}



module.exports = Round;