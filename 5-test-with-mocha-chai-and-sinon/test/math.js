var should = require('chai').should();
var math = require('../math');

describe('square', function() {
    it('should return the square of given numbers', function() {
        math.square(3).should.equal(9);
        math.square(287).should.equal(82369);
        math.square(-7).should.equal(49);
    });
});
