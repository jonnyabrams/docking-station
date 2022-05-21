const Bike = require('./bike');

class DockingStation {

  constructor() {
    this.bikes = [];
  };

  dock(bike) {
    this.bikes.push(bike);
  }

  releaseBike() {
    if(this.bikes.length === 0) throw new Error('No bikes available');
    
    return this.bikes.pop();
  }
};

module.exports = DockingStation;