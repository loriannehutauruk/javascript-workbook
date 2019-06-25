'use strict';

let assert = require('assert');

var _=require('lodash');
//chunk
console.log(_.chunk(['a','b','c','d'],2));

//reverse
console.log(_.reverse(['a','b','c','d']));

//without
console.log(_.without(['a','b','c','d'],'a', 'b'));

//shuffle
console.log(_.shuffle(['a','b','c','d']));

//indexof
console.log(_.indexOf(['a','b','c','d'], 'b'));

//tests
if (typeof describe === 'function'){
    describe('reverse', function(){
    it('will reverse array', function(){
    
    assert.deepEqual(_.reverse(['a','b','c','d']), ['d','c','b','a']);
  
    });
    
    });
    }