import Planet from './Planet.js';
import GasGiant from "./GasGiant.js";
import IceGiant from "./IceGiant.js";
import RockyPlanet from "./RockyPlanet.js";
const submitPasswordBtn = document.getElementById('submit-password-btn');
const planetListDiv = document.getElementById('planet-list');
const addPlanetDiv = document.getElementById('add-planet');
const infoFormDiv = document.getElementById('info-section');
let ammoniaCheckbox;
let methaneCheckbox;
let waterCheckbox;
let ironCheckbox;
let nickelCheckbox;
let hydrogenCheckbox;
let heliumCheckbox;
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
        <label for="planet-size">Size (miles)</label>
        <input type='number' id="planet-size" name="planet-size"><br>
        <label for="planet-parent">Parent Star</label>
        <input type='text' id="planet-parent" name="planet-parent"><br>
        <select name="planet-type" id="planet-type">
            <option value="rocky">Rocky Planet</option>
            <option value="gas">Gas Giant</option>
            <option value="ice">Ice Giant</option>
        </select>
    `;
    const typeSelect = document.getElementById('planet-type');
    const planetName = document.getElementById('planet-name');
    const planetSize = document.getElementById('planet-size');
    const planetParent = document.getElementById('planet-parent');
    const submitPlanetBtn = document.getElementById('submit-planet-btn');
    console.log(typeSelect.value);
    typeSelect.addEventListener('change', event => {
        if (typeSelect.value === 'gas') {
            infoFormDiv.innerHTML = `
                <div id='gas-mixture' class='checkbox-form'>
                    <div>
                        <input type="checkbox" id="helium" name="helium">
                        <label for='helium'>Helium</label>
                    </div>
                    <div>
                        <input type="checkbox" id="hydrogen" name="hydrogen">
                        <label for='hydrogen'>Hydrogen</label>
                    </div>
                </div>
                <button id='submit-planet-btn' class='btn'>Submit</button>
            `;
            submitPlanetBtn.style.display = 'block';
            heliumCheckbox = document.getElementById('helium');
            hydrogenCheckbox = document.getElementById('hydrogen');
        }
        if (typeSelect.value === 'rocky') {
            infoFormDiv.innerHTML = `
                <div id='core-elements' class='checkbox-form'>
                    <div>
                        <input type="checkbox" id="iron" name="iron">
                        <label for='iron'>Iron</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nickel" name="nickel">
                        <label for='nickel'>Nickel</label>
                    </div>
                </div>
                <button id='submit-planet-btn' class='btn'>Submit</button>
            `;
            submitPlanetBtn.style.display = 'block';
            ironCheckbox = document.getElementById('iron');
            nickelCheckbox = document.getElementById('nickel');
        }
        if (typeSelect.value === 'ice') {
            infoFormDiv.innerHTML = `
                <div id='fluid-elements' class='checkbox-form'>
                    <div>
                        <input type="checkbox" id="water" name="water">
                        <label for='water'>Water</label>
                    </div>
                    <div>
                        <input type="checkbox" id="methane" name="methane">
                        <label for='methane'>Methane</label>
                    </div>
                    <div>
                        <input type="checkbox" id="ammonia" name="ammonia">
                        <label for='ammonia'>Ammonia</label>
                    </div>
                </div>
                <button id='submit-planet-btn' class='btn'>Submit</button>
            `;
            submitPlanetBtn.style.display = 'block';
            ammoniaCheckbox = document.getElementById('ammonia');
            methaneCheckbox = document.getElementById('methane');
            waterCheckbox = document.getElementById('water');
        }
    });
    submitPlanetBtn.addEventListener('click', event => {
        event.preventDefault();
        let elements = [];
        let info = {};
        let name = planetName.value;
        let type = typeSelect.value;
        if (typeSelect.value === 'rocky') {
            if (ironCheckbox.checked) {
                elements.push('Iron');
            }
            if (nickelCheckbox.checked) {
                elements.push('Nickel');
            }
            info = {
                size: planetSize,
                parentStar: planetParent,
                coreComponents: elements
            };
            createNewPlanet(name, type, info);
        }
        if (typeSelect.value === 'gas') {
            if (heliumCheckbox.checked) {
                elements.push('Helium');
            }
            if (hydrogenCheckbox.checked) {
                elements.push('Hydrogen');
            }
            info = {
                size: planetSize,
                parentStar: planetParent,
                gases: elements
            };
            createNewPlanet(name, type, info);
        }
        if (typeSelect.value === 'ice') {
            if (ammoniaCheckbox.checked) {
                elements.push('Ammonia');
            }
            if (methaneCheckbox.checked) {
                elements.push('Methane');
            }
            if (waterCheckbox.checked) {
                elements.push('Water');
            }
            info = {
                size: planetSize,
                parentStar: planetParent,
                fluidElements: elements
            };
            createNewPlanet(name, type, info);
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
    console.log(Planet.listOfPlanets);
}
createNewPlanet('Mercury', 'rocky', { size: 1516, parentStar: 'Sol', coreComponents: ['iron'] });
// let mercury = new Rocky iron
// let venus = new Rocky iron
// let earth = new Rocky iron, nickel
// let mars = new Rocky iron, nickel
// let jupiter = new GasGiant hydrogen helium
// let saturn = new GasGiant hydrogen helium
// let uranus = new IceGiant water, methane, ammonia
// let neptune = new IceGiant water, methane, ammonia
// additional materials - 
submitPasswordBtn === null || submitPasswordBtn === void 0 ? void 0 : submitPasswordBtn.addEventListener('click', event => {
    event.preventDefault();
    if (document.getElementById('password').value === 'admin') {
        displayInventoryForm();
    }
    else {
        alert('wrong password');
    }
});
