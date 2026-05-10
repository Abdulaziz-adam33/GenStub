// Kenya Payroll Calculations — 2025
// SHA replaced NHIF effective October 2024
// AHL (Affordable Housing Levy) introduced March 2024

export function calculateKenyaPAYE(periodTaxableIncome: number, periodsPerYear: number): number {
  const annual = periodTaxableIncome * periodsPerYear   // ← was * 12
  const brackets = [
    { min: 0,         max: 288000,   rate: 0.10 },
    { min: 288000,    max: 388000,   rate: 0.25 },
    { min: 388000,    max: 6000000,  rate: 0.30 },
    { min: 6000000,   max: 9600000,  rate: 0.325 },
    { min: 9600000,   max: Infinity, rate: 0.35 },
  ]
  let annualTax = 0
  for (const b of brackets) {
    if (annual <= b.min) break
    annualTax += (Math.min(annual, b.max) - b.min) * b.rate
  }
  const personalRelief = 28800
  const netAnnual = Math.max(0, annualTax - personalRelief)
  return Math.round((netAnnual / periodsPerYear) * 100) / 100   // ← was / 12
}

export function calculateNSSF(grossSalary: number): number {
  const tierI  = Math.min(grossSalary, 8000)
  const tierII = Math.min(Math.max(0, grossSalary - 8000), 64000)
  return Math.round(Math.min((tierI + tierII) * 0.06, 4320) * 100) / 100
}

export function calculateSHA(grossSalary: number): number {
  return Math.round(Math.max(grossSalary * 0.0275, 300) * 100) / 100
}

export function calculateAHL(grossSalary: number): number {
  return Math.round(grossSalary * 0.015 * 100) / 100
}

export function calculateNITA(): number { return 50 }

export function calculateKenyaDeductions(grossSalary: number, periodsPerYear: number = 12) {
  const nssf = calculateNSSF(grossSalary)
  const sha  = calculateSHA(grossSalary)
  const ahl  = calculateAHL(grossSalary)
  const nita = calculateNITA()
  const taxable = Math.max(0, grossSalary - nssf - sha - ahl)
  const paye = calculateKenyaPAYE(taxable, periodsPerYear)  // ← passes ppy
  return { paye, nssf, sha, ahl, nita }
}
