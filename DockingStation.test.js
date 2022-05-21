const DockingStation = require('./DockingStation')

describe('DockingStation', () => {
  const station = new DockingStation;
  const bike1 = { working: true }
  const bike2 = { working: false }

  it('is an instance of the DockingStation class', () => {
    expect(station).toBeInstanceOf(DockingStation);
  });

  it('is constructed with an array for storing bikes', () => {
    expect(station.bikes).toEqual([]);
  });

  it('can dock a bike', () => {
    station.dock(bike1);
    expect(station.bikes.length).toEqual(1);
  });
});