const Bike = require('./bike');

class DockingStation {
  constructor(capacity = 5) {
    this.bikes = [];
    this.capacity = capacity;
  };

  dock(bike) {
    if(this.#isFull()) throw new Error('Docking station full');
    this.bikes.push(bike);
  }

  releaseBike() {
    if(this.#isEmpty()) throw new Error('No bikes available');
    
    return this.bikes.pop();
  }

  #isFull() {
    return this.bikes.length === this.capacity;
  };

  #isEmpty() {
    return this.bikes.length === 0;
  };
};

module.exports = DockingStation;