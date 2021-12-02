"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockyPlanet = void 0;
const Planet_1 = require("./Planet");
class RockyPlanet extends Planet_1.Planet {
    constructor(name, size, parentStar) {
        super(name, size, parentStar);
    }
}
exports.RockyPlanet = RockyPlanet;
