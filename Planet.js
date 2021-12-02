export default class Planet {
    constructor(name, size, parentStar) {
        this.name = name;
        this.size = size;
        this.parentStar = parentStar;
    }
}
Planet.listOfPlanets = [];
Planet.inventoryCount = 2000000000;
Planet.purchasedPlanets = [];
