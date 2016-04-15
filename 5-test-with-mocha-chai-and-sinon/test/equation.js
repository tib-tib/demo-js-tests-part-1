var should = require('chai').should();
var sinon = require('sinon');

var equation = require('../equation');
var math = require('../math');

var stub;

describe('discriminant', function() {
    before(function() {
        stub = sinon.stub(math, 'square').returns(25);
    });

    after(function () {
        stub.restore();
    });

    it('should return the discriminant', function() {
        equation.discriminant(3, 4, 1).should.equal(13);
    });
});
