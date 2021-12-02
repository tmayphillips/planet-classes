"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceGiant = void 0;
const Planet_1 = require("./Planet");
class IceGiant extends Planet_1.Planet {
    constructor(name, size, parentStar) {
        super(name, size, parentStar);
    }
}
exports.IceGiant = IceGiant;
