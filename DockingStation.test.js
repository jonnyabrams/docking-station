const DockingStation = require('./dockingStation')

describe('DockingStation', () => {
  const station = new DockingStation;
  const bike1 = { working: true }
  const bike2 = { working: false }
  const bike3 = { working: true }
  const bike4 = { working: true }
  const bike5 = { working: true }
  const bike6 = { working: true }

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

    it('does not let you dock a bike if the station is at capacity', () => {
      station.dock(bike3);
      station.dock(bike4);
      station.dock(bike5);
      expect(() => { station.dock(bike6) }).toThrowError('Docking station full');
    });
  });

  describe('release', () => {
    it('can release a bike from the station', () => {
      for(i = 0; i < 4; i++) {
        station.releaseBike();
      }
      expect(station.bikes.length).toEqual(1);
      expect(station.bikes).toEqual([bike1]);
    });

    it('releases a bike that is working', () => {
      expect(station.releaseBike().working).toEqual(true);
    });

    it('releases a bike that is not working', () => {
      station.dock(bike2);
      expect(station.releaseBike().working).toEqual(false);
    });

    it('tells you when there are no bikes available', () => {
      expect(() => { station.releaseBike() }).toThrowError('No bikes available');
    });
  });
});