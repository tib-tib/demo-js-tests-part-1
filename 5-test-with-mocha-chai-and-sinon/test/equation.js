var should = require('chai').should();
var sinon = require('sinon');

var equation = require('../equation');
var math = require('../math');

var stub;

describe('discriminant', function() {
    before(function() {
        stub = sinon.stub(math, 'square').returns(4);
    });

    after(function () {
        stub.restore();
    });

    it('should return the discriminant', function() {
        equation.discriminant(3, 2, -5).should.equal(64);
        equation.discriminant(3, 11, 7).should.equal(-80);
    });
});
