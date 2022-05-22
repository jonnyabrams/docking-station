const Garage = require('./garage')

class Van {
  constructor(garage = new Garage) {
    this.trunk = [];
    this.garage = garage;
  }

  driveToGarage() {
    this.trunk.forEach((bike) => {
      this.garage.storage.push(bike);
    });
    this.trunk = [];
  };

  collectFromGarage() {
    this.garage.storage.forEach((bike) => {
      this.trunk.push(bike);
    });
    this.garage.storage = [];
  };
};

module.exports = Van