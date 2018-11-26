var MemoryGame = function (cards) {
  this.cards = cards;

  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  // this.cards = this.shuffleCards(cards);
};


MemoryGame.prototype.shuffleCards = function (array) {
  return;
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  // It should add 1 to `pairsClicked` when we call it
  this.pairsClicked++;
  $('#pairs_clicked').html(this.pairsClicked);
  if(firstCard=== secondCard){
    //It should add 1 to pairsGuessed if they are the same card
    this.pairsGuessed++;
    $('#pairs_guessed').html(this.pairsGuessed);
    //It should return true when the comparing cards are the same
    return true;
  } else {
    //It should return false when the comparing cards are the same
    return false;
  }
  // clear the array since it always has to have max two numbers
  this.pickedCards = [];
  // check if we have 12 correct guesses
  this.finished();
}


MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 12){
    return true;
      // clear the board
      $(".card").toggle();

      // append h1 with text "YOU WON!!!!"
      $("#memory_board").append("<h1>YOU WON!!!!</h1>")
  }else{
  return false;
  }
};
