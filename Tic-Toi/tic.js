let sizeOfSqure = 3; // enter size of tic-toi
let winnerRow = [];
let winnerCol = [];
let winnerDiagonal = [];

//  getting winner row pos
for (let i = 0; i < sizeOfSqure; i++) {
  let arr = [];
  for (let j = i * sizeOfSqure; j < i * sizeOfSqure + sizeOfSqure; j++) {
    arr.push(j);
  }
  winnerRow.push(arr);
}
// getting winner col pos
const arrayColumn = (arr, n) => arr.map((x) => x[n]);
for (let i = 0; i < sizeOfSqure; i++) {
  winnerCol.push(arrayColumn(winnerRow, i));
}
// getting  dia-gonal pos
let arr3 = [];
let arr4 = [];
for (let i = 0; i < sizeOfSqure; i++) {
  for (let j = i; j < sizeOfSqure; j++) {
    if (i === j) {
      arr3.push(winnerRow[i][j]);
    }
  }
  arr4.push(winnerRow[sizeOfSqure - 1 - i][i]);
}
// adding   diagonal val in DiagonalArr
winnerDiagonal.push(arr3, arr4);

//Square Initialization with empty values
var squares = Array(sizeOfSqure * sizeOfSqure).fill("");
//Squares Html variable
var squareHtml = '<div class="board-row">';
var xIsNext = true;
var winner = false;
for (let i = 0; i < squares.length; i++) {
  // Render squares
  if (i % sizeOfSqure === 0 && i > 0) {
    squareHtml += '</div><div class="board-row">';
    squareHtml += buildSquare(i);
  } else {
    squareHtml += buildSquare(i);
  }
}
squareHtml += "</div>";
document.getElementById("board").innerHTML = squareHtml;
// Render square
function buildSquare(j) {
  return (
    '<button class="square" onClick="handleClick(' +
    j +
    ')" id="sq_' +
    j +
    '">' +
    squares[j] +
    "</button>"
  );
}

//  Square box click handler
function handleClick(index) {
  //if the winner is there or square already marked : return
  if (winner || squares[index]) {
    return;
  }
  squares[index] = xIsNext ? "X" : "O";
  const sqs = squares.slice();
  var elementId = "sq_" + index;
  document.getElementById(elementId).innerHTML = xIsNext ? "X" : "O";
  xIsNext = xIsNext ? false : true;
  document.getElementById("status").innerHTML = xIsNext ? "X" : "O";
  // check winner conditions 
  if (
    calculateWinner(sqs, winnerCol) ||
    calculateWinner(sqs, winnerRow) ||
    calculateWinner(sqs, winnerDiagonal)
  ) {
    alert(winner + " is Winner..!!");
  }

  if (!sqs.includes("")) {
    alert("Match is draw..!!");
  }
}

// Calculate the winner by passing marked square
function calculateWinner(sqs, winnerPos) {
  for (let i = 0; i < winnerPos.length; i++) {
    let flag = true;
    if (sqs[winnerPos[i][0]]) {
      for (let k = 0; k < sizeOfSqure; k++) {
        if (sqs[winnerPos[i][0]] === sqs[winnerPos[i][k]]) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        winner = sqs[winnerPos[i][0]];
        return winner;
      }
    }
  }
  return false;
}
