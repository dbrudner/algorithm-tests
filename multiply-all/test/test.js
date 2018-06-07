const multiplyAll = require ('../multiply-all');
const assert = require('assert');

describe('multiplyAll', function() {
    it('should multiply all numbers in an array', function(){
      assert.equal(multiplyAll([1, 1]), 1);
    });

    it('should multiply all numbers in an array', function(){
      assert.equal(multiplyAll([1, 0]), 0);
    });

    it('should multiply all numbers in an array', function(){
      assert.equal(multiplyAll([3, 4, 12, 34, 53, 12, 5, 6, 7, 1]), 653909760);
    });
    
    it('should multiply all numbers in an array', function(){
      assert.equal(multiplyAll([3, 3, 3, 3, 3, 3]), 729);
    });
    
    it('should multiply all numbers in an array', function(){
      assert.equal(multiplyAll([5, 4, 2324, 2, 33, 222, 0]), 0);
    });
});