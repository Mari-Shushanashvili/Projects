// script.js
document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    const playerChoiceText = document.getElementById("player-choice");
    const computerChoiceText = document.getElementById("computer-choice");
    const gameResultText = document.getElementById("game-result");
  
    document.getElementById("rock").addEventListener("click", () => playGame("rock"));
    document.getElementById("paper").addEventListener("click", () => playGame("paper"));
    document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
  
    function playGame(playerChoice) {
      const computerChoice = generateComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
  
      playerChoiceText.textContent = `Your Choice: ${capitalize(playerChoice)}`;
      computerChoiceText.textContent = `Computer's Choice: ${capitalize(computerChoice)}`;
      gameResultText.textContent = `Result: ${result}`;
    }
  
    function generateComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length); // Random number between 0-2
      return choices[randomIndex];
    }
  
    function determineWinner(player, computer) {
      if (player === computer) {
        return "It's a Tie!";
      }
  
      switch (player) {
        case "rock":
          return computer === "scissors" ? "You Win!" : "You Lose!";
        case "paper":
          return computer === "rock" ? "You Win!" : "You Lose!";
        case "scissors":
          return computer === "paper" ? "You Win!" : "You Lose!";
        default:
          return "Invalid Choice!";
      }
    }
  
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  