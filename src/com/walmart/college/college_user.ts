export type Gender = 'm' | 'f';

export default class CollegeUser {
  constructor(
    public name: string,
    public gender: Gender) {
    }

  getDetails(): string {
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}