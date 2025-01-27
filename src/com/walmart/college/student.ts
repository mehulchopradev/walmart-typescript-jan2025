import CollegeUser, { Gender } from './college_user';

export default class Student extends CollegeUser {
  // access specifiers - visibility modifiers
    // public - default
    // private
    // protected - only accessible in the class and its subclasses

  // instance (object) attributes
  // by default, all attributes are `public`
  /* name: string;
  gender: Gender;
  roll: number;
  marks: number; */

  // static attributes
  // count is stored in the class object
  // 1 class object per class
  // access static attributes using class name
  static count: number = 0;

  constructor(
    name: string = 'NA',
    public roll: number = 0,
    gender: Gender = 'm',
    public marks: number = 0) {
      super(name, gender);
      Student.count++;
  }

  /* constructor(
    public name: string = 'NA',
    public roll: number = 0,
    public gender: Gender = 'm',
    public marks: number = 0) {
    // implict parameter 'this' is the object being created
    /* this.name = name;
    this.gender = gender;
    this.roll = roll;
    this.marks = marks; */

    /* Student.count++;
  } */

  // instance methods (functions)
  // method overriding
  getDetails(): string {
    return `Name: ${this.name}\nGender: ${this.gender}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
  }

  calcGrade(): string {
    // implict parameter 'this' is the object being created
    if (this.marks >= 90) {
      return 'A';
    } else if (this.marks >= 80) {
      return 'B';
    } else if (this.marks >= 70) {
      return 'C';
    } else if (this.marks >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  // static methods
  static newInstance(name: string = 'NA', roll: number = 0, gender: Gender = 'm', marks: number = 0): Student {
    return new Student(name, roll, gender, marks);
  }
}