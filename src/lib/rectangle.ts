export function perimeter(length: number, breadth: number): number {
  return 2 * (length + breadth);
}

export function area(length: number, breadth: number): number {
  return length * breadth;
}

// in a single typescript module, there can be only one default export
export default function stats(length: number, breadth: number): [number, number] {
  const p = perimeter(length, breadth);
  const a = area(length, breadth);
  return [p, a];
}