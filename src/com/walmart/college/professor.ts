import SalariedIndividual from '../../abc/salary/salaried_individual';
import CollegeUser, { Gender } from './college_user';

export default class Professor extends CollegeUser implements SalariedIndividual {
  constructor(
    name: string = 'NA',
    gender: Gender = 'm',
    public subjects: string[] | null,
    public costPerDay: number,
    public noOfDaysWorked: number) {
      super(name, gender);
    }
  getDaysWorkedInMonth(): number {
    return this.noOfDaysWorked;
  }
  getCommercialsPerDay(): number {
    return this.costPerDay;
  }

  isTeaching(): boolean {
    return this.subjects != null && this.subjects.length > 0;
  }
}