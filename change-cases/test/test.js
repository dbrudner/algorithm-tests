const assert = require('chai').assert
const changeCases = require('../change-cases');
describe('Change Cases', function() {
    
    it('should flip letter casing', function() {
        assert.equal("X", changeCases("x"));
    });

    it('should flip letter casing', function() {
        assert.equal("BlAH HiHiHi zZ", changeCases("bLah hIhIhI Zz"));
    });

    it('should flip letter casing', function() {
        assert.equal("....zzz", changeCases("....ZZZ"));
    });

    it('should flip letter casing', function() {
        assert.equal("This is a NORMAL sentence.", changeCases("tHIS IS A normal SENTENCE."));
    });
});