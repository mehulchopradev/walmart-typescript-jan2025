import MyArray from './lib/my_array';

const nos: number[] = [1, 2, 3, 4, 5];

const myArray1 = new MyArray<number>(nos);
const fn: number = myArray1.getElement(1); // first element
console.log(myArray1.getElement(3)); // third element

myArray1.setElement(1, 10); // modify first element
myArray1.setElement(4, 5); // modify fourth element

myArray1.printAll();


const fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Dates'];
const myArray2 = new MyArray<string>(fruits);
const first: string = myArray2.getElement(1); // first element

myArray2.setElement(2, 'Mango');

myArray2.printAll();