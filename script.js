            function computerPlay(){
                index = Math.floor(Math.random() * 3)
                plays = ["rock", "paper", "scissors"]
                return plays[index] 
            }
        
            function playRound(playerSelection, computerSelection){
                if (playerSelection === computerSelection){
                    return 0;
                } 
                
                switch(true) {
                    case playerSelection == 'rock' && computerSelection === 'scissors':
                    case playerSelection == 'paper' && computerSelection == 'rock':
                    case playerSelection == 'scissors' && computerSelection == 'paper':
                        return 1;
        
                    default:
                        return -1;
                }
            }

            function reset() {
                playerScore = 0;
                computerScore = 0;
            }
        
            function game(){
                playerScore = 0;
                computerScore = 0;

                const buttons = document.querySelectorAll('button');

                buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    
                    playerSelection = button.id;
                    computerSelection = computerPlay()
                    
                    res = playRound(playerSelection, computerSelection)
                    res == 1 ? playerScore++ : res == -1 ? computerScore++ : null;


                    const resultText = document.querySelector('#resultText');
                    resultText.textContent = res == 1 ? `You won, ${playerSelection} beats ${computerSelection}` : res == -1 ? `You lost, ${computerSelection} beats ${playerSelection}` : "It's a tie!";
                    
                    if(computerScore >= 5) {
                        alert("You lost the game!");
                        reset();
                        
                    } else if(playerScore >= 5) {
                        alert("Congratulations! You won the game!");
                        reset();
                    }

                    const score = document.querySelector('#score');
                    score.textContent = playerScore + ' - ' + computerScore;

                    });
                });
            }

            game()