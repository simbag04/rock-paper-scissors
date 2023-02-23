
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

let playerScore = 0;
let computerScore = 0;

function updateResults(winner)
{
    let object = document.querySelector(".current-results");
    let output = document.querySelector(".current-game");
    if (winner == 'player')
    {
        playerScore++;
        output.style.color = 'green';
        document.querySelector(".player-score").textContent = playerScore;
    }
    else if (winner == 'computer')
    {
        computerScore++;
        output.style.color = 'red';
        document.querySelector(".computer-score").textContent = computerScore;
    }
    else output.style.color = 'black';

    // winner has been found
    if (playerScore == 5)
    {
        document.querySelector(".winner").textContent = "You win!";
        document.querySelector(".reset").style.display = "block";
    }
    else if (computerScore == 5)
    {
        document.querySelector(".winner").textContent = "You lose!";
        document.querySelector(".reset").style.display = "block";
    }
}


function reset()
{
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".current-game").textContent = "";
    document.querySelector(".current-results").textContent = "";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".computer-score").textContent = computerScore;
    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice) => {
        choice.textContent = "";
    })
    document.querySelector(".reset").style.display = 'none';
}

let resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', () => {
    reset();
})


// BUTTON EVENT LISTENERS
let buttons = document.querySelectorAll(".selection");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5)
        {
            let compChoice = getComputerChoice();
            let result = playGame(button.id, compChoice);
            document.querySelector(".player-choice").textContent = button.id.toUpperCase();
            document.querySelector(".computer-choice").textContent = compChoice.toUpperCase();
            updateResults(result);
        }
    })
})