function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
  return (
    'Rectangle: width = ' +
    this.width +
    ', height = ' +
    this.height +
    ', area = ' +
    this.getArea() +
    ', perimeter = ' +
    this.getPerimeter()
  );
};

var rect = new Rectangle(10, 20);
console.log(rect.getArea());
console.log(rect.getPerimeter());
console.log(rect.toString());
