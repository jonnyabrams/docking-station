const DockingStation = require('./DockingStation')

describe('DockingStation', () => {
  const station = new DockingStation;

  it('is an instance of the DockingStation class', () => {
    expect(station).toBeInstanceOf(DockingStation);
  });

  it('is constructed with an array for storing bikes', () => {
    expect(station.bikes).toEqual([]);
  });
});