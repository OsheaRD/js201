// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors (player1, player2){


}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } // closing if tie clause!!!
      
    else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
         return 'Computer Won!';
      } else {
         return 'You won!';
     } 
    }
    
    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    } 
    else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won!';
      } else {
        return 'You won!';
        
      }
     }
    }