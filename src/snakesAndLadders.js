function snakesAndLadders(board, dice) {

  let currentField = 0;

  dice.forEach(diceValue => {
    if (currentField + diceValue < board.length){
      currentField += diceValue;
      if(board[currentField] !== 0 ) {
        currentField += board[currentField];
      }
    }
  });

  return currentField;
}

module.exports = snakesAndLadders;
