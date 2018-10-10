function computerSelection () {
  const option = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * option.length);
  return option[index].toLowerCase();
}

function playerSelection (e) {
  // let option = prompt('Insert your option: (Rock, Paper, Scissors)')
  // return option.toLowerCase()
  return e.target.id;
}

function playRound (player, computer) {
  switch (player) {
    case 'rock':
      if (computer == 'scissors') {
        playerPoints++
        return "You Win! Rock beats Scissors."
      } else if (computer == 'paper') {
        computerPoints++
        return "You Lose! Paper beats Rock."
      } else {
        return "It's a tie."
      }
      break
    case 'paper':
      if (computer == 'rock') {
        playerPoints++
        return "You Win! Paper beats Rock."
      } else if (computer == 'scissors') {
        computerPoints++
        return "You Lose! Scissors beats Paper."
      } else {
        return "It's a tie."
      }
      break
    case 'scissors':
      if (computer == 'paper') {
        playerPoints++
        return "You Win! Scissors beats Paper."
      } else if (computer == 'rock') {
        computerPoints++
        return "You Lose! Rock beats Scissors."
      } else {
        return "It's a tie."
      }
  }
}

function printWinner (displayResults) {
  let winner = document.createElement('h1');
  if (playerPoints > computerPoints) {
    winner.textContent = ">>> You win! Please refresh the page to play again.";
  } else if (playerPoints < computerPoints) {
    winner.textContent = ">>> Computer win! Please refresh the page to play again";
  } else {
    winner.textContent = ">>> It's a tie. Please refresh the page to play again";
  }
  displayResults.appendChild(winner);
}

function game (rounds, e) {

  let buttons = document.querySelector('#option');
  let displayResults = document.createElement('div');
  buttons.appendChild(displayResults);

  let round = document.createElement('p');
  let result = document.createElement('p');
  round.textContent = ('Round ' + counter + ': ' + playRound(playerSelection(e), computerSelection()));
  displayResults.appendChild(round);
  result.textContent = ('Round ' + counter + ': ' + 'Player: ' + playerPoints + ', Computer: ' + computerPoints);
  displayResults.appendChild(result);

  if (rounds <= counter) {
    printWinner(displayResults);
  }

  counter++;

}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (counter <= 5) {
      game(5, e);
    }
  });
});

let playerPoints = 0;
let computerPoints = 0;
let counter = 1;