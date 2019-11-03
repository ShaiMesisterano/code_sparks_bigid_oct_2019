"use strict";
var ClothsSize;
(function (ClothsSize) {
    ClothsSize["xs"] = "1";
    ClothsSize["xl"] = "2";
    ClothsSize["m"] = "3";
})(ClothsSize || (ClothsSize = {}));
var Person = /** @class */ (function () {
    function Person() {
        this.shirtSize = ClothsSize.xs;
    }
    Person.prototype.printShirtSize = function () {
        console.log(this.shirtSize);
    };
    return Person;
}());
var dvir = new Person();
dvir.shirtSize = ClothsSize.xl;
dvir.printShirtSize();
