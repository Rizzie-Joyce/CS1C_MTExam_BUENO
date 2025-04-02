const favoriteNumber = 08;
let guess = null;
while (guess !== favoriteNumber) {
  guess = parseInt(prompt("Guess your favorite number: "), 10);

  if (guess === favoriteNumber) {
    console.log("Correct! You guessed the favorite number.");
  } else if (guess > favoriteNumber) {
    console.log("Too high! Try again.");
  } else if (guess < favoriteNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Invalid input. Please enter a number.");
  }
}
