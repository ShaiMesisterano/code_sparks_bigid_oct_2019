Array.prototype.max = function () {
    let max = undefined;
    for (let i = 0; i < this.length; i++) {
        if (!max || max < this[i])
            max = this[i];
    }
    return max;
};


var arr = [1, 22, 50, 7];
var maximum = arr.max();
console.log("maximum", maximum);