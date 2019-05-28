'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//generate hint needs to check each letter one by one for correct position. then it wil check each letter to see if  a letter of the solution exists somewhere in the guess. After finding they are in a good position, you replace by space or anything else. to compare strings, the easiest way is to transform the string to an array. so transform the guess to an array and compare position by position. 

//check if any character in the guess array exists anywhere in the solution array. if they are the same then we increment by one. Try to run foreach with guess aray.
function generateHint(guess) {
  // your code here
  let correctLetterLocations = 0, correctLetters = 0;
  let solutionArray = solution.split('');
  let guessArray = guess.split('');

  //searches if the letter is in the same/right position
  guessArray.forEach((item, index) =>
  {
    if(item === solutionArray[index]){
      correctLetterLocations+=1;
      solutionArray[index] = '';
      guessArray[index] = '';
    }
  });

//use indexOf for second loop to check if a letter exists in the array. If it does, replace with space.
  guessArray.forEach((item, index) =>
    { if (item !== '') {
    let findIndex = solutionArray.indexOf(item);
    if (findIndex > -1) {
      correctLetters+=1;
        solutionArray[findIndex] = '';
        guessArray[index] = '';
    }
    }
  });
  return `${correctLetterLocations}-${correctLetters}`;
}

//function mastermind will return true or false. board needs to change within mastermind. when i guess i increment board by one. if the solution matches the guess, then you return the value. if the guess is incorrect, then create a string that contains the guess and the score and then push this string. So, total, update board, then check for win. then check the board to see if the length is 10. If its 10 then we need to restart the game.

function mastermind(guess, solution) {
  solution = 'abcd'; // Comment this out to generate a random solution
  let hint = generateHint(guess);
  board[board.length]=`$(guess) $(hint)`;

  //check if guess is equal to solution after converting to string.
  let solutionArray1 = solution.split('');
  console.log(solutionArray1)
  let guessArray1 = guess.split('');
  console.log(guessArray1)

  return arraysMatch(solutionArray1, guessArray1);
}

var arraysMatch = function (solutionArray, guessArray) {

	// Check if the arrays are the same length
	if (solutionArray.length !== guessArray.length) 
  return "Try again";

	// Check if all items exist and are in the same order
	for (var i = 0; i < solutionArray.length; i++) {
		if (solutionArray[i] !== guessArray[i]) 
    return "Try again";
	}
 return 'You guessed it!'
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    let k = mastermind(guess);
    if ( k === 'You guessed it!' ){
      console.log(k)
      process.exit(0);
      }
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2'); //number on the left checks if the letter is in the good position, and the second number checks if the letters exist.
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
