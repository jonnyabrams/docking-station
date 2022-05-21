const Van = require('../src/van');

describe('Van', () => {
  const van = new Van;
  const bike1 = { working: false };
  const bike2 = { working: false };
  van.trunk.push(bike1, bike2);

  it('has a trunk for storing broken bikes', () => {
    expect(van.trunk).toEqual([bike1, bike2]);
  });

  describe('driveToGarage', () => {
    it('takes the broken bikes to the garage to be fixed', () => {
      van.driveToGarage();
      expect(van.garage.storage.length).toEqual(2);
    });
  });
});