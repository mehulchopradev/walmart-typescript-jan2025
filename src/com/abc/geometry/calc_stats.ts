import Shape from './shape';


export default function calcAndPrintStats(shape: Shape) {
  console.log('*******************');
  console.log('Calculating stats for shape');
  console.log(`Area is ${shape.area()}`);
  console.log(`Perimeter is ${shape.perimeter()}`);
  console.log('*******************');
}