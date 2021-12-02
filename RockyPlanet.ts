import Planet from "./Planet.js";

export default class RockyPlanet extends Planet {
    constructor(name:string, size:number, parentStar:string) {
        super(name, size, parentStar) 
    }
}