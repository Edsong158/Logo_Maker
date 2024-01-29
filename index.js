import fs from 'fs';
import inquirer from 'inquirer';
import questions from './question.js';
import { Circle, Square, Triangle } from './lib/shapes.js';

async function generateLogo() {
  try {
    const answers = await inquirer.prompt(questions);

    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      default:
        throw new Error('Invalid shape');
    }

    shape.setText(answers.text);
    shape.setTextColor(answers.textColor);
    shape.setShapeColor(answers.shapeColor);

    const svgContent = shape.render();
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

generateLogo();
