'use strict';

const assert = require('assert');

// for each element make a callback
function forEach(arr, callback) {
  // Your code here
  for(let i=0; i< arr.length; i++) {
    callback(arr[i]);
  }
}

// map returns a new array. . delcare an empty array outside the for lop. after the loop we return the new array. inside we push the new array.
function map(arr, callback) {
  // Your code here
  let x=[];
  for(let i=0; i< arr.length; i++) {
    x.push(callback(arr[i]));
  }
  return x;
}

// filer return an array on the condition of the callback passing. if the callback is true then i push the array of i. 
function filter(arr, callback) {
  // Your code here
  let x=[];
  for(let i=0; i< arr.length; i++) {
    if (callback(arr[i]))
    x.push(arr[i]);
  }
  return x;
}

// checks every element. if one of them is true, the function some will return true.
function some(arr, callback) {
  // Your code here
  for(let i=0; i< arr.length; i++) {
    if (callback(arr[i]))
     return true;
  }
  return false;
}

// checks every element. the function every will return true only if every element is true. Instead of checking if every element is true, it is easier to check for an element that is false.
function every(arr, callback) {
  // Your code here
  for(let i=0; i< arr.length; i++) {
    if (!callback(arr[i]))
     return false;
  }
  return true;
}

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
