Array.prototype.min = function () { 
    return this.reduce(function(min, curr) {return min < curr ? min : curr }, this[0]) 
}

Array.prototype.max = function () { 
    return this.reduce(function(max, curr) {return max > curr ? max : curr }, this[0]) 
}

var arr = [1, 22, 50, 7];

var minimum = arr.min();
var maximum = arr.max();

console.log("Minimum:", minimum, "Maximum:", maximum);
