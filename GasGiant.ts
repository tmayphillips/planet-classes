import { Planet } from "./Planet";


export class GasGiant extends Planet { // inheritance
    constructor(name:string, size:number, parentStar:string) {
        super(name, size, parentStar) 
    }
    // receive a sample gas mixture - private function
}