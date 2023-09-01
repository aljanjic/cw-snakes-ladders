function snakesAndLadders(board, dice) {


  // board = [0,0,3,0,0,0,0,-2,0,0,0] 
  // dice = [2,1,5,1,5,4]

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
