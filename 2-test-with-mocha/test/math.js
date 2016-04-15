var assert = require('assert');
var math = require('../math');

describe('square', function() {
    it('should return the square of given numbers', function() {
        assert.equal(math.square(2), 4);
        assert.equal(math.square(3), 9);
    });
});
