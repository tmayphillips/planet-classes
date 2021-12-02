import Planet from "./Planet.js";
import GasGiant from "./GasGiant.js";
import IceGiant from "./IceGiant.js";
import RockyPlanet from "./RockyPlanet.js";
const submitPasswordBtn = document.getElementById('submit-password-btn');
const planetListDiv = document.getElementById('planet-list');
const addPlanetDiv = document.getElementById('add-planet');
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
        newPlanet = new RockyPlanet(name, info.size, info.parentStar, info.coreComponents);
        Planet.listOfPlanets.push(newPlanet);
        newPlanet.display();
    }
    if (type === 'gas') {
        newPlanet = new GasGiant(name, info.size, info.parentStar, info.gases);
        Planet.listOfPlanets.push(newPlanet);
        newPlanet.display();
    }
    if (type === 'ice') {
        newPlanet = new IceGiant(name, info.size, info.parentStar, info.fluidElements);
        Planet.listOfPlanets.push(newPlanet);
        newPlanet.display();
    }
}
createNewPlanet('Mercury', 'rocky', { size: 1516, parentStar: 'Sol', coreComponents: ['iron'] });
createNewPlanet('Venus', 'rocky', { size: 2000, parentStar: 'Sol', coreComponents: ['iron', 'nickel'] });
createNewPlanet('Jupiter', 'gas', { size: 20000, parentStar: 'Sol', gases: ['helium', 'hydrogen'] });
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
