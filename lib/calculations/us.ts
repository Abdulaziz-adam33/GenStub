// US Federal & State Tax Calculations — 2025 Tax Year

export const US_STATES: Record<string, { name: string; rate: number; hasNoIncomeTax: boolean }> = {
  AL: { name: 'Alabama', rate: 0.05, hasNoIncomeTax: false },
  AK: { name: 'Alaska', rate: 0, hasNoIncomeTax: true },
  AZ: { name: 'Arizona', rate: 0.025, hasNoIncomeTax: false },
  AR: { name: 'Arkansas', rate: 0.047, hasNoIncomeTax: false },
  CA: { name: 'California', rate: 0.093, hasNoIncomeTax: false },
  CO: { name: 'Colorado', rate: 0.044, hasNoIncomeTax: false },
  CT: { name: 'Connecticut', rate: 0.0699, hasNoIncomeTax: false },
  DE: { name: 'Delaware', rate: 0.066, hasNoIncomeTax: false },
  FL: { name: 'Florida', rate: 0, hasNoIncomeTax: true },
  GA: { name: 'Georgia', rate: 0.0549, hasNoIncomeTax: false },
  HI: { name: 'Hawaii', rate: 0.11, hasNoIncomeTax: false },
  ID: { name: 'Idaho', rate: 0.058, hasNoIncomeTax: false },
  IL: { name: 'Illinois', rate: 0.0495, hasNoIncomeTax: false },
  IN: { name: 'Indiana', rate: 0.0305, hasNoIncomeTax: false },
  IA: { name: 'Iowa', rate: 0.057, hasNoIncomeTax: false },
  KS: { name: 'Kansas', rate: 0.057, hasNoIncomeTax: false },
  KY: { name: 'Kentucky', rate: 0.04, hasNoIncomeTax: false },
  LA: { name: 'Louisiana', rate: 0.06, hasNoIncomeTax: false },
  ME: { name: 'Maine', rate: 0.0715, hasNoIncomeTax: false },
  MD: { name: 'Maryland', rate: 0.0575, hasNoIncomeTax: false },
  MA: { name: 'Massachusetts', rate: 0.05, hasNoIncomeTax: false },
  MI: { name: 'Michigan', rate: 0.0425, hasNoIncomeTax: false },
  MN: { name: 'Minnesota', rate: 0.0985, hasNoIncomeTax: false },
  MS: { name: 'Mississippi', rate: 0.05, hasNoIncomeTax: false },
  MO: { name: 'Missouri', rate: 0.047, hasNoIncomeTax: false },
  MT: { name: 'Montana', rate: 0.059, hasNoIncomeTax: false },
  NE: { name: 'Nebraska', rate: 0.0664, hasNoIncomeTax: false },
  NV: { name: 'Nevada', rate: 0, hasNoIncomeTax: true },
  NH: { name: 'New Hampshire', rate: 0, hasNoIncomeTax: true },
  NJ: { name: 'New Jersey', rate: 0.1075, hasNoIncomeTax: false },
  NM: { name: 'New Mexico', rate: 0.059, hasNoIncomeTax: false },
  NY: { name: 'New York', rate: 0.0685, hasNoIncomeTax: false },
  NC: { name: 'North Carolina', rate: 0.045, hasNoIncomeTax: false },
  ND: { name: 'North Dakota', rate: 0.025, hasNoIncomeTax: false },
  OH: { name: 'Ohio', rate: 0.035, hasNoIncomeTax: false },
  OK: { name: 'Oklahoma', rate: 0.0475, hasNoIncomeTax: false },
  OR: { name: 'Oregon', rate: 0.099, hasNoIncomeTax: false },
  PA: { name: 'Pennsylvania', rate: 0.0307, hasNoIncomeTax: false },
  RI: { name: 'Rhode Island', rate: 0.0599, hasNoIncomeTax: false },
  SC: { name: 'South Carolina', rate: 0.064, hasNoIncomeTax: false },
  SD: { name: 'South Dakota', rate: 0, hasNoIncomeTax: true },
  TN: { name: 'Tennessee', rate: 0, hasNoIncomeTax: true },
  TX: { name: 'Texas', rate: 0, hasNoIncomeTax: true },
  UT: { name: 'Utah', rate: 0.0465, hasNoIncomeTax: false },
  VT: { name: 'Vermont', rate: 0.0875, hasNoIncomeTax: false },
  VA: { name: 'Virginia', rate: 0.0575, hasNoIncomeTax: false },
  WA: { name: 'Washington', rate: 0, hasNoIncomeTax: true },
  WV: { name: 'West Virginia', rate: 0.065, hasNoIncomeTax: false },
  WI: { name: 'Wisconsin', rate: 0.0765, hasNoIncomeTax: false },
  WY: { name: 'Wyoming', rate: 0, hasNoIncomeTax: true },
  DC: { name: 'District of Columbia', rate: 0.0895, hasNoIncomeTax: false },
}

// 2025 Federal Income Tax Brackets (Single filer, annualised)
export function calculateFederalTax(annualGross: number): number {
  const brackets = [
    { min: 0,      max: 11925,  rate: 0.10 },
    { min: 11925,  max: 48475,  rate: 0.12 },
    { min: 48475,  max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ]
  const taxableIncome = Math.max(0, annualGross - 15000) // 2025 standard deduction
  let tax = 0
  for (const b of brackets) {
    if (taxableIncome <= b.min) break
    tax += (Math.min(taxableIncome, b.max) - b.min) * b.rate
  }
  return tax
}

export function calculateSocialSecurity(grossPay: number, ytdGross: number): number {
  const wageBase = 176100 // 2025
  const alreadyTaxed = Math.min(ytdGross, wageBase)
  const stillEligible = Math.max(0, wageBase - alreadyTaxed)
  return Math.round(Math.min(grossPay, stillEligible) * 0.062 * 100) / 100
}

export function calculateMedicare(grossPay: number, ytdGross: number): number {
  let tax = grossPay * 0.0145
  if (ytdGross + grossPay > 200000) {
    const additional = Math.min(grossPay, Math.max(0, ytdGross + grossPay - 200000))
    tax += additional * 0.009
  }
  return Math.round(tax * 100) / 100
}

export function calculateStateTax(grossPay: number, stateCode: string): number {
  const state = US_STATES[stateCode]
  if (!state || state.hasNoIncomeTax) return 0
  return Math.round(grossPay * state.rate * 100) / 100
}

export function calculateUSDeductions(
  grossPay: number,
  ytdGross: number,
  stateCode: string,
  periodsPerYear: number = 26,          // ← was hardcoded to 12
  options: {
    retirement401k?: number
    healthInsurance?: number
    dentalVision?: number
    hsa?: number
    other?: number
  } = {}
) {
  const annualised = grossPay * periodsPerYear  // ← was * 12
  const federalTax = calculateFederalTax(annualised) / periodsPerYear  // ← was / 12
  const socialSecurity = calculateSocialSecurity(grossPay, ytdGross)
  const medicare = calculateMedicare(grossPay, ytdGross)
  const stateTax = calculateStateTax(grossPay, stateCode)

  return {
    federalTax:    Math.round(federalTax * 100) / 100,
    socialSecurity,
    medicare,
    stateTax,
    retirement401k: options.retirement401k || 0,
    healthInsurance: options.healthInsurance || 0,
    dentalVision:   options.dentalVision || 0,
    hsa:            options.hsa || 0,
    other:          options.other || 0,
  }
}
