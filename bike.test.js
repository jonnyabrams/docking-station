const Bike = require('./bike');

describe(Bike, () => {
  const bike = new Bike;

  it('tells you if it is working', () => {
    expect(bike.isWorking).toEqual(true);
  });

  it('can be reported broken', () => {
    bike.reportBroken();
    expect(bike.isWorking).toEqual(false);
  });
});