function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let counter = 0;
  let isGameOver = false;
  return function (guess) {
    if (isGameOver) {
      return "The game is over, you already won!";
    }
    counter++;
    if (guess === randomNumber) {
      isGameOver = true;
      return `You win! You found ${randomNumber} in ${counter} guesses`;
    } else if (guess > randomNumber) {
      return `${guess} is too high!`;
    } else {
      return `${guess} is too low!`;
    }
  };
}

module.exports = { guessingGame };
