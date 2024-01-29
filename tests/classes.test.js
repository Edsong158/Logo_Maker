const { Circle, Square } = require('../lib/shapes');

decribe('Shape Class Tests', () => {
    it('Should render a square element tag', () => {
        const square = new Square('xyz', 'red', 90, 75);

        square.setColor('red');

        expect(square.render()).tobe('<rect width="150" height="150" fill="red" />')
    });

    it('Should return a circle object matching specific properties', () => {
        const circle = new Circle('xyz', 'blue', 90, 75);

        expect(circle).toMatchObject({
            text: 'xyz',
            textcolor: 'blue',
            textX: 90,
            textY: 75
        });
    })
});