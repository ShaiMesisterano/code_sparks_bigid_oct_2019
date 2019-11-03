// const { sum } = require('./calculator/Calc');
const Calc = require('./calculator/Calc');

// Calc.prototype.sum = function (a,b) {
//     return 42;
// };

// c.sum = function (a,b) {
//      return 42;
//  };

let c = new Calc();

// const result = c.sum(2,3);

const result = c.sum( {
    a: 2,
    b: 3
});

console.log(result);