'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  const vowel = "aeiou";
  let match = -1;
  let index = -1;
  // find index of first vowel
  for (let x = 0; x < word.length && match < 0; x++) {
    match = vowel.indexOf(word.charAt(x));
   // console.log(match)
    if (match >= 0) {
      index = x;
     // console.log(index)
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
