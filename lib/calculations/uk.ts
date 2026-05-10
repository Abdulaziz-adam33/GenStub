// UK Payroll Calculations — Tax Year 2025/26

export function calculateUKIncomeTax(annualGross: number): number {
  let effectivePA = 12570
  if (annualGross > 100000)
    effectivePA = Math.max(0, 12570 - Math.floor((annualGross - 100000) / 2))
  const taxable = Math.max(0, annualGross - effectivePA)
  const basicLimit  = 50270 - 12570
  const higherLimit = 125140 - 12570
  if (taxable <= basicLimit)  return taxable * 0.20
  if (taxable <= higherLimit) return basicLimit * 0.20 + (taxable - basicLimit) * 0.40
  return basicLimit * 0.20 + (higherLimit - basicLimit) * 0.40 + (taxable - higherLimit) * 0.45
}

export function calculateUKNationalInsurance(annualGross: number): number {
  if (annualGross <= 12570) return 0
  if (annualGross <= 50270) return (annualGross - 12570) * 0.08
  return (50270 - 12570) * 0.08 + (annualGross - 50270) * 0.02
}

export function calculateUKPension(annualGross: number, rate = 0.05): number {
  const qualifying = Math.min(Math.max(0, annualGross - 6240), 50270 - 6240)
  return qualifying * rate
}

export type StudentLoanPlan = 'none' | 'plan1' | 'plan2' | 'plan4' | 'postgrad'
export function calculateUKStudentLoan(annualGross: number, plan: StudentLoanPlan): number {
  const plans = {
    none:     { threshold: Infinity, rate: 0 },
    plan1:    { threshold: 24990,    rate: 0.09 },
    plan2:    { threshold: 27295,    rate: 0.09 },
    plan4:    { threshold: 31395,    rate: 0.09 },
    postgrad: { threshold: 21000,    rate: 0.06 },
  }
  const { threshold, rate } = plans[plan]
  if (annualGross <= threshold) return 0
  return (annualGross - threshold) * rate
}

export function calculateUKDeductions(params: {
  annualGross:      number
  periodsPerYear:   number           // ← new param, was hardcoded /12
  pensionRate?:     number
  studentLoanPlan?: StudentLoanPlan
}) {
  const ppy = params.periodsPerYear
  const round = (n: number) => Math.round((n / ppy) * 100) / 100

  return {
    incomeTax:       round(calculateUKIncomeTax(params.annualGross)),
    nationalInsurance: round(calculateUKNationalInsurance(params.annualGross)),
    pension:         round(calculateUKPension(params.annualGross, params.pensionRate ?? 0.05)),
    studentLoan:     round(calculateUKStudentLoan(params.annualGross, params.studentLoanPlan ?? 'none')),
  }
}
