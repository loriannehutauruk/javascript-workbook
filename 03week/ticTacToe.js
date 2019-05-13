'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//checks for horizontal win
function horizontalWin(row) {
  if (board[0].every(cell => cell === 'X') || board[1].every(cell => cell === 'X') || board[2](cell => cell === 'X'))
  return true;

return false;
  
}

//checks for vertical win
function verticalWin() {
  if (board[0][0]=== 'X' && board[1][1] === 'X' && board [2][1] === 'X') {
   return true;
  }
   else if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X' ){
    return true;
  }
  else if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X' ){
    return true;
  }
  else{
    return false;
  }
}

//checks for diagonal win
function diagonalWin() {
  if (board[0][0]=== 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
   return true;
  }
  else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X' ) {
    return true;
  }
  else {
  return false;
  }
}

//checks if there is a winner calling all win function scenarios and returning true of one of the three scenarios is true
function checkForWin() {
  if (diagonalWin() === true || verticalWin() === true || horizontalWin() === true){
    return true;
  }
  else {
  return false;
  }
}
//function to print markers and switch turns
function ticTacToe(row, column) {
  board[row][colum] = playerTurn;
  if (playerTurn = 'X') {
    playerTurn = 'O';
  }
  else {
    playerTurn = 'X';
  }
// call checkforwin function to break switching turns if there has been a win
  checkForWin()

if (checkForWin() === true) {
  break;
}
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
