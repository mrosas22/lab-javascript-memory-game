var MemoryGame = function (cards) {
  this.cards = cards;

  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCards = function () {
  //Should mixed the cards property
  let shuffle = [], 
  j = cards.length;
  //While there remain elements to shuffle…
  for (i=0; i< cards.length;i++ ) { 
  //Pick a remaining element…
  x = Math.floor(Math.random() *(cards.length )); 
  //And move it to the new array.
  shuffle.push(cards.splice(x, 1));
  }
  return shuffle;
  };


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  // It should add 1 to `pairsClicked` when we call it
  if(firstCard=== secondCard){
    //It should add 1 to pairsGuessed if they are the same card
    this.pairsGuessed++;
    this.pairsClicked++;
    $('#pairs_guessed').html(this.pairsGuessed);
    $('#pairs_clicked').html(this.pairsClicked);
    //It should return true when the comparing cards are the same
    return true;
  } else {
    this.pairsClicked++;
    $('#pairs_clicked').html(this.pairsClicked);
    //It should return false when the comparing cards are the same
    return false;
  }
  
}


MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === (cards.length)/2){
    return true;
  };
  return false;
};
