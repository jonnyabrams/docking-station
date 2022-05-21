const Bike = require('./bike');

class DockingStation {
  constructor() {
    this.bikes = [];
    this.capacity = 5;
  };

  dock(bike) {
    if(this.bikes.length === this.capacity) throw new Error('Docking station full');
    this.bikes.push(bike);
  }

  releaseBike() {
    if(this.bikes.length === 0) throw new Error('No bikes available');
    
    return this.bikes.pop();
  }
};

module.exports = DockingStation;