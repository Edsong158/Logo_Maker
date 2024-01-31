import { Circle, Square, Triangle } from '../lib/shapes';

describe('Shape Class Tests', () => {
    it('Should render a square element tag', () => {
        const square = new Square();
        square.setTextColor('red');
        square.setShapeColor('green');
        square.setText('xyz');

        expect(square.render()).toBe(
            `<svg width="300" height="200">
    <rect x="50" y="50" width="200" height="100" fill="green" stroke="red" stroke-width="2" /><text x="150" y="110" fill="red" text-anchor="middle">xyz</text></svg>`);
    });

    it('Should return a circle object matching specific properties', () => {
        const circle = new Circle();
        circle.setText('xyz');
        circle.setTextColor('blue');
        circle.setShapeColor('red');

        expect(circle.render()).toBe(`<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="red" stroke="blue" stroke-width="2" /><text x="150" y="110" fill="blue" text-anchor="middle">xyz</text></svg>`);
    });

    it('Should return a triangle object matching specific properties', () => {
        const triangle = new Triangle();
        triangle.setText('xyz');
        triangle.setTextColor('green');
        triangle.setShapeColor('blue');

        expect(triangle.render()).toBe(`<svg width="300" height="200"> <polygon points="150,10 100,190 200,190" style="fill:blue;stroke:green;stroke-width:2" /><text x="150" y="100" fill="green" text-anchor="middle">xyz</text></svg>`);
    });
});
