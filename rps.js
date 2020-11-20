var selection = [
    ["rock", "rocks", "グー", "roche"],
    ["paper", "papers", "パー", "papier"],
    ["scissor", "scissors", "チョキ", "ciseaux", "scisor"],
];
var resultMsgArray = ["You Lose :(", "You Win :D", "It's a Draw :/"];
var resultArray = [
    [0.2, 0, 1],
    [1, 0.2, 0],
    [0, 1, 0.2],
];
//                             RESULT ARRAY
//      **win = 1.1, draw = 0.2, lose =0, user(rows) v computer (columns)**
//      **integral= value added to win count, decimal=resultMsgIndex**
//
//                 <------------(Computer)------------>
//              ʌ  +---------+------+-------+---------+
//              |  |         | rock | paper | scissor |
//              |  +---------+------+-------+---------+
//              |  | rock    | 0.2  | 0     | 1       |
//       (User) |  +---------+------+-------+---------+
//              |  | paper   | 1    | 0.2   | 0       |
//              |  +---------+------+-------+---------+
//              |  | scissor | 0    | 1     | 0.2     |
//              V  +---------+------+-------+---------+
var invalidInputError = selection.length;
function validateThrow(s1) {
    var validate = s1.toLowerCase().trim();
    for (var j = 0; j < selection.length; j++) {
        if (selection[j].indexOf(validate) !== -1) {
            return j;
        }
    }
    return invalidInputError;
}
function getResultIndex(n1) {
    var s2 = n1.toString();
    s2 = s2.substr(s2.length - 1);
    return parseInt(s2);
}
function addDraw(n2) {
    return n2 === 2 ? 1 : 0;
}
console.table(selection);
console.table(resultArray);
var win = 0;
var draw = 0;
for (var i = 1; i < 11; i++) {
    var userInput = prompt("Throw Rock, Paper or Scissors");
    var playerThrowIndex = validateThrow(userInput);
    var computerThrowIndex = Math.floor(Math.random() * 3);
    if (playerThrowIndex !== 3) {
        var result = resultArray[playerThrowIndex][computerThrowIndex];
        var resultMsgIndex = getResultIndex(result);
        win = win + Math.floor(result);
        draw = draw + addDraw(resultMsgIndex);
        alert("Game " +
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
            win);
    }
    else {
        alert("Please insert a vaild throw!");
        i = i - 1;
    }
}
alert("Final Result: " +
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
    (i - 1 - win - draw));
