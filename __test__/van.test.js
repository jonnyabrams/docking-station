const Van = require('../src/van');

describe('Van', () => {
  const van = new Van;

  it('has a trunk for storing broken bikes', () => {
    expect(van.trunk).toEqual([]);
  });
});