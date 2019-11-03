"use strict";
exports.__esModule = true;
var Calc = /** @class */ (function () {
    function Calc() {
    }
    // public sum(a: number,b: number): number {
    Calc.prototype.sum = function (obj) {
        return obj.a + obj.b;
    };
    Calc.prototype.sub = function (a, b) {
        return a + b;
    };
    Calc.prototype.mul = function (a, b) {
        return a * b;
    };
    Calc.prototype.div = function (a, b) {
        if (this.isZero(b))
            throw new Error('Cannot devide by zero');
        return a / b;
    };
    Calc.prototype.isZero = function (a) {
        return a === 0;
    };
    return Calc;
}());
exports["default"] = Calc;
