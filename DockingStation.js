class DockingStation {

  constructor() {
    this.bikes = [];
  };

  dock(bike) {
    this.bikes.push(bike);
  }
};

module.exports = DockingStation;