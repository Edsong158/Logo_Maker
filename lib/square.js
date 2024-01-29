const { Square } = require('./shapes');

test('Square render method', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render()).toEqual('<rect x="20" y="20" width="160" height="160" fill="green" />');
});
