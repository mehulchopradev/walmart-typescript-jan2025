// generic classes
export default class MyArray<T> {
  constructor(
    public elements: T[]
  ) {}

  getElement(index: number): T {
    return this.elements[index - 1];
  }

  setElement(index: number, value: T): void {
    this.elements[index - 1] = value;
  }

  printAll(): void {
    console.log(this.elements.join('|'));
  }
}