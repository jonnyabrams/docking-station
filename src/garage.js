class Garage {
  constructor() {
    this.storage = [];
  };

  fixBikes() {
    this.storage.forEach((bike) => {
      bike.isWorking = true;
    });
  };

  // NOW TAKE THE BIKES BACK!
};

module.exports = Garage