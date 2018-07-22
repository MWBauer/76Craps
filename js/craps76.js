var WON = 0;
var LOST = 1;
var CONTINUE_ROLLING = 2;
var firstRoll = true;
var sumOfDice = 0;
var myPoint = 0;
var gameStatus = CONTINUE_ROLLING;

function play() {
  var point = document.getElementById("pointfield");
  var statusDiv = document.getElementById("status");
  if (firstRoll) {
    sumOfDice = rollDice();
    switch (sumOfDice) {
      case 7:
      case 11:
        gameStatus = WON;
        point.value = "";
        break;
      case 2:
      case 3:
      case 12:
        gameStatus = LOST;
        point.value = "";
        break;
      default:
        gameStatus = CONTINUE_ROLLING;
        myPoint = sumOfDice;
        point.value = myPoint;
        firstRoll = false;
    }
  }
else {
  sumOfDice = rollDice();
  if (sumOfDice == myPoint)
    gameStatus = WON;
  else if (sumOfDice == 7)
    gameStatus = LOST;
  }
  if(gameStatus == CONTINUE_ROLLING)
    statusDiv.innerHTML = "Roll again";
  else {
    if (gameStatus == WON)
      statusDiv.innerHTML = "Player wins." + "Click Roll Dice to play again.";
    else
       statusDiv.innerHTML = "Player loses." + "Click Roll Dice to play again.";
    firstRoll = true;
  }
}

function rollDice() {
  var die1;
  var die2;
  var workSum;
  die1 = Math.floor(1 + Math.random() * 6);
  die2 = Math.floor(1 + Math.random() * 6);
  workSum = die1 + die2;
  document.getElementById("die1field").value = die1;
  document.getElementById("die2field").value = die2;
  document.getElementById("sumfield").value = workSum;
  return workSum;
}