export class Planet {
    public static listOfPlanets:Planet[] = []
    public static inventoryCount:number = 2000000000
    public static purchasedPlanets:string[] = []

    name:string
    size:number
    parentStar:string

    constructor(name:string, size:number, parentStar:string) { 
        this.name = name
        this.size = size
        this.parentStar = parentStar
    }

    //  planet display function - protected method
        // event listener - submit btn

        // <div id = 'mercury'>
        //     <img src='mercury.jpg' />
        //     <h2 class='planet-name'>Mercury</h2>
        //     <h3 class='planet-type'>Rocky</h3>
        //     <p>Buy Mercury. It's great!</p>
        // </div>
}