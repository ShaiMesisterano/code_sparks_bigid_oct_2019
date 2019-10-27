// let x = 123;
// let y = x;
//
// x = 456;
//
// console.log(y);

// Primitives
let bool = true; // boolean
let num = 123; // number
let str = "hello"; //string (let str='hello "sir", how are you?')
let und = undefined;
let empty = null;

// console.log(typeof num);
// console.log(typeof empty);
console.log(typeof und)

// Complex
// let arr = [1,2,3]; // array
// let arr2 = arr;
// arr.push(4);
// console.log(arr2);

let obj = {
    a: 1,
    b: 2,
    c: {
        num: 3
    }
};

function modifyObj(o, val) {
    // let _o = Object.assign({}, o); // clone
    // let _o = {...o}; // clone#2
    // let _o = JSON.parse(JSON.stringify(o));
    // _o.c = val;
    // o = val;
}

// modifyObj(obj, 999);
// console.log(obj.c);