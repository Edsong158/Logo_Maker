const { Circle } = require('./shapes');

test('Circle render method', () => {
  const circle = new Circle();
  circle.setColor('blue');
  expect(circle.render()).toEqual('<circle cx="100" cy="100" r="80" fill="blue" />');
});
