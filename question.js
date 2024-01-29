const questions = [
  {
    name: 'text',
    message: 'Please enter the text for your SVG (up to three characters):',
    validate: function (input) {
      return input.length <= 3 ? true : 'Please enter up to three characters.';
    }
  },
  {
    name: 'textColor',
    message: 'Please provide a color for your text:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape:',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    name: 'shapeColor',
    message: 'Please provide a color for your shape (keyword or hexadecimal):'
  }
];

export default questions;
