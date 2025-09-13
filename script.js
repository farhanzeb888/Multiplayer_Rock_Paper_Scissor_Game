// ROCK PAPER SCISSOR GAME

let playerChoices = { 1: null, 2: null };
    let player1Score = 0;
    let player2Score = 0;

    function makeChoice(player, choice) {
      playerChoices[player] = choice;
      document.getElementById(`choice${player}`).textContent = "Choice: " + choice;

      if (playerChoices[1] && playerChoices[2]) {
        checkWinner();
      }
    }

    function checkWinner() {
      const p1 = playerChoices[1];
      const p2 = playerChoices[2];
      let resultText = "";

      if (p1 === p2) {
        resultText = "It's a Draw!";
      } else if (
        (p1 === "rock" && p2 === "scissor") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissor" && p2 === "paper")
      ) {
        resultText = "Player 1 Wins!";
        player1Score++;
      } else {
        resultText = "Player 2 Wins!";
        player2Score++;
      }

      document.getElementById("result").textContent = resultText;
      document.getElementById("score1").textContent = "Score: " + player1Score;
      document.getElementById("score2").textContent = "Score: " + player2Score;

      // reset for next round
      playerChoices = { 1: null, 2: null };
      document.getElementById("choice1").textContent = "Choice: ?";
      document.getElementById("choice2").textContent = "Choice: ?";
    }