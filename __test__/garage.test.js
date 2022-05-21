const Garage = require('../src/garage');

describe('Garage', () => {
  const garage = new Garage;
  const bike1 = { isWorking: false };
  const bike2 = { isWorking: false };
  garage.storage.push(bike1, bike2);

  it('has a storage space for bikes', () => {
    expect(garage.storage).toEqual([bike1, bike2]);
  });

  describe('fixBikes', () => {
    it('mends the broken bikes', () => {
      garage.fixBikes();
      expect(garage.storage).toEqual([ { isWorking: true }, { isWorking: true } ]);
    });
  });
});