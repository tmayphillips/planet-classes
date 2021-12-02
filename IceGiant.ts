import { Planet } from "./Planet";

export class IceGiant extends Planet {
    constructor(name:string, size:number, parentStar:string) {
        super(name, size, parentStar) 
    }
}