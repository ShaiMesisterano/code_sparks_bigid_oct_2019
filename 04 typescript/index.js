"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var calculator_1 = __importDefault(require("./calculator"));
var c = new calculator_1["default"]();
var result = c.sum({ a: 2, b: 3, c: 4 });
console.log(result);
