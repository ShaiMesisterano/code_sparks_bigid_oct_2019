interface ISumParameters {
    a: number;
    b: number;
}

interface ICalc {
    // sum: (a: number,b: number) => number;
    sum: (obj: ISumParameters) => number;
    sub: (a: number,b: number) => number;
    mul: (a: number,b: number) => number;
    div: (a: number,b: number) => number;
}

export default class Calc implements ICalc {
    // public sum(a: number,b: number): number {
    public sum(obj: ISumParameters): number {
        return obj.a + obj.b;
    }
    public sub(a: number,b: number):number {
        return a + b;
    }
    public mul(a: number,b: number):number {
        return a * b;
    }
    public div(a: number,b: number):number {
        if (this.isZero(b)) throw new Error('Cannot devide by zero');
        return a / b;
    }
    private isZero(a: number): boolean {
        return a === 0;
    }
}
