function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function roundPlay(playerChoice, computerChoice) {
  if (computerChoice === "Rock") {
    if (playerChoice === "rock") {
      gameState.textContent = "Tie!";
    } else if (playerChoice === "paper") {
      playerScore++;
      gameState.textContent = "You win! Paper beats rock";
    } else if (playerChoice === "scissors") {
      cpuScore++;
      gameState.textContent = "You lose! Rock beats Scissors";
    }
  }
  if (computerChoice === "Paper") {
    if (playerChoice === "rock") {
      cpuScore++;
      gameState.textContent = "You lose! Paper beats rock";
    } else if (playerChoice === "paper") {
      gameState.textContent = "Tie!";
    } else if (playerChoice === "scissors") {
      playerScore++;
      gameState.textContent = "You win! Scissors beat Paper";
    }
  }
  if (computerChoice === "Scissors") {
    if (playerChoice === "rock") {
      playerScore++;
      gameState.textContent = "You win! Rock beats Scissors";
    } else if (playerChoice === "paper") {
      cpuScore++;
      gameState.textContent = "You lose! Scissors beat Paper";
    } else if (playerChoice === "scissors") {
      gameState.textContent = "Tie!";
    }
  }
  playerScoreText.textContent = `Player Score: ${playerScore}`;
  cpuScoreText.textContent = `CPU Score: ${cpuScore}`;
  
  if (playerScore >= 5 || cpuScore >= 5) {
    let winner;
    if (playerScore >= 5) {
      winner = createFadingText('p', 'You win!');;
    }
    if (cpuScore >= 5) {
      winner = createFadingText('p', 'CPU wins!');
    }
    winner.id = 'winner';
    gameArea.appendChild(winner);
    rock.removeEventListener("click", playRock);
    paper.removeEventListener("click", playPaper);
    scissors.removeEventListener("click", playScissors);
  }
}

function createFadingText(elementType, text) {
  const fadingElement = document.createElement(elementType);
  fadingElement.classList.add("fade-in-element");
  fadingElement.textContent = text;
  return fadingElement;
}

function createFadingImage(source) {
  const fadingImage = document.createElement("img");
  fadingImage.src = source;
  fadingImage.classList.add("fade-in-element");
  return fadingImage;
}

function playRock() {
  roundPlay("rock", computerPlay());
}

function playPaper() {
  roundPlay("paper", computerPlay());
}

function playScissors() {
  roundPlay("scissors", computerPlay());
}

let playerScore = 0;
let cpuScore = 0;
const gameState = createFadingText("p", "Waiting for input...");
const playerScoreText = createFadingText("p", "Player Score: 0");
const cpuScoreText = createFadingText("p", "CPU Score: 0");
const rock = createFadingImage("images/rock.png");
rock.classList.add("choice");
rock.alt = "rock";
const paper = createFadingImage("images/paper.png");
paper.classList.add("choice");
paper.alt = "paper";
const scissors = createFadingImage("images/scissors.jpg");
scissors.classList.add("choice");
scissors.alt = "scissors";

const intro = document.querySelector("#GameDescription");

const gameArea = document.querySelector("#GameArea");

const choices = document.querySelector("#Choices");

intro.appendChild(createFadingText("p", "ROCK"));

setTimeout(() => {
  intro.appendChild(createFadingText("p", "PAPER"));
}, 1000);

setTimeout(() => {
  intro.appendChild(createFadingText("p", "SCISSORS"));
}, 2000);

setTimeout(() => {
  intro.appendChild(createFadingText("p", "Make your choice:"));
  choices.appendChild(rock);
  choices.appendChild(paper);
  choices.appendChild(scissors);
  gameArea.appendChild(playerScoreText);
  gameArea.appendChild(cpuScoreText);
  gameArea.appendChild(gameState);
  rock.addEventListener("click", playRock);
  paper.addEventListener("click", playPaper);
  scissors.addEventListener("click", playScissors);
}, 3000);
