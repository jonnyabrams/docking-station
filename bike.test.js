const Bike = require('./bike');

describe(Bike, () => {
  const bike = new Bike;

  it('tells you if it is working', () => {
    expect(bike.working).toEqual(true);
  });
});