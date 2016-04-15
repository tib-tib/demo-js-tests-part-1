var should = require('chai').should();
var equation = require('../equation');

describe('discriminant', function() {
    it('should return the discriminant of given numbers', function() {
        equation.discriminant(3, 2, -5).should.equal(64);
        equation.discriminant(3, 11, 7).should.equal(37);
    });
});
