var should = require('chai').should();
var equation = require('../equation');

describe('discriminant', function() {
    it('should return the discriminant of given numbers', function() {
        equation.discriminant(3, 4, 5).should.equal(-44);
        equation.discriminant(3, 12, 7).should.equal(60);
    });
});
