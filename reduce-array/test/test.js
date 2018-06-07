const expect = require('chai').expect
const {reduc} = require('../reduc');

describe('Reduc', function() {
    
    it('should return an array with the sum of every two indeces', function() {
        expect(reduc([1,1])).to.eql([2], 'cmon brah');
    });

    it('should return an array with the sum of every two indeces', function() {
        expect(reduc([2,2, 2, 2])).to.eql([4, 4], 'cmon brah');
    });

    it('should return an array with the sum of every two indeces', function() {
        expect(reduc([5, 3, 11, 3, 76, 0])).to.eql([8, 14, 76], 'cmon brah');
    });

    it('should return an array with the sum of every two indeces', function() {
        expect(reduc([1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1 ,1 ,1,1])).to.eql([2,2,2,2,2,2,2], 'cmon brah');
    });
});