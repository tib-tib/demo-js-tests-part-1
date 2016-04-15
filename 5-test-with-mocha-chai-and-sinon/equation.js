var math = require('./math');

module.exports = {
  discriminant: function(a, b, c) {
    return math.square(b) - 4*a*c;
  }
};
