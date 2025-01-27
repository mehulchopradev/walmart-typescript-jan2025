// Developer Y

import Shape from '../../abc/geometry/shape';

export default class Square extends Shape {
  constructor(
    public side: number
  ) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }
  perimeter(): number {
    return 4 * this.side;
  }
}