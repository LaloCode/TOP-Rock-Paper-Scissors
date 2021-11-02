function computerPlay() 
            {
                let choices = ["Rock", "Paper", "Scissors"]
                return choices[Math.floor(Math.random()*3)]
            }

            function roundPlay(playerChoice, computerChoice) 
            {
                playerChoice = playerChoice.toLowerCase()
                if (computerChoice === "Rock")
                {
                    if (playerChoice === "rock")
                    {
                        return "Tie!"
                    }
                    else if (playerChoice === "paper")
                    {
                        playerScore++
                        return "You win! Paper beats rock"
                    }
                    else if (playerChoice === "scissors")
                    {
                        computerScore++
                        return "You lose! Rock beats Scissors"
                    } else {
                        return "Not a valid choice!"
                    }
                }
                if (computerChoice === "Paper")
                {
                    if (playerChoice === "rock")
                    {
                        computerScore++
                        return "You lose! Paper beats rock"
                    }
                    else if (playerChoice === "paper")
                    {
                        return "Tie!"
                    }
                    else if (playerChoice === "scissors")
                    {
                        playerScore++
                        return "You win! Scissors beat Paper"
                    } else {
                        return "Not a valid choice!"
                    }
                }
                if (computerChoice === "Scissors")
                {
                    if (playerChoice === "rock")
                    {
                        playerScore++
                        return "You win! Rock beats Scissors"
                    }
                    else if (playerChoice === "paper")
                    {
                        computerScore++
                        return "You lose! Scissors beat Paper"
                    }
                    else if (playerChoice === "scissors")
                    {
                        return "Tie!"
                    } else {
                        return "Not a valid choice!"
                    }
                }
            }

            function game() {
                for (let i = 0; i < 5; i++)
                {
                    const message = roundPlay(prompt("Choose: Rock, Paper or Scissors"), computerPlay())
                    console.log(message)
                    if (message === "Not a valid choice!") {
                        --i
                    }
                }
            }

            let playerScore = 0
            let computerScore = 0
            game()
            console.log("Player score: " + playerScore)
            console.log("Computer score: " + computerScore)