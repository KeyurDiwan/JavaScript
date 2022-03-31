let winnerCondition = [];

let sizeOfSqure = 4;    // enter size of tic-toi

let winnerRow = []


// creating N*N matrix and getting winner row pos
for(let i = 0; i < sizeOfSqure; i++) {
  let arr = [];
  
  for(let j = i * sizeOfSqure; j <  (i * sizeOfSqure ) + sizeOfSqure; j++) {
   
    arr.push(j);
  
  }
  winnerRow.push(arr)
}

winnerCondition = winnerRow;

// getting winner col...
const arrayColumn = (arr, n) => arr.map(x => x[n]);
let winnerCol = []
for(let i = 0; i < sizeOfSqure; i++) {
 
  winnerCol.push(arrayColumn(winnerRow, i));
  
}
// adding col in winnerCond arr
for(var i = 0; i < winnerCol.length; i++) {
  winnerCondition.push(winnerCol[i])
}



// getting first dia-gonal 
let arr3 = [];
for(let i = 0; i < sizeOfSqure; i++) {
  
  for(let j = i; j < sizeOfSqure; j++) {

    if(i === j) {
      arr3.push(winnerRow[i][j])
    }
  }
}

// adding first  diagonal val in winner cond arr
winnerCondition.push(arr3)

// getting second diagonal 
let arr4 = []
for(let i = 0; i < sizeOfSqure; i++) {
  
arr4.push(winnerRow[sizeOfSqure-1-i][i])
  
}

// adding second  diagonal val in winner cond arr
winnerCondition.push(arr4)

console.log(winnerCondition);





//  winnerCondition = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [2,4,6],
//   [0,4,8],
 
// ];

//Square Initialization with empty values
var squares = Array(sizeOfSqure * sizeOfSqure).fill('');


//Squares Html variable
var squareHtml  = '<div class="board-row">';
var xIsNext = true;
var winner  = false;
// Render squares
for(let i=0; i<squares.length;i++){
  if(i % sizeOfSqure === 0 && i > 0){
    squareHtml += '</div><div class="board-row">';
    squareHtml += buildSquare(i);
  }else{
    squareHtml += buildSquare(i);
  }
}
squareHtml += '</div>';
document.getElementById('board').innerHTML = squareHtml;
/*
 * Render square 

 */
function buildSquare(j){
  return '<button class="square" onClick="handleClick('+j+')" id="sq_'+j+'">'+squares[j]+'</button>';
}

/*
 * Square box click handler

 */
function handleClick(index){
  //if the winner is there or square already marked : return
  if(winner || squares[index]){
    return;
  }
  squares[index] = xIsNext ? 'X' : 'O';
  const sqs = squares.slice();
  var elementId = "sq_"+index;
  document.getElementById(elementId).innerHTML = xIsNext ? 'X' : 'O';
  xIsNext = xIsNext ? false : true;
  document.getElementById('status').innerHTML  = xIsNext ? 'X' : 'O';
  calculateWinner(sqs);
}
/*

 * Calculate the winner by passing marked square

 */
function calculateWinner(sqs){
  for(let i=0;i<winnerCondition.length;i++){
    // console.log("sqs",sqs)
    const [p1,p2,p3,p4] = winnerCondition[i];
   
    if(sqs[p1] && sqs[p1] === sqs[p2] && sqs[p1] === sqs[p3] && sqs[p1] === sqs[p4]){
      winner = sqs[p1];
      alert(`${winner} is winner`);
      return winner;
    }
  }
  //Get marked square 
  var filtered = sqs.filter(function(e){
    return e != '';
  });
  //Check for the game draw
  if(filtered.length === sizeOfSqure * sizeOfSqure && !winner){
   
    alert("Match Draw");
  
  }
  return false;
}



