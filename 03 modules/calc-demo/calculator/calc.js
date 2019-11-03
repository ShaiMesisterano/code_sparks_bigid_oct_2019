class Calc {
    // sum(a,b) {
    //     return a + b
    // }
    sum({a = 0, b = 0} = {}) {
        // obj.a = (obj.a != null) || 0;
        // obj.b = obj.b || 0;

        // const { a, b } = obj;
        return a + b;
    }
    sub(a,b) {
        return a - b;
    }
    mul(a,b){
        return a * b;
    }
    div(a,b) {
        if (this.isZero(b)) throw new Error('Cannot devide by zero');
        return a / b;
    }
    isZero(a) {
        return a === 0;
    }
}

// const c = new Calc();

module.exports = Calc;