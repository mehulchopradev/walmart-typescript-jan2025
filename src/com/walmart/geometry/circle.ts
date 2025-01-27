import Shape from '../../abc/geometry/shape';

export default class Circle extends Shape{
  constructor(
    public radius: number
  ){
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}