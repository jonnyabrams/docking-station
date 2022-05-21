class Bike {
  constructor() {
    this.isWorking = true;
  }

  reportBroken() {
    this.isWorking = false;
  }
};

module.exports = Bike;