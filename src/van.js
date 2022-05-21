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
  };
};

module.exports = Van