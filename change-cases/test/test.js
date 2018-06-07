const assert = require('chai').assert
const changeCases = require('../change-cases');
describe('Change Cases', function() {
    
    it('should return an array with the sum of every two indeces', function() {
        assert.equal("X", changeCases("x"));
    });

    it('should return an array with the sum of every two indeces', function() {
        assert.equal("BlAH HiHiHi zZ", changeCases("bLah hIhIhI Zz"));
    });

    it('should return an array with the sum of every two indeces', function() {
        assert.equal("....zzz", changeCases("....ZZZ"));
    });

    it('should return an array with the sum of every two indeces', function() {
        assert.equal("This is a NORMAL sentence.", changeCases("tHIS IS A normal SENTENCE."));
    });
});