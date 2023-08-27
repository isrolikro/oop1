// 1:
class Rectangle {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
  area(): number {
    return this.height * this.width;
  }
}
// 2:
class Square extends Rectangle {
  a: number;

  constructor(a: number) {
    super(a, a);
  }
  area(): number {
    return this.height * this.width;
  }
}

// 3:
class Shape {
  info(): string {
    return "This is a Shape";
  }
}

class Rectangle2 extends Shape {
  info(): string {
    return "This is a Recktangle";
  }
}
class ColoredRectangle extends Rectangle {
  color: string;

  constructor(height: number, width: number, color: string) {
    super(width, height);
    this.color;
  }

  info(): string {
    return `This is a rectangle of color ${this.color}`;
  }
}

// 5:
class Shape2 {
  draw(): void {
    console.log("drawing a shape");
  }
}
class Triangle extends Shape2 {
  draw(): void {
    console.log("this is Triangle");
  }
}
class Circle extends Shape2 {
  draw(): void {
    console.log("this is Circle");
  }
}
class Square1 extends Shape2 {
  draw(): void {
    console.log("this is Triangle Square");
  }
}

function renderShapes(shapes: Shape2[]): void {
  for (const Shape2 of shapes) {
    Shape2.draw();
  }
}
