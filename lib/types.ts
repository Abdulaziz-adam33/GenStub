export type Country =
  | 'us' | 'india' | 'uk' | 'canada' | 'australia'
  | 'uae' | 'south-africa' | 'kenya' | 'nigeria'
  | 'philippines' | 'new-zealand' | 'pakistan'

export type DocumentTheme = 'navy' | 'forest' | 'slate' | 'mono'
export type PayFrequency = 'weekly' | 'bi-weekly' | 'semi-monthly' | 'monthly'
export type CalculationMode = 'auto' | 'manual'

export interface CompanyInfo {
  name: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  phone: string
  email: string
  ein: string
  logoUrl?: string
}

export interface EmployeeInfo {
  name: string
  id: string
  designation: string
  department: string
  address: string
  city: string
  state: string
  startDate: string
  taxId: string
  bankName?: string
  accountNumber?: string
  paymentMode?: string
}

export interface PayPeriodInfo {
  startDate: string
  endDate: string
  payDate: string
  frequency: PayFrequency
  payPeriodNumber: string
}

export interface EarningLine {
  label: string
  amount: number
  ytd: number
  isCustom?: boolean
}

export interface DeductionLine {
  label: string
  amount: number
  ytd: number
  isCustom?: boolean
}

export interface LeaveBalance {
  label: string
  used: number
  available: number
  unit: string
}

export interface DocumentData {
  country: Country
  theme: DocumentTheme
  calculationMode: CalculationMode
  company: CompanyInfo
  employee: EmployeeInfo
  payPeriod: PayPeriodInfo
  earnings: EarningLine[]
  deductions: DeductionLine[]
  leaveBalances?: LeaveBalance[]
  grossPay: number
  totalDeductions: number
  netPay: number
  ytdGross: number
  ytdDeductions: number
  ytdNet: number
  currency: string
  currencySymbol: string
  documentRef: string
  notes?: string
}

export interface CountryConfig {
  code: Country
  name: string
  flag: string
  currency: string
  currencySymbol: string
  documentTitle: string
  region: string
  description: string
  earningLabels: string[]
  defaultDeductions: string[]
  requiresLeaveBalance: boolean
  taxTerminology: string
}

export const COUNTRY_CONFIGS: Record<Country, CountryConfig> = {
  us: {
    code: 'us', name: 'United States', flag: '🇺🇸',
    currency: 'USD', currencySymbol: '$',
    documentTitle: 'Pay Stub', region: 'North America',
    description: 'Federal & state taxes, FICA',
    earningLabels: ['Regular Pay', 'Overtime', 'Bonus', 'Commission', 'Other'],
    defaultDeductions: ['Federal Income Tax', 'Social Security', 'Medicare', 'State Income Tax', '401(k)', 'Health Insurance'],
    requiresLeaveBalance: false, taxTerminology: 'FICA',
  },
  india: {
    code: 'india', name: 'India', flag: '🇮🇳',
    currency: 'INR', currencySymbol: '₹',
    documentTitle: 'Salary Slip', region: 'South Asia',
    description: 'PF, ESI, PT & TDS compliant',
    earningLabels: ['Basic Salary', 'HRA', 'Dearness Allowance', 'Conveyance Allowance', 'Medical Allowance', 'Special Allowance', 'LTA', 'Other Allowance'],
    defaultDeductions: ['EPF (Employee)', 'ESI', 'Professional Tax', 'TDS (Income Tax)'],
    requiresLeaveBalance: false, taxTerminology: 'TDS',
  },
  uk: {
    code: 'uk', name: 'United Kingdom', flag: '🇬🇧',
    currency: 'GBP', currencySymbol: '£',
    documentTitle: 'Payslip', region: 'Europe',
    description: 'PAYE, NI & pension compliant',
    earningLabels: ['Basic Pay', 'Overtime', 'Bonus', 'Commission', 'Other'],
    defaultDeductions: ['Income Tax (PAYE)', 'National Insurance', 'Pension (Employee)', 'Student Loan'],
    requiresLeaveBalance: true, taxTerminology: 'PAYE',
  },
  canada: {
    code: 'canada', name: 'Canada', flag: '🇨🇦',
    currency: 'CAD', currencySymbol: 'CA$',
    documentTitle: 'Pay Stub', region: 'North America',
    description: 'CPP, EI & federal/provincial tax',
    earningLabels: ['Regular Pay', 'Overtime', 'Vacation Pay', 'Bonus', 'Other'],
    defaultDeductions: ['Federal Income Tax', 'Provincial Income Tax', 'CPP', 'CPP2', 'EI'],
    requiresLeaveBalance: false, taxTerminology: 'CPP/EI',
  },
  australia: {
    code: 'australia', name: 'Australia', flag: '🇦🇺',
    currency: 'AUD', currencySymbol: 'A$',
    documentTitle: 'Payslip', region: 'Oceania',
    description: 'PAYG, Medicare & Super compliant',
    earningLabels: ['Ordinary Hours', 'Overtime', 'Annual Leave', 'Bonus', 'Other'],
    defaultDeductions: ['PAYG Withholding', 'Medicare Levy', 'Salary Sacrifice', 'Other'],
    requiresLeaveBalance: true, taxTerminology: 'PAYG',
  },
  uae: {
    code: 'uae', name: 'UAE / Gulf', flag: '🇦🇪',
    currency: 'AED', currencySymbol: 'AED',
    documentTitle: 'Salary Slip', region: 'Middle East',
    description: 'No income tax — allowance-based',
    earningLabels: ['Basic Salary', 'Housing Allowance', 'Transport Allowance', 'Phone Allowance', 'Medical Allowance', 'Other Allowance'],
    defaultDeductions: ['GPSSA (UAE Nationals Only)', 'Other Deductions'],
    requiresLeaveBalance: false, taxTerminology: 'None',
  },
  'south-africa': {
    code: 'south-africa', name: 'South Africa', flag: '🇿🇦',
    currency: 'ZAR', currencySymbol: 'R',
    documentTitle: 'Payslip', region: 'Africa',
    description: 'PAYE, UIF & SDL compliant (SARS)',
    earningLabels: ['Basic Salary', 'Overtime', 'Bonus', 'Commission', 'Other'],
    defaultDeductions: ['PAYE', 'UIF', 'Pension Fund', 'Medical Aid'],
    requiresLeaveBalance: true, taxTerminology: 'PAYE',
  },
  kenya: {
    code: 'kenya', name: 'Kenya', flag: '🇰🇪',
    currency: 'KES', currencySymbol: 'KSh',
    documentTitle: 'Payslip', region: 'Africa',
    description: 'PAYE, SHA, NSSF & AHL compliant',
    earningLabels: ['Basic Salary', 'House Allowance', 'Transport Allowance', 'Medical Allowance', 'Other Allowance'],
    defaultDeductions: ['PAYE', 'NSSF', 'SHA', 'AHL (Housing Levy)', 'NITA'],
    requiresLeaveBalance: false, taxTerminology: 'PAYE',
  },
  nigeria: {
    code: 'nigeria', name: 'Nigeria', flag: '🇳🇬',
    currency: 'NGN', currencySymbol: '₦',
    documentTitle: 'Payslip', region: 'Africa',
    description: 'PAYE (NTA 2025), Pension & NHF',
    earningLabels: ['Basic Salary', 'Housing Allowance', 'Transport Allowance', 'Utilities', 'Leave Allowance', 'Other'],
    defaultDeductions: ['PAYE', 'Pension (Employee 8%)', 'NHF'],
    requiresLeaveBalance: false, taxTerminology: 'PAYE',
  },
  philippines: {
    code: 'philippines', name: 'Philippines', flag: '🇵🇭',
    currency: 'PHP', currencySymbol: '₱',
    documentTitle: 'Payslip', region: 'Southeast Asia',
    description: 'SSS, PhilHealth & Pag-IBIG compliant',
    earningLabels: ['Basic Pay', 'Overtime', 'Holiday Pay', 'Allowances', 'Other'],
    defaultDeductions: ['Withholding Tax', 'SSS', 'PhilHealth', 'Pag-IBIG (HDMF)'],
    requiresLeaveBalance: false, taxTerminology: 'BIR/TRAIN',
  },
  'new-zealand': {
    code: 'new-zealand', name: 'New Zealand', flag: '🇳🇿',
    currency: 'NZD', currencySymbol: 'NZ$',
    documentTitle: 'Payslip', region: 'Oceania',
    description: 'PAYE, ACC & KiwiSaver compliant',
    earningLabels: ['Ordinary Hours', 'Overtime', 'Annual Leave', 'Bonus', 'Other'],
    defaultDeductions: ['PAYE', 'ACC Earners\' Levy', 'KiwiSaver (Employee)', 'Student Loan'],
    requiresLeaveBalance: true, taxTerminology: 'PAYE',
  },
  pakistan: {
    code: 'pakistan', name: 'Pakistan', flag: '🇵🇰',
    currency: 'PKR', currencySymbol: 'Rs.',
    documentTitle: 'Salary Slip', region: 'South Asia',
    description: 'Income tax & EOBI compliant',
    earningLabels: ['Basic Salary', 'House Rent Allowance', 'Conveyance Allowance', 'Medical Allowance', 'Other Allowance'],
    defaultDeductions: ['Income Tax', 'EOBI', 'Provident Fund'],
    requiresLeaveBalance: false, taxTerminology: 'FBR',
  },
}

export const TIER1_COUNTRIES: Country[] = ['us', 'india', 'uk', 'canada', 'australia', 'uae', 'pakistan']
export const TIER2_COUNTRIES: Country[] = ['south-africa', 'kenya', 'nigeria', 'philippines', 'new-zealand']
export const ALL_COUNTRIES: Country[] = [...TIER1_COUNTRIES, ...TIER2_COUNTRIES]

export const THEME_COLORS: Record<DocumentTheme, {
  headerBg: string; headerText: string; accentBg: string;
  accentText: string; rowAlt: string; border: string;
  label: string;
}> = {
  navy: {
    headerBg: '#0B1F3A', headerText: '#FFFFFF', accentBg: '#0CC8A8',
    accentText: '#0B1F3A', rowAlt: '#F0F7FF', border: '#CBD8E8', label: 'Navy',
  },
  forest: {
    headerBg: '#1A4731', headerText: '#FFFFFF', accentBg: '#4CAF7D',
    accentText: '#FFFFFF', rowAlt: '#F0FAF4', border: '#B8DAC6', label: 'Forest',
  },
  slate: {
    headerBg: '#2D3748', headerText: '#FFFFFF', accentBg: '#718096',
    accentText: '#FFFFFF', rowAlt: '#F7FAFC', border: '#CBD5E0', label: 'Slate',
  },
  mono: {
    headerBg: '#000000', headerText: '#FFFFFF', accentBg: '#333333',
    accentText: '#FFFFFF', rowAlt: '#F9F9F9', border: '#CCCCCC', label: 'Mono',
  },
}

// ─── Pay frequency helpers ────────────────────────────────────────────────

export function getPeriodsPerYear(freq: PayFrequency): number {
  switch (freq) {
    case 'weekly':       return 52
    case 'bi-weekly':    return 26
    case 'semi-monthly': return 24
    case 'monthly':      return 12
    default:             return 12
  }
}

/** Which frequencies a country supports, in display order */
export const COUNTRY_FREQ_OPTIONS: Record<Country, { value: PayFrequency; label: string }[]> = {
  us: [
    { value: 'weekly',       label: 'Weekly (52/yr)' },
    { value: 'bi-weekly',    label: 'Bi-weekly (26/yr) — most common' },
    { value: 'semi-monthly', label: 'Semi-monthly (24/yr)' },
    { value: 'monthly',      label: 'Monthly (12/yr)' },
  ],
  india: [
    { value: 'monthly', label: 'Monthly' },
  ],
  uk: [
    { value: 'weekly',    label: 'Weekly (52/yr)' },
    { value: 'monthly',   label: 'Monthly (12/yr) — most common' },
  ],
  canada: [
    { value: 'weekly',       label: 'Weekly (52/yr)' },
    { value: 'bi-weekly',    label: 'Bi-weekly (26/yr) — most common' },
    { value: 'semi-monthly', label: 'Semi-monthly (24/yr)' },
    { value: 'monthly',      label: 'Monthly (12/yr)' },
  ],
  australia: [
    { value: 'weekly',    label: 'Weekly (52/yr)' },
    { value: 'bi-weekly', label: 'Fortnightly (26/yr) — most common' },
    { value: 'monthly',   label: 'Monthly (12/yr)' },
  ],
  uae: [
    { value: 'monthly', label: 'Monthly (WPS mandated by law)' },
  ],
  'south-africa': [
    { value: 'weekly',  label: 'Weekly (52/yr)' },
    { value: 'monthly', label: 'Monthly (12/yr) — most common' },
  ],
  kenya: [
    { value: 'weekly',  label: 'Weekly (52/yr)' },
    { value: 'monthly', label: 'Monthly (12/yr) — most common' },
  ],
  nigeria: [
    { value: 'monthly', label: 'Monthly' },
  ],
  philippines: [
    { value: 'semi-monthly', label: 'Semi-monthly (24/yr) — legally required' },
    { value: 'weekly',       label: 'Weekly (52/yr)' },
  ],
  'new-zealand': [
    { value: 'weekly',    label: 'Weekly (52/yr)' },
    { value: 'bi-weekly', label: 'Fortnightly (26/yr) — most common' },
    { value: 'monthly',   label: 'Monthly (12/yr)' },
  ],
  pakistan: [
    { value: 'monthly', label: 'Monthly' },
  ],
}

/** Default pay frequency per country */
export const COUNTRY_DEFAULT_FREQ: Record<Country, PayFrequency> = {
  us:            'bi-weekly',
  india:         'monthly',
  uk:            'monthly',
  canada:        'bi-weekly',
  australia:     'bi-weekly',
  uae:           'monthly',
  'south-africa':'monthly',
  kenya:         'monthly',
  nigeria:       'monthly',
  philippines:   'semi-monthly',
  'new-zealand': 'bi-weekly',
  pakistan:      'monthly',
}

/**
 * Given a pay date and frequency, returns the correct period start and end dates.
 * Period end = pay date. Period start = pay date minus (period length - 1 days).
 * Semi-monthly: splits the month at the 15th (1st–15th or 16th–end).
 */
export function calcPeriodDates(payDate: string, frequency: PayFrequency): { startDate: string; endDate: string } {
  const end = new Date(payDate)
  const start = new Date(payDate)

  switch (frequency) {
    case 'weekly':
      start.setDate(end.getDate() - 6)        // 7-day window
      break
    case 'bi-weekly':
      start.setDate(end.getDate() - 13)       // 14-day window
      break
    case 'semi-monthly':
      // If pay date falls on or before the 15th → period is 1st–15th
      // If pay date falls after the 15th → period is 16th–end of month
      if (end.getDate() <= 15) {
        start.setDate(1)
      } else {
        start.setDate(16)
      }
      break
    case 'monthly':
    default:
      start.setDate(1)                        // 1st of the same month
      break
  }

  const fmt = (d: Date) => d.toISOString().split('T')[0]
  return { startDate: fmt(start), endDate: fmt(end) }
}
