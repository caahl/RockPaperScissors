            function computerPlay(){
                // choose random number from 0 to 2
                index = Math.floor(Math.random() * 3)
                // create a list with options of plays
                plays = ["rock", "paper", "scissors"]
                // returns a random play
                return plays[index] 
            }
        
            function playRound(playerSelection, computerSelection){
                if (playerSelection === computerSelection){
                    return "It's a tie!"
                } 
                
                switch(true) {
                    case playerSelection == 'rock' && computerSelection === 'scissors':
                    case playerSelection == 'paper' && computerSelection == 'rock':
                    case playerSelection == 'scissors' && computerSelection == 'paper':
                        return `God bless! You won! ${playerSelection} beats ${computerSelection}`;
                        break;
        
                    default:
                        return `Fatality! You lose! ${computerSelection} beats ${playerSelection}`;
                        break;
                }
            }
        
            function game(){
                // game starts with player with 0 points
                playerScore = 0
                
                // the game lasts 5 rounds
                for (let i = 0; i < 5; i++){
                    playerSelection = prompt("Choose rock, paper or scissors")
                    computerSelection = computerPlay()
        
                    res = playRound(playerSelection, computerSelection)
                    console.log(res)
        
                    playerScore += res[0] == 'Y' ? 1 : res[0] == 'D' ? 0 : -1         
                }
        
                if (playerScore > 0){
                    console.log('You won the game')
                } else if (playerScore == 0){
                    console.log('It was a tie')
                } else {
                    console.log('You lost the game')
                }
            }