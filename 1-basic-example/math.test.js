var assert = require('assert');
var math = require('./math');

assert.equal(math.square(3), 9, 'square of 3 is 9');
assert.equal(math.square(287), 82369, 'square of 287 is 82369');
assert.equal(math.square(-7), 49, 'square of -7 is 49');
