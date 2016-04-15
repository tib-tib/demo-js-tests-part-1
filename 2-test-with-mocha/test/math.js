var assert = require('assert');
var math = require('../math');

describe('square', function() {
    it('should return the square of given numbers', function() {
        assert.equal(math.square(3), 9);
        assert.equal(math.square(287), 82369);
        assert.equal(math.square(-7), 49);
    });
});
