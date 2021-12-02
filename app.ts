class Planet {
    public static listOfPlanets:Planet[] = []
    public static inventoryCount: number = 2000000000
    public static purchasedPlanets = []

    name:string

    constructor(name:string) { 
        this.name = name
    }

    // general info
        // name
        // size
        // parent star
    
    // purchase function - protected method

        
        // private variables
        // private _planetName:string
        

        // Planet.inventory--

    //  planet display function - protected method
        // event listener - submit btn

        // <div id = 'mercury'>
        //     <img src='mercury.jpg' />
        //     <h2 class='planet-name'>Mercury</h2>
        //     <h3 class='planet-type'>Rocky</h3>
        //     <p>Buy Mercury. It's great!</p>
        // </div>
}
    
class GasGiant extends Planet { // inheritance
    // receive a sample gas mixture - private function
}

class IceGiant extends Planet {

}

class RockyPlanet extends Planet {
    constructor(name:string) {
        super(name) 
    }
}
    
class Person {
    // private _firstName:string
    // private _lastName:string
}

function displayInventoryForm() {
    // <label for="planet-name">Planet Name:</label>
    // <input type="text" id="planet-name" name="planet-name"><br>
    // <select name="planet-type" id="planet-types">
        // <option value="rocky">Rocky Planet</option>
        // <option value="gas">Gas Giant</option>
        // <option value="ice">Ice Giant</option>
    // </select>

    // add additional sections based on dropdown

    // submit and call getInputValues()

}

function getInputValues() {
    // get input values
    // check if name is already taken
    // create new Planet based on class
}
    

function createNewPlanet (name:string, type:string): void {
    let newPlanet:Planet

    if (type === 'rocky') {
        newPlanet = new RockyPlanet(name)
        Planet.listOfPlanets.push(newPlanet)
    }
    if (type === 'gas') {
        newPlanet = new GasGiant(name)
        Planet.listOfPlanets.push(newPlanet)
    }
    if (type === 'ice') {
        newPlanet = new IceGiant(name)
        Planet.listOfPlanets.push(newPlanet)
    }

    
} 


// let mercury = new Rocky 
// let venus = new Rocky
// let earth = new Rocky
// let mars = new Rocky
// let jupiter = new GasGiant
// let saturn = new GasGiant
// let uranus = new IceGiant
// let neptune = new IceGiant



