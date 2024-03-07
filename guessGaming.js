let max = parseInt(prompt("Enter the maximum number!"));
while (!max) {
  max = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * max + 1);

let guess = prompt("Enter your first guess: (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess == "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess: ");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess: ");
    attempts++;
  } else {
    guess = prompt("Please enter a number or 'q' to quit");
  }
}
if (guess == "q") {
  console.log("Ok ! You QUIT!");
} else {
  console.log(`YOU GOT IT! It tooks ${attempts}`);
}
