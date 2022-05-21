const Bike = require('./bike');

class DockingStation {

  constructor() {
    this.bikes = [];
  };

  dock(bike) {
    this.bikes.push(bike);
  }

  releaseBike() {
    return this.bikes.pop();
  }
};

module.exports = DockingStation;