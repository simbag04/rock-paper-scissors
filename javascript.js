function getComputerChoice()
{
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) return "rock";
    else if (randNum == 1) return "paper";
    else return "scissors";

}

function playGame(playerChoice, computerChoice)
{
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice)
    {
        console.log("Tie!");
        return "tie";
    }
    else if (playerChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            console.log("You lose! Paper beats rock");
            return "computer";
        }
        else console.log("You win! Rock beats scissors");
        return "player";
    }

    else if (playerChoice === "paper")
    {
        if (computerChoice === "scissors")
        {
            console.log("You lose! Scissors beats paper");
            return "computer";
        }
        else console.log("You win! Paper beats rock");
        return "player";
    }

    else
    {
        if (computerChoice === "rock")
        {
            console.log("You lose! Rock beats scissors");
            return "computer";
        }
        else console.log("You win! Scissors beats paper");
        return "player";
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        // get user input
        let input = prompt("Choose rock, paper, or scissors:");

        // get computer choice
        let computerChoice = getComputerChoice();

        // get game result
        let result = playGame(input, computerChoice);

        // update scores
        if (result == "computer") computerScore++;
        else if (result == "player") playerScore++;

        console.log("Player picked: " + input + "\n");
        console.log("Computer picked: " + computerChoice + "\n");
        console.log("Player score: " + playerScore + "\n");
        console.log("Computer score: " + computerScore + "\n");


    }


    

}

game();