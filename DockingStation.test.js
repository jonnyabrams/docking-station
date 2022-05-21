const DockingStation = require('./dockingStation')

describe('DockingStation', () => {
  const station = new DockingStation;
  const bike1 = { working: () => true }
  const bike2 = { working: () => false }

  it('is an instance of the DockingStation class', () => {
    expect(station).toBeInstanceOf(DockingStation);
  });

  it('is constructed with an array for storing bikes', () => {
    expect(station.bikes).toEqual([]);
  });

  describe('dock', () => {
    it('can dock a bike in the station', () => {
      station.dock(bike1);
      expect(station.bikes.length).toEqual(1);
      expect(station.bikes).toEqual([bike1]);
      station.dock(bike2);
      expect(station.bikes.length).toEqual(2);
      expect(station.bikes).toEqual([bike1, bike2]);
    });
  });

  describe('release', () => {
    it('can release a bike from the station', () => {
      station.releaseBike()
      expect(station.bikes.length).toEqual(1);
      expect(station.bikes).toEqual([bike1]);
    });

    it('releases a bike that is working', () => {
      expect(station.releaseBike().working).toEqual(true);
    });
  });
});