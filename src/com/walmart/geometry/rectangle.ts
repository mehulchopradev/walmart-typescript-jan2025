// Developer X

import Shape from '../../abc/geometry/shape';

export default class Rectangle extends Shape {
  constructor(
    public length: number,
    public breadth: number
  ) {
    super();
  }

  area(): number {
    return this.length * this.breadth;
  }

  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}