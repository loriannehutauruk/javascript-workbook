'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece (startStack, endStack) {
  // Your code here. use method that pops the last item of an array and pushes it to another place. 
let elmt = stacks[startStack].pop();
stacks[endStack].push(elmt);
}

function isLegal (startStack, endStack) {
  //can only push if the existing value in the array is greater than the value coming in or if the array is empty. first check is empty.
  if (stacks[startStack].length == 0 && stacks[endStack].length == 0) {
    return false;
  }
  let elmt1 = stacks[startStack][stacks[startStack].length-1];

  if (elmt1 > 0 && stacks[endStack].length == 0){
    return true;
  }

  let elmt2 = stacks[endStack][stacks[endStack].length-1];
  if (elmt2 > elmt1) 
    return true;
  return false;
  }
  

function checkForWin (stacks) {
  // Your code here

if (stacks.b.includes(4,0) && stacks.b.includes(3,1) && stacks.b.includes(2,2) && stacks.b.includes(1,3)) {
  return true;
}

}

function towersOfHanoi(startStack, endStack) {
  // Your code here
movePiece (startStack, endStack)
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
