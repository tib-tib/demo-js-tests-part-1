var should = require('chai').should();
var math = require('../math');

describe('square', function() {
    it('should return the square of given numbers', function() {
        math.square(2).should.equal(4);
        math.square(3).should.equal(9);
    });
});
