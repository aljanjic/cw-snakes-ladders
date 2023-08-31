function snakesAndLadders(board, dice) {


  // board = [0,0,3,0,0,0,0,-2,0,0,0] 
  // dice = [2,1,5,1,5,4]

  let currentField = 0;

  dice.forEach(diceValue => {
    console.log('Current field:', currentField)
    console.log('Dice value: ', diceValue)
    if (currentField + diceValue < board.length){
      currentField += diceValue;
      console.log('Current field after throw:', currentField)
      if(board[currentField] !== 0 ) {
        console.log('There was a value on the board, value: ', board[currentField])
        currentField += board[currentField];
      }
    }
  });


  return currentField;
}

module.exports = snakesAndLadders;
