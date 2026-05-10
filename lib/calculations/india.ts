// India Payroll Calculations — FY 2025-26

export const INDIA_STATES: Record<string, { name: string; ptMonthly: number }> = {
  'MH': { name: 'Maharashtra', ptMonthly: 200 },
  'KA': { name: 'Karnataka', ptMonthly: 200 },
  'WB': { name: 'West Bengal', ptMonthly: 208 },
  'AP': { name: 'Andhra Pradesh', ptMonthly: 200 },
  'TG': { name: 'Telangana', ptMonthly: 200 },
  'TN': { name: 'Tamil Nadu', ptMonthly: 156 },
  'GJ': { name: 'Gujarat', ptMonthly: 200 },
  'MP': { name: 'Madhya Pradesh', ptMonthly: 208 },
  'OR': { name: 'Odisha', ptMonthly: 200 },
  'AS': { name: 'Assam', ptMonthly: 208 },
  'MN': { name: 'Manipur', ptMonthly: 208 },
  'ME': { name: 'Meghalaya', ptMonthly: 208 },
  'SK': { name: 'Sikkim', ptMonthly: 208 },
  'OTHER': { name: 'Other / No PT', ptMonthly: 0 },
}

// EPF: 12% of basic salary (employee contribution)
// Max: ₹1,800/month if basic > ₹15,000 (unless voluntary higher contribution)
export function calculateEPF(basicSalary: number, voluntaryHigher = false): number {
  if (voluntaryHigher) return Math.round(basicSalary * 0.12 * 100) / 100
  const maxBasicForCap = 15000
  const effectiveBasic = Math.min(basicSalary, maxBasicForCap)
  return Math.round(effectiveBasic * 0.12 * 100) / 100
}

// ESI: 0.75% of gross salary — only if gross ≤ ₹21,000/month
export function calculateESI(grossSalary: number): number {
  if (grossSalary > 21000) return 0
  return Math.round(grossSalary * 0.0075 * 100) / 100
}

// Professional Tax: state-specific, monthly
export function calculateProfessionalTax(grossSalary: number, stateCode: string): number {
  const state = INDIA_STATES[stateCode]
  if (!state) return 200
  // Simple monthly deduction (most states have slab but ₹200 is most common for mid-income)
  if (grossSalary < 10000) return 0
  return state.ptMonthly
}

// TDS — simplified monthly calculation using new regime FY 2025-26
// New regime: 0% up to ₹12L (with ₹75K standard deduction → ₹12.75L effective)
// For monthly payroll, we annualise and divide by 12
export function calculateTDS(annualGross: number, regime: 'new' | 'old' = 'new'): number {
  const stdDeduction = regime === 'new' ? 75000 : 50000
  const taxableIncome = Math.max(0, annualGross - stdDeduction)

  let tax = 0
  if (regime === 'new') {
    // New regime FY 2025-26
    const brackets = [
      { min: 0, max: 400000, rate: 0 },
      { min: 400000, max: 800000, rate: 0.05 },
      { min: 800000, max: 1200000, rate: 0.10 },
      { min: 1200000, max: 1600000, rate: 0.15 },
      { min: 1600000, max: 2000000, rate: 0.20 },
      { min: 2000000, max: 2400000, rate: 0.25 },
      { min: 2400000, max: Infinity, rate: 0.30 },
    ]
    // Rebate u/s 87A — zero tax if taxable income ≤ ₹12L under new regime
    if (taxableIncome <= 1200000) return 0
    for (const b of brackets) {
      if (taxableIncome <= b.min) break
      tax += (Math.min(taxableIncome, b.max) - b.min) * b.rate
    }
  } else {
    // Old regime
    const brackets = [
      { min: 0, max: 250000, rate: 0 },
      { min: 250000, max: 500000, rate: 0.05 },
      { min: 500000, max: 1000000, rate: 0.20 },
      { min: 1000000, max: Infinity, rate: 0.30 },
    ]
    if (taxableIncome <= 500000) return 0
    for (const b of brackets) {
      if (taxableIncome <= b.min) break
      tax += (Math.min(taxableIncome, b.max) - b.min) * b.rate
    }
  }

  // 4% health & education cess
  tax += tax * 0.04

  return Math.round((tax / 12) * 100) / 100
}

export function calculateIndiaDeductions(params: {
  basicSalary: number
  grossSalary: number
  annualGross: number
  stateCode: string
  regime: 'new' | 'old'
  voluntaryEPF?: boolean
}) {
  const epf = calculateEPF(params.basicSalary, params.voluntaryEPF)
  const esi = calculateESI(params.grossSalary)
  const pt = calculateProfessionalTax(params.grossSalary, params.stateCode)
  const tds = calculateTDS(params.annualGross, params.regime)

  return { epf, esi, professionalTax: pt, tds }
}
