
// CODE TO PLAY GAME
function getComputerChoice()
{
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) return "rock";
    else if (randNum == 1) return "paper";
    else return "scissors";

}

function playGame(playerChoice, computerChoice)
{
    let output = document.querySelector(".current-game");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice)
    {
        output.textContent = "Tie!";
        return "tie";
    }
    else if (playerChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            output.textContent = "You lose! Paper beats rock";
            return "computer";
        }
        else output.textContent = "You win! Rock beats scissors";
        return "player";
    }

    else if (playerChoice === "paper")
    {
        if (computerChoice === "scissors")
        {
            output.textContent = "You lose! Scissors beats paper";
            return "computer";
        }
        else output.textContent = "You win! Paper beats rock";
        return "player";
    }

    else
    {
        if (computerChoice === "rock")
        {
            output.textContent = "You lose! Rock beats scissors";
            return "computer";
        }
        else output.textContent = "You win! Scissors beats paper";
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

let playerScore = 0;
let computerScore = 0;

function updateResults(winner)
{
    if (winner == 'player')
    {
        playerScore++;
    }
    else if (winner == 'computer')
    {
        computerScore++;
    }
    document.querySelector(".current-results").textContent = "Computer: " + computerScore + " Player: " + playerScore;
    if (playerScore == 5)
    {
        document.querySelector(".winner").textContent = "You win!";
    }
    else if (computerScore == 5)
    {
        document.querySelector(".winner").textContent = "You lose!";
    }
}

// BUTTON EVENT LISTENERS
let buttons = document.querySelectorAll(".selection");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let compChoice = getComputerChoice();
        let result = playGame(button.id, compChoice);
        document.querySelector(".player-choice").textContent = button.id;
        document.querySelector(".computer-choice").textContent = compChoice;
        updateResults(result);
    })
})