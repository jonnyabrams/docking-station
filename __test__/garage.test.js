const Garage = require('../src/garage');

describe('Garage', () => {
  const garage = new Garage;

  it('has a storage space for bikes', () => {
    expect(garage.storage).toEqual([]);
  });
});