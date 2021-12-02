const submitPasswordBtn = document.getElementById('submit-password-btn')
const planetListDiv = document.getElementById('planet-list')
const addPlanetDiv = document.getElementById('add-planet')
    
class Person {
    // private _firstName:string
    // private _lastName:string
}

function purchaseStar () { // protected method
    // private variables
    // private _planetName:string
    

    Planet.inventoryCount--
}

function displayInventoryForm() {
    addPlanetDiv.style.display = 'none'

    console.log(`Add password button pressed. Planet List: ${Planet.listOfPlanets}`)

    planetListDiv.innerHTML += `
        <label for="planet-name">Planet Name:</label>
        <input type="text" id="planet-name" name="planet-name"><br>
        <select name="planet-type" id="planet-type">
            <option>Select planet type</option>
            <option value="rocky">Rocky Planet</option>
            <option value="gas">Gas Giant</option>
            <option value="ice">Ice Giant</option>
        </select>
    `

    const typeSelect = document.getElementById('planet-type')
    console.log((<HTMLSelectElement>typeSelect).value)

    typeSelect.addEventListener('change', event => {
        if ((<HTMLSelectElement>typeSelect).value === 'gas') {
            planetListDiv.innerHTML += `
                <div id='gas-mixture' class='gas-mixtuer'>
                    <div>
                        <input type="checkbox" id="oxygen" name="oxygen">
                        <label for='oxygen'>Oxygen</label>
                    </div>
                    <div>
                        <input type="checkbox" id="helium" name="helium">
                        <label for='helium'>Helium</label>
                    </div>
                    <div>
                        <input type="checkbox" id="hydrogen" name="hydrogen">
                        <label for='hydrogen'>Hydrogen</label>
                    </div>
                </div>
            `
        }
    })

    

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

interface gasInfo {
    size:number
    parentStar:string
    gases:string[]
}

interface rockyInfo {
    size:number
    parentStar:string
    coreComponents:string[]
}

interface iceInfo {
    size:number
    parentStar:string
    fluidElements:string[]
}

type Info = gasInfo | rockyInfo | iceInfo


    

function createNewPlanet (name:string, type:string, info:Info): void {
    let newPlanet:Planet

    if (type === 'rocky') {
        newPlanet = new RockyPlanet(name, info.size, info.parentStar)
        Planet.listOfPlanets.push(newPlanet)
    }
    if (type === 'gas') {
        newPlanet = new GasGiant(name, info.size, info.parentStar)
        Planet.listOfPlanets.push(newPlanet)
    }
    if (type === 'ice') {
        newPlanet = new IceGiant(name, info.size, info.parentStar)
        Planet.listOfPlanets.push(newPlanet)
    }
} 

createNewPlanet ('Mercury', 'rocky', {size: 1516, parentStar: 'Sol', coreComponents:['iron']})

// let mercury = new Rocky 
// let venus = new Rocky
// let earth = new Rocky
// let mars = new Rocky
// let jupiter = new GasGiant
// let saturn = new GasGiant
// let uranus = new IceGiant
// let neptune = new IceGiant


submitPasswordBtn?.addEventListener('click', event => {
    event.preventDefault()
    displayInventoryForm()
})


