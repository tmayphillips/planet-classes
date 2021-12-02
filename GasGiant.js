"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasGiant = void 0;
const Planet_1 = require("./Planet");
class GasGiant extends Planet_1.Planet {
    constructor(name, size, parentStar) {
        super(name, size, parentStar);
    }
}
exports.GasGiant = GasGiant;
