var selection = [
  ["rock", "rocks", "グー", "roche"], //rock:0
  ["paper", "papers", "パー", "papier"], //paper: 1
  ["scissor", "scissors", "チョキ", "ciseaux", "scisor"], //scissor:2
];

var resultMsgArray =[
  "Rock on! It's a draw","Save the trees! It's a draw","Don'run with Scissors! It's a draw",
  "Computers are just rocks anyways. You Lose!", "Don't feel to cut up about it. You Lose!", "Don't get bent. You Lose!",
  "Rock and Roll Baby. You Win!","Trees>Rocks! You Win!","Confetti! You Win!"
];

var resultArray = [
  [0.0, 0.3, 1.6],
  [1.7, 0.1, 0.4],
  [0.5, 1.8, 0.2],
];

//                             RESULT ARRAY
//      **win = 1.1, draw = 0.2, lose =0, user(rows) v computer (columns)**
//      **integral= value added to win count, decimal=resultMsgIndex**
//
//                 <------------(Computer)------------>
//              ʌ  +---------+------+-------+---------+
//              |  |         | rock | paper | scissor |
//              |  +---------+------+-------+---------+
//              |  | rock    | 0.0  | 0.3   | 1.6     |
//       (User) |  +---------+------+-------+---------+
//              |  | paper   | 1.7  | 0.1   | 0.4     |
//              |  +---------+------+-------+---------+
//              |  | scissor | 0.5  | 1.8   | 0.2     |
//              V  +---------+------+-------+---------+

const invalidInputError = selection.length;

function validateThrow(s1: string): number {
  var validate = s1.toLowerCase().trim();
  for (var j = 0; j < selection.length; j++) {
    if (selection[j].indexOf(validate) !== -1) {
      return j;
    }
  }
  return invalidInputError;
}

function getResultIndex(n1: number): number {
  var s2 = n1.toString();
  s2 = s2.substr(s2.length - 1);
  return parseInt(s2);
}

function addDraw(n2: number): number {
  return (n2 >= 0 && n2 <=2) ? 1 : 0;
}

console.table(selection);
console.table(resultArray);

var win = 0;
var draw = 0;

for (var i = 1; i < 11 ; i++) {
  var userInput = prompt("Throw Rock, Paper or Scissors");
  var playerThrowIndex = validateThrow(userInput);
  var computerThrowIndex = Math.floor(Math.random() * 3);

  if (playerThrowIndex !== 3) {
    var result = resultArray[playerThrowIndex][computerThrowIndex];
    var resultMsgIndex = getResultIndex(result);
    win = win + Math.floor(result);
    draw = draw + addDraw(resultMsgIndex);
    alert(
      "Game " +
        (i - 1) +
        "\n" +
        "You threw: " +
        selection[playerThrowIndex][0] +
        "\n" +
        "Computer Threw: " +
        selection[computerThrowIndex][0] +
        "\n" +
        resultMsgArray[resultMsgIndex] +
        "\n" +
        "You're score is now: " +
        win
    );
  } else {
    alert("Please insert a vaild throw!");
    i = i - 1;
  }
}

alert(
  "Final Result: " +
    "\n" +
    "Games Played:" +
    (i - 1) +
    "\n" +
    "Games Won: " +
    win +
    "\n" +
    "Games Drawn: " +
    draw +
    "\n" +
    "Games Lost: " +
    (i - 1 - win - draw)
);
