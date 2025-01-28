// Manager

import calcAndPrintStats from './com/abc/geometry/calc_stats';
import Shape from './com/abc/geometry/shape';
import Circle from './com/walmart/geometry/circle';
import Rectangle from './com/walmart/geometry/rectangle';
import Square from './com/walmart/geometry/square';


const r1 = new Rectangle(20, 12);
calcAndPrintStats(r1);

const s1 = new Square(10);
calcAndPrintStats(s1);

const c1 = new Circle(5);
calcAndPrintStats(c1);

// const s = new Shape(); // Error: Cannot create an instance of an abstract class.
