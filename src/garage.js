class Garage {
  constructor() {
    this.storage = [];
  };

  fixBikes() {
    this.storage.forEach((bike) => {
      bike.isWorking = true;
    });
  };
};

module.exports = Garage