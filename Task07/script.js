// Native JS
var Shape = function () {
  if (this.constructor == Shape) {
    throw new Error("Can't instantiate abstract class!");
  }
  Shape.count = (Shape.count || 0) + 1;
};

Shape.prototype.getArea = function () {
  throw new Error('Abstract method!');
};

Shape.prototype.getPerimeter = function () {
  throw new Error('Abstract method!');
};

Shape.prototype.toString = function () {
  if (this.constructor == Shape) {
    return 'Shape';
  }
  return (
    this.constructor.name +
    ' Area: ' +
    this.getArea() +
    ' Perimeter: ' +
    this.getPerimeter()
  );
};

var Rectangle = function (width, height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

var Circle = function (radius) {
  Shape.call(this);
  this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

Circle.prototype.getPerimeter = function () {
  return 2 * Math.PI * this.radius;
};

var rect = new Rectangle(10, 20);
console.log(rect.toString());

var circ = new Circle(10);
console.log(circ.toString());

console.log(Shape.count);

// ES6
class Shape {
  static count = 0;
  constructor() {
    if (this.constructor == Shape) {
      throw new Error("Can't instantiate abstract class!");
    }
    Shape.count++;
  }

  getArea() {
    throw new Error('Abstract method!');
  }

  getPerimeter() {
    throw new Error('Abstract method!');
  }

  toString() {
    if (this.constructor == Shape) {
      return 'Shape';
    }
    return (
      this.constructor.name +
      ' Area: ' +
      this.getArea() +
      ' Perimeter: ' +
      this.getPerimeter()
    );
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

var rect = new Rectangle(10, 20);
console.log(rect.toString());

var circ = new Circle(10);
console.log(circ.toString());

console.log(Shape.count);
