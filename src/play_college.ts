import Professor from './com/walmart/college/professor';
import Student from './com/walmart/college/student';

// 0
console.log(Student.count);

const s1 = new Student("mehul", 10, 'm', 90);
// Internally
// new -> 4005
// Student() -> Student|constructor(4005, "mehul", 10, 'm', 90)

// 1
console.log(Student.count);


/* s1.name = 'mehul';
s1.roll = 10;
s1.gender = 'm';
s1.marks = 90; */

const s2 = new Student();
// Internally
// new -> 4006
// Student() -> Student|constructor(4006)

s2.name = 'jane';
s2.roll = 12;
s2.gender = 'f';
s2.marks = 56;

const s1d: string = s1.getDetails();
// Internally
// Student | getDetails(4005)

const s2d: string = s2.getDetails();
// Internally
// Student | getDetails(4006)

console.log(s1d);
console.log(s2d);

/* console.log(s1);
console.log(s2);
console.log(s1 == s2); */

console.log(s1.calcGrade());
console.log(s2.calcGrade());

const s3: Student = Student.newInstance('rock', 13, 'm', 78);
console.log(s3.getDetails());
console.log(s3.name);
console.log(s3.gender);


// 2
console.log(Student.count);


const p1 = new Professor('john doe', 'm', ['math', 'science']);
const p2 = new Professor('jane doe', 'f', null);
// console.log(p1);
// console.log(p2);

console.log(p1.getDetails());
console.log(p2.getDetails());