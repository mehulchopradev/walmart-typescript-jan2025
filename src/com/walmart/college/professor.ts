import CollegeUser, { Gender } from './college_user';

export default class Professor extends CollegeUser {
  constructor(
    name: string = 'NA',
    gender: Gender = 'm',
    public subjects: string[] | null){
      super(name, gender);
    }

  isTeaching(): boolean {
    return this.subjects != null && this.subjects.length > 0;
  }
}