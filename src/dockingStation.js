const Bike = require('./bike');
const Van = require('./van');

class DockingStation {
  constructor(capacity = 5, van = new Van) {
    this.bikes = [];
    this.capacity = capacity;
    this.van = van;
  };

  dock(bike) {
    if(this.#isFull()) throw new Error('Docking station full');
    this.bikes.push(bike);
  };

  releaseBike() {
    if(this.#isEmpty()) throw new Error('No bikes available');
    
    this.#loadBrokenBikesIntoVan();
    return this.bikes.pop();
  };

  returnFixedBikes() {
    this.van.trunk.forEach((bike) => {
      this.bikes.push(bike);
    });
    this.van.trunk = [];
  };

  #isFull() {
    return this.bikes.length === this.capacity;
  };

  #isEmpty() {
    return this.bikes.length === 0;
  };

  #loadBrokenBikesIntoVan() {
    this.bikes.forEach((bike, index) => {
      if(bike.isWorking === false) {
        this.van.trunk.push(bike);
        delete this.bikes[index];
      };
    });
  };
};

module.exports = DockingStation;