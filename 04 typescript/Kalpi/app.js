"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var parties_1 = require("./data/parties");
var port = 5000;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.get('/api/parties', function (request, response) { return response.json(parties_1.parties); });
for (var i = 0; i < 5000000000; i++) { }
app.listen(port, function () { return console.log("Server is running on port " + port); });
