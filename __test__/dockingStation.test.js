const DockingStation = require('../src/dockingStation')

describe('DockingStation', () => {
  const station = new DockingStation;
  const bike1 = { isWorking: true }
  const bike2 = { isWorking: false }
  const bike3 = { isWorking: true }
  const bike4 = { isWorking: true }
  const bike5 = { isWorking: true }
  const bike6 = { isWorking: true }

  it('is an instance of the DockingStation class', () => {
    expect(station).toBeInstanceOf(DockingStation);
  });

  it('is constructed with an array for storing bikes', () => {
    expect(station.bikes).toEqual([]);
  });

  it('has a van', () => {
    expect(station.van).toEqual({ trunk: [], garage: { storage: [] } })
  })

  it('has a default capacity of 5 which can be overridden', () => {
    expect(station.capacity).toEqual(5);
    const station2 = new DockingStation(10);
    expect(station2.capacity).toEqual(10);
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
      station.releaseBike();
      expect(station.bikes.length).toEqual(3);
      station.releaseBike();
      expect(station.bikes.length).toEqual(2);
      station.releaseBike();
      expect(station.bikes.length).toEqual(1);
      expect(station.bikes).toEqual([bike1]);
    });

    it('releases a bike that is working', () => {
      expect(station.releaseBike().isWorking).toEqual(true);
    });

    it('puts a bike that is not working in the van', () => {
      station3 = new DockingStation(5, { trunk: [] });
      station3.dock(bike2);
      station3.releaseBike();
      expect(station3.van.trunk).toEqual([bike2]);
    });

    it('tells you when there are no bikes available', () => {
      expect(() => { station.releaseBike() }).toThrowError('No bikes available');
    });
  });

  describe('returnFixedBikes', () => {
    it('transfers fixed bikes from van to docking station', () => {
      const station4 = new DockingStation(5, { trunk: [
        { isWorking: true }, { isWorking: true }
      ]});
      expect(station4.van.trunk.length).toEqual(2);
      expect(station4.bikes.length).toEqual(0);
      station4.returnFixedBikes();
      expect(station4.bikes.length).toEqual(2);
      expect(station4.van.trunk.length).toEqual(0);
    });
  });
});