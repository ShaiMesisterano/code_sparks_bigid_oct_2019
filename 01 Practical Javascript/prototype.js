Array.prototype.mySliceFunction = Array.prototype.mySliceFunction || function (start, end) {
    let arrSliced = [];
    for (let i=start; i<=end;i++){
        arrSliced.push(this[i]);
    }
    return arrSliced;
};

const numbers = [1,5,7,8];
console.log(numbers.mySliceFunction(2,3));