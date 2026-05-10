// All remaining countries — 2025 rates
// Every function now accepts periodsPerYear instead of hardcoding 12

const r = (n: number) => Math.round(n * 100) / 100

// ═══════════════════════════════
// CANADA — 2025
// ═══════════════════════════════
export function calculateCanadaFederalTax(annualGross: number): number {
  const bpa = 16129
  const taxable = Math.max(0, annualGross - bpa)
  const brackets = [
    { min: 0,       max: 57375,   rate: 0.15 },
    { min: 57375,   max: 114750,  rate: 0.205 },
    { min: 114750,  max: 158519,  rate: 0.26 },
    { min: 158519,  max: 220000,  rate: 0.29 },
    { min: 220000,  max: Infinity,rate: 0.33 },
  ]
  let tax = 0
  for (const b of brackets) {
    if (taxable <= b.min) break
    tax += (Math.min(taxable, b.max) - b.min) * b.rate
  }
  return tax
}

export function calculateCPP(annualGross: number): { cpp: number; cpp2: number } {
  const cpp1 = Math.min(Math.max(0, annualGross - 3500), 68500 - 3500) * 0.0595
  const cpp2 = Math.min(Math.max(0, annualGross - 68500), 73200 - 68500) * 0.04
  return { cpp: r(cpp1), cpp2: r(cpp2) }   // annual amounts
}

export function calculateEI(annualGross: number): number {
  return r(Math.min(annualGross, 63200) * 0.0166)   // annual amount
}

export function calculateCanadaDeductions(annualGross: number, periodsPerYear: number = 26, provincialRate = 0.0905) {
  const ppy = periodsPerYear
  const { cpp, cpp2 } = calculateCPP(annualGross)
  return {
    federalTax:   r(calculateCanadaFederalTax(annualGross) / ppy),
    provincialTax:r(annualGross * provincialRate / ppy),
    cpp:          r(cpp / ppy),
    cpp2:         r(cpp2 / ppy),
    ei:           r(calculateEI(annualGross) / ppy),
  }
}

// ═══════════════════════════════
// AUSTRALIA — 2024/25
// ═══════════════════════════════
export function calculateAustralianPAYG(annualGross: number): number {
  const brackets = [
    { min: 0,      max: 18200,   rate: 0 },
    { min: 18200,  max: 45000,   rate: 0.19 },
    { min: 45000,  max: 135000,  rate: 0.325 },
    { min: 135000, max: 190000,  rate: 0.37 },
    { min: 190000, max: Infinity,rate: 0.45 },
  ]
  let tax = 0
  for (const b of brackets) {
    if (annualGross <= b.min) break
    tax += (Math.min(annualGross, b.max) - b.min) * b.rate
  }
  return tax + annualGross * 0.02   // + Medicare levy
}

export function calculateAustraliaDeductions(annualGross: number, periodsPerYear: number = 26, superRate = 0.115) {
  return {
    payg:          r(calculateAustralianPAYG(annualGross) / periodsPerYear),
    superannuation:r(annualGross * superRate / periodsPerYear),
  }
}

// ═══════════════════════════════
// UAE — no income tax for expats
// ═══════════════════════════════
export function calculateUAEDeductions(grossSalary: number, isNational = false) {
  return { gpssa: isNational ? r(grossSalary * 0.05) : 0 }
}

// ═══════════════════════════════
// SOUTH AFRICA — 2025/26
// ═══════════════════════════════
export function calculateSAPAYE(annualGross: number): number {
  const brackets = [
    { min: 0,        max: 237100,  rate: 0.18 },
    { min: 237100,   max: 370500,  rate: 0.26 },
    { min: 370500,   max: 512800,  rate: 0.31 },
    { min: 512800,   max: 673000,  rate: 0.36 },
    { min: 673000,   max: 857900,  rate: 0.39 },
    { min: 857900,   max: 1817000, rate: 0.41 },
    { min: 1817000,  max: Infinity,rate: 0.45 },
  ]
  let tax = 0
  for (const b of brackets) {
    if (annualGross <= b.min) break
    tax += (Math.min(annualGross, b.max) - b.min) * b.rate
  }
  return Math.max(0, tax - 17235)   // minus primary rebate
}

export function calculateSADeductions(annualGross: number, periodGross: number, periodsPerYear: number = 12, pensionRate = 0.075) {
  return {
    paye:   r(calculateSAPAYE(annualGross) / periodsPerYear),
    uif:    r(Math.min(periodGross, 17712) * 0.01),   // UIF is flat per period
    pension:r(periodGross * pensionRate),
  }
}

// ═══════════════════════════════
// NIGERIA — NTA 2025
// ═══════════════════════════════
export function calculateNigeriaIncomeTax(annualGross: number): number {
  const brackets = [
    { min: 0,         max: 800000,   rate: 0 },
    { min: 800000,    max: 3000000,  rate: 0.15 },
    { min: 3000000,   max: 12000000, rate: 0.18 },
    { min: 12000000,  max: 25000000, rate: 0.21 },
    { min: 25000000,  max: 52000000, rate: 0.23 },
    { min: 52000000,  max: Infinity, rate: 0.25 },
  ]
  let tax = 0
  for (const b of brackets) {
    if (annualGross <= b.min) break
    tax += (Math.min(annualGross, b.max) - b.min) * b.rate
  }
  return tax
}

export function calculateNigeriaDeductions(params: {
  periodGross: number
  basicSalary: number
  housingAllowance: number
  transportAllowance: number
  periodsPerYear: number   // ← new
}) {
  const annualGross = params.periodGross * params.periodsPerYear
  const pensionBase = params.basicSalary + params.housingAllowance + params.transportAllowance
  return {
    paye:   r(calculateNigeriaIncomeTax(annualGross) / params.periodsPerYear),
    pension:r(pensionBase * 0.08),
    nhf:    r(params.basicSalary * 0.025),
  }
}

// ═══════════════════════════════
// PHILIPPINES — 2025 TRAIN Law
// ═══════════════════════════════
export function calculatePhilippinesWithholdingTax(annualGross: number): number {
  const brackets = [
    { min: 0,         max: 250000,  rate: 0,    base: 0 },
    { min: 250000,    max: 400000,  rate: 0.20, base: 0 },
    { min: 400000,    max: 800000,  rate: 0.25, base: 30000 },
    { min: 800000,    max: 2000000, rate: 0.30, base: 130000 },
    { min: 2000000,   max: 8000000, rate: 0.32, base: 490000 },
    { min: 8000000,   max: Infinity,rate: 0.35, base: 2410000 },
  ]
  for (const b of brackets) {
    if (annualGross > b.min && (annualGross <= b.max || b.max === Infinity)) {
      return b.base + (annualGross - b.min) * b.rate
    }
  }
  return 0
}

export function calculatePhilippinesDeductions(periodGross: number, periodsPerYear: number = 24) {
  const annualGross = periodGross * periodsPerYear
  const mssCapped   = Math.min(Math.max(periodGross, 5000), 35000)
  const phCapped    = Math.min(Math.max(periodGross, 10000), 100000)
  return {
    withholdingTax: r(calculatePhilippinesWithholdingTax(annualGross) / periodsPerYear),
    sss:            r(mssCapped * 0.05),
    philHealth:     r(phCapped * 0.025),
    pagIbig:        Math.min(r(periodGross * 0.02), 200),
  }
}

// ═══════════════════════════════
// NEW ZEALAND — 2025
// ═══════════════════════════════
export function calculateNZPAYE(annualGross: number): number {
  const brackets = [
    { min: 0,      max: 14000,   rate: 0.105 },
    { min: 14000,  max: 48000,   rate: 0.175 },
    { min: 48000,  max: 70000,   rate: 0.30 },
    { min: 70000,  max: 180000,  rate: 0.33 },
    { min: 180000, max: Infinity,rate: 0.39 },
  ]
  let tax = 0
  for (const b of brackets) {
    if (annualGross <= b.min) break
    tax += (Math.min(annualGross, b.max) - b.min) * b.rate
  }
  return tax
}

export function calculateNZDeductions(annualGross: number, periodsPerYear: number = 26, kiwiSaverRate = 0.03, hasStudentLoan = false) {
  return {
    paye:        r(calculateNZPAYE(annualGross) / periodsPerYear),
    acc:         r(Math.min(annualGross, 139384) * 0.0139 / periodsPerYear),
    kiwiSaver:   r(annualGross * kiwiSaverRate / periodsPerYear),
    studentLoan: hasStudentLoan ? r(Math.max(0, annualGross - 24128) * 0.12 / periodsPerYear) : 0,
  }
}

// ═══════════════════════════════
// PAKISTAN — FBR 2024-25
// ═══════════════════════════════
export function calculatePakistanIncomeTax(annualGross: number): number {
  const brackets = [
    { min: 0,        max: 600000,   rate: 0,     base: 0 },
    { min: 600000,   max: 1200000,  rate: 0.05,  base: 0 },
    { min: 1200000,  max: 2200000,  rate: 0.15,  base: 30000 },
    { min: 2200000,  max: 3200000,  rate: 0.25,  base: 180000 },
    { min: 3200000,  max: 4100000,  rate: 0.30,  base: 430000 },
    { min: 4100000,  max: 6000000,  rate: 0.35,  base: 700000 },
    { min: 6000000,  max: Infinity, rate: 0.395, base: 1365000 },
  ]
  for (const b of brackets) {
    if (annualGross > b.max && b.max !== Infinity) continue
    if (annualGross <= b.min) return 0
    return b.base + (annualGross - b.min) * b.rate
  }
  return 0
}

export function calculatePakistanDeductions(periodGross: number, basicSalary: number, periodsPerYear: number = 12) {
  const annualGross = periodGross * periodsPerYear
  return {
    incomeTax: r(calculatePakistanIncomeTax(annualGross) / periodsPerYear),
    eobi:      370,    // flat PKR 370/month regardless of frequency
    pf:        r(basicSalary * 0.0833),
  }
}
