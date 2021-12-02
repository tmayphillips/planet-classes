"use strict";
const submitPasswordBtn = document.getElementById('submit-password-btn');
const planetListDiv = document.getElementById('planet-list');
const addPlanetDiv = document.getElementById('add-planet');
class Planet {
    constructor(name, size, parentStar) {
        this.name = name;
        this.size = size;
        this.parentStar = parentStar;
    }
}
Planet.listOfPlanets = [];
Planet.inventoryCount = 2000000000;
Planet.purchasedPlanets = [];
class GasGiant extends Planet {
    constructor(name, size, parentStar) {
        super(name, size, parentStar);
    }
}
class IceGiant extends Planet {
    constructor(name, size, parentStar) {
        super(name, size, parentStar);
    }
}
class RockyPlanet extends Planet {
    constructor(name, size, parentStar) {
        super(name, size, parentStar);
    }
}
class Person {
}
function purchaseStar() {
    // private variables
    // private _planetName:string
    Planet.inventoryCount--;
}
function displayInventoryForm() {
    addPlanetDiv.style.display = 'none';
    console.log(`Add password button pressed. Planet List: ${Planet.listOfPlanets}`);
    planetListDiv.innerHTML += `
        <label for="planet-name">Planet Name:</label>
        <input type="text" id="planet-name" name="planet-name"><br>
        <select name="planet-type" id="planet-type">
            <option>Select planet type</option>
            <option value="rocky">Rocky Planet</option>
            <option value="gas">Gas Giant</option>
            <option value="ice">Ice Giant</option>
        </select>
    `;
    const typeSelect = document.getElementById('planet-type');
    console.log(typeSelect.value);
    typeSelect.addEventListener('change', event => {
        if (typeSelect.value === 'gas') {
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
            `;
        }
    });
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
function createNewPlanet(name, type, info) {
    let newPlanet;
    if (type === 'rocky') {
        newPlanet = new RockyPlanet(name, info.size, info.parentStar);
        Planet.listOfPlanets.push(newPlanet);
    }
    if (type === 'gas') {
        newPlanet = new GasGiant(name, info.size, info.parentStar);
        Planet.listOfPlanets.push(newPlanet);
    }
    if (type === 'ice') {
        newPlanet = new IceGiant(name, info.size, info.parentStar);
        Planet.listOfPlanets.push(newPlanet);
    }
}
createNewPlanet('Mercury', 'rocky', { size: 1516, parentStar: 'Sol', coreComponents: ['iron'] });
// let mercury = new Rocky 
// let venus = new Rocky
// let earth = new Rocky
// let mars = new Rocky
// let jupiter = new GasGiant
// let saturn = new GasGiant
// let uranus = new IceGiant
// let neptune = new IceGiant
submitPasswordBtn === null || submitPasswordBtn === void 0 ? void 0 : submitPasswordBtn.addEventListener('click', event => {
    event.preventDefault();
    displayInventoryForm();
});
