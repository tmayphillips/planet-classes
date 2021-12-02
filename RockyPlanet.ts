import { Planet } from "./Planet";

export class RockyPlanet extends Planet {
    constructor(name:string, size:number, parentStar:string) {
        super(name, size, parentStar) 
    }
}