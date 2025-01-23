export {};

type Gender = 'm' | 'f';

type Student = {
  name: string,
  gender?: Gender, // optional property
  roll?: number, // optional property
}

const s1: Student = {
  name: 'mehul',
  gender: 'm',
  roll: 10,
};

const s2: Student = {
  name: 'jane',
  gender: 'f',
  roll: 12,
};

const s3: Student = {
  name: 'jill',
  gender: 'f'
}

const s4: Student = {
  name: 'rock',
};

console.log(s1);
console.log(s2);
console.log(s3);

if (s1.gender) {
  console.log(s1.gender.toUpperCase());
}

// null safe operator
console.log(s4.gender?.toUpperCase()); // (?.) null safe operator