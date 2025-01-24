function areaCircle(radius: number): number {
  return Math.PI * radius * radius;
}

const radius: number = 5;
console.log(radius); // 5. Non callable variable
console.log(areaCircle); // function object. Callable variable
// Functions are treated as regular values in javascript

// radius(); // wrong, radius is a non callable
console.log(areaCircle(radius)); // 78.54

// string, number, boolean, Function

// In javascript, a function can be defined inside another function
function abc() {
  const a = 10; // a -> number

  // xyz -> function
  function xyz() {
    const b = a + 20; // inner function can access outer function variables
    return b;
  }

  console.log(xyz());
}

abc();

// In javascript, a function can return another function
function outer(p: number): (pr: number) => number {
  // p -> 2 (outer)
  const a = 10; // a -> 10 (outer)

  // inner -> function object (outer)
  // Closures -> inner function can access outer function variables even after outer function has returned
  // inner function remembers the outer function context all the time!
  function inner(c: number): number {
    // c -> 5
    const b = (a ** p) + 20 + c;
    return b;
  }

  return inner;
}

const fn = outer(2);
const n = fn(5);
console.log(n);

// In javascript, a function can accept another function as an argument -- Callback function

// pqr -> function
function pqr(func: (a: number) => number): number {
  const b = 20;
  return func(b);
}

// mno -> function
function mno(a: number): number {
  return (a ** 2) + 10;
}

console.log(pqr(mno));

// Functional programming
