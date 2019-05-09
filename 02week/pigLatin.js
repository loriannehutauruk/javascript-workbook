'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin (word) {
  word = word.toLowerCase().trim();
    if (isVowel(word.charAt(0))) {
      return word + "yay";
    } 
    else {
      //transform string to an array and then
      while (!isVowel(word.charAt(0)));
      i++;
  
      return word;
    }
  
    function isVowel (word) {
    if  ((word.charAt(0) === 'a') || (word.charAt(0) === 'e') || (word.charAt(0) === 'i') || (word.charAt(0) === 'o') || (word.charAt(0) === 'u')) {
      return true;
    }
    else {
      return false;
    }
    }
  }
  
  if (index > 0) {
    word = word.slice(index) + word.substring(0, index) + "ay";
  } 
  else {
    word = word.slice(index) + word.substring(0, 1) + "yay";
  }
  return word.toLowerCase();
}
console.log(pigLatin("car"));
console.log(pigLatin("dog"));
console.log(pigLatin("create"));
console.log(pigLatin("valley"));
console.log(pigLatin("egg"));
console.log(pigLatin("emmission"));
console.log(pigLatin("HeLlo"));
console.log(pigLatin("RoCkEt"));




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
