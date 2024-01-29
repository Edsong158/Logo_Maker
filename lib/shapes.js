class Shape {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shapeColor = '';
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  render() {
    throw new Error('render() method must be implemented');
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2" />
              <text x="150" y="110" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
              <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2" />
              <text x="150" y="110" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <polygon points="150,10 100,190 200,190" style="fill:${this.shapeColor};stroke:${this.textColor};stroke-width:2" />
              <text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
            </svg>`;
  }
}

export { Circle, Square, Triangle };
