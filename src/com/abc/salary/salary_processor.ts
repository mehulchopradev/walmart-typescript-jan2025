import SalariedIndividual from './salaried_individual';

export default function process(si: SalariedIndividual) {
  const daysWorkedInMonth = si.getDaysWorkedInMonth();
  const commercialsPerDay = si.getCommercialsPerDay();

  const cost = daysWorkedInMonth * commercialsPerDay;
  const pt = 200;
  const costWithoutPt = cost - pt;
  const tds = costWithoutPt * 0.1;
  return costWithoutPt - tds;
}