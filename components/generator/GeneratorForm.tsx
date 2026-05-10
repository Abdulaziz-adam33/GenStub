'use client'
import { useState } from 'react'
import { DocumentData, Country, COUNTRY_CONFIGS, COUNTRY_FREQ_OPTIONS, getPeriodsPerYear, calcPeriodDates } from '@/lib/types'
import { ChevronDown, Plus, Trash2, Calculator, PencilLine, Info } from 'lucide-react'
import { calculateUSDeductions, US_STATES } from '@/lib/calculations/us'
import { calculateIndiaDeductions, INDIA_STATES } from '@/lib/calculations/india'
import { calculateKenyaDeductions } from '@/lib/calculations/kenya'
import { calculateUKDeductions } from '@/lib/calculations/uk'
import {
  calculateCanadaDeductions,
  calculateAustraliaDeductions,
  calculateUAEDeductions,
  calculateSADeductions,
  calculateNigeriaDeductions,
  calculatePhilippinesDeductions,
  calculateNZDeductions,
  calculatePakistanDeductions,
} from '@/lib/calculations/other'

interface Props {
  data: DocumentData
  onChange: (updates: Partial<DocumentData>) => void
  country: Country
}

const Section = ({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white rounded-2xl border border-cream-dark shadow-card overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-cream transition-colors">
        <span className="font-semibold text-navy text-sm">{title}</span>
        <ChevronDown size={16} className={`text-mist transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-6 pb-6 pt-2">{children}</div>}
    </div>
  )
}

const Field = ({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-mist mt-1">{hint}</p>}
  </div>
)

const Input = ({ value, onChange, placeholder, type = 'text', className = '' }: {
  value: string | number; onChange: (v: string) => void; placeholder?: string; type?: string; className?: string
}) => (
  <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    className={`w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream focus:bg-white transition-colors font-dm placeholder:text-mist/60 ${className}`} />
)

const Select = ({ value, onChange, children, className = '' }: {
  value: string; onChange: (v: string) => void; children: React.ReactNode; className?: string
}) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    className={`w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream focus:bg-white transition-colors font-dm ${className}`}>
    {children}
  </select>
)

export default function GeneratorForm({ data, onChange, country }: Props) {
  const cfg = COUNTRY_CONFIGS[country]
  const [indiaState, setIndiaState] = useState('MH')
  const [indiaRegime, setIndiaRegime] = useState<'new' | 'old'>('new')
  const [usState, setUsState] = useState('NY')
  const [studentLoan, setStudentLoan] = useState<'none' | 'plan1' | 'plan2' | 'plan4' | 'postgrad'>('none')

  const updateCompany = (field: string, value: string) =>
    onChange({ company: { ...data.company, [field]: value } })
  const updateEmployee = (field: string, value: string) =>
    onChange({ employee: { ...data.employee, [field]: value } })
  const updatePayPeriod = (field: string, value: string) => {
    const updated = { ...data.payPeriod, [field]: value }
    if (field === 'payDate' || field === 'frequency') {
      const payDate = field === 'payDate'   ? value : data.payPeriod.payDate
      const freq    = field === 'frequency' ? value : data.payPeriod.frequency
      if (payDate) {
        const { startDate, endDate } = calcPeriodDates(payDate, freq as any)
        updated.startDate = startDate
        updated.endDate   = endDate
      }
    }
    onChange({ payPeriod: updated })
  }

  const updateEarning = (i: number, field: 'amount' | 'ytd', value: string) => {
    const earnings = [...data.earnings]
    earnings[i] = { ...earnings[i], [field]: parseFloat(value) || 0 }
    onChange({ earnings })
  }

  const addEarning = () =>
    onChange({ earnings: [...data.earnings, { label: 'Other Earnings', amount: 0, ytd: 0, isCustom: true }] })

  const removeEarning = (i: number) =>
    onChange({ earnings: data.earnings.filter((_, idx) => idx !== i) })

  const updateDeduction = (i: number, field: 'amount' | 'ytd' | 'label', value: string) => {
    const deductions = [...data.deductions]
    deductions[i] = { ...deductions[i], [field]: field === 'amount' || field === 'ytd' ? parseFloat(value) || 0 : value }
    onChange({ deductions })
  }

  const autoCalculate = () => {
    const gross = data.earnings.reduce((s, e) => s + (Number(e.amount) || 0), 0)
    if (gross === 0) return

    const periodsPerYear = getPeriodsPerYear(data.payPeriod.frequency)
    const annualGross    = gross * periodsPerYear
    let calcs: Record<string, number> = {}

    if (country === 'us') {
      const r = calculateUSDeductions(gross, data.ytdGross, usState, periodsPerYear)
      calcs = {
        'Federal Income Tax': r.federalTax,
        'Social Security':    r.socialSecurity,
        'Medicare':           r.medicare,
        'State Income Tax':   r.stateTax,
      }
    } else if (country === 'india') {
      const basic = data.earnings.find(e => e.label === 'Basic Salary')?.amount || gross * 0.4
      const r = calculateIndiaDeductions({
        basicSalary: basic, grossSalary: gross,
        annualGross, stateCode: indiaState, regime: indiaRegime,
      })
      calcs = { 'EPF (Employee)': r.epf, 'ESI': r.esi, 'Professional Tax': r.professionalTax, 'TDS (Income Tax)': r.tds }
    } else if (country === 'kenya') {
      const r = calculateKenyaDeductions(gross, periodsPerYear)
      calcs = { 'PAYE': r.paye, 'NSSF': r.nssf, 'SHA': r.sha, 'AHL (Housing Levy)': r.ahl, 'NITA': r.nita }
    } else if (country === 'uk') {
      const r = calculateUKDeductions({ annualGross, periodsPerYear, studentLoanPlan: studentLoan })
      calcs = { 'Income Tax (PAYE)': r.incomeTax, 'National Insurance': r.nationalInsurance, 'Pension (Employee)': r.pension, 'Student Loan': r.studentLoan }
    } else if (country === 'canada') {
      const r = calculateCanadaDeductions(annualGross, periodsPerYear)
      calcs = { 'Federal Income Tax': r.federalTax, 'Provincial Income Tax': r.provincialTax, 'CPP': r.cpp, 'CPP2': r.cpp2, 'EI': r.ei }
    } else if (country === 'australia') {
      const r = calculateAustraliaDeductions(annualGross, periodsPerYear)
      calcs = { 'PAYG Withholding': r.payg, 'Superannuation (Employer)': r.superannuation }
    } else if (country === 'uae') {
      calcs = {}
    } else if (country === 'south-africa') {
      const r = calculateSADeductions(annualGross, gross, periodsPerYear)
      calcs = { 'PAYE': r.paye, 'UIF': r.uif, 'Pension Fund': r.pension }
    } else if (country === 'nigeria') {
      const basic     = data.earnings.find(e => e.label === 'Basic Salary')?.amount     || gross * 0.4
      const housing   = data.earnings.find(e => e.label === 'Housing Allowance')?.amount || gross * 0.2
      const transport = data.earnings.find(e => e.label === 'Transport Allowance')?.amount || gross * 0.1
      const r = calculateNigeriaDeductions({ periodGross: gross, basicSalary: basic, housingAllowance: housing, transportAllowance: transport, periodsPerYear })
      calcs = { 'PAYE': r.paye, 'Pension (Employee 8%)': r.pension, 'NHF': r.nhf }
    } else if (country === 'philippines') {
      const r = calculatePhilippinesDeductions(gross, periodsPerYear)
      calcs = { 'Withholding Tax': r.withholdingTax, 'SSS': r.sss, 'PhilHealth': r.philHealth, 'Pag-IBIG (HDMF)': r.pagIbig }
    } else if (country === 'new-zealand') {
      const r = calculateNZDeductions(annualGross, periodsPerYear)
      calcs = { 'PAYE': r.paye, "ACC Earners' Levy": r.acc, 'KiwiSaver (Employee)': r.kiwiSaver, 'Student Loan': r.studentLoan }
    } else if (country === 'pakistan') {
      const basic = data.earnings.find(e => e.label === 'Basic Salary')?.amount || gross * 0.5
      const r = calculatePakistanDeductions(gross, basic, periodsPerYear)
      calcs = { 'Income Tax': r.incomeTax, 'EOBI': r.eobi, 'Provident Fund': r.pf }
    }

    const newDeductions = data.deductions.map(d => ({
      ...d,
      amount: calcs[d.label] !== undefined ? calcs[d.label] : d.amount,
    }))
    onChange({ deductions: newDeductions, calculationMode: 'auto' })
  }

  return (
    <div className="space-y-0">
      {/* Calc mode toggle */}
      <div className="bg-white rounded-2xl border border-cream-dark shadow-card p-5 mb-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-semibold text-navy text-sm mb-1">Calculation Mode</h3>
            <p className="text-xs text-mist">Choose how deductions are computed</p>
          </div>
          <div className="flex gap-2">
            {(['auto', 'manual'] as const).map(mode => (
              <button key={mode} onClick={() => { onChange({ calculationMode: mode }); if (mode === 'auto') autoCalculate() }}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  data.calculationMode === mode
                    ? 'bg-navy text-white'
                    : 'bg-cream text-charcoal hover:bg-cream-dark'
                }`}>
                {mode === 'auto' ? <><Calculator size={14} /> Auto-calculate</> : <><PencilLine size={14} /> Manual entry</>}
              </button>
            ))}
          </div>
        </div>

        {/* Country-specific auto-calc options */}
        {data.calculationMode === 'auto' && (
          <div className="mt-4 pt-4 border-t border-cream-dark flex gap-3 flex-wrap">
            {country === 'us' && (
              <Select value={usState} onChange={setUsState} className="w-48">
                {Object.entries(US_STATES).map(([code, s]) => (
                  <option key={code} value={code}>{s.name}</option>
                ))}
              </Select>
            )}
            {country === 'india' && (
              <>
                <Select value={indiaState} onChange={setIndiaState} className="w-44">
                  {Object.entries(INDIA_STATES).map(([code, s]) => (
                    <option key={code} value={code}>{s.name}</option>
                  ))}
                </Select>
                <Select value={indiaRegime} onChange={v => setIndiaRegime(v as 'new' | 'old')} className="w-44">
                  <option value="new">New Tax Regime</option>
                  <option value="old">Old Tax Regime</option>
                </Select>
              </>
            )}
            {country === 'uk' && (
              <Select value={studentLoan} onChange={v => setStudentLoan(v as typeof studentLoan)} className="w-48">
                <option value="none">No Student Loan</option>
                <option value="plan1">Student Loan Plan 1</option>
                <option value="plan2">Student Loan Plan 2</option>
                <option value="plan4">Student Loan Plan 4</option>
                <option value="postgrad">Postgraduate Loan</option>
              </Select>
            )}
            <button onClick={autoCalculate}
              className="flex items-center gap-1.5 px-4 py-2 bg-teal-brand text-navy text-sm font-semibold rounded-lg hover:bg-teal-dark transition-all">
              <Calculator size={14} /> Recalculate
            </button>
          </div>
        )}
      </div>

      {/* Company */}
      <Section title="🏢 Employer / Company Information">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Company Name" required>
            <Input value={data.company.name} onChange={v => updateCompany('name', v)} placeholder="Meridian Solutions Ltd" />
          </Field>
          <Field label="EIN / Company Reg No.">
            <Input value={data.company.ein} onChange={v => updateCompany('ein', v)} placeholder="47-1234567" />
          </Field>
          <Field label="Address" required>
            <Input value={data.company.address} onChange={v => updateCompany('address', v)} placeholder="450 Business Park, Suite 12" />
          </Field>
          <Field label="City">
            <Input value={data.company.city} onChange={v => updateCompany('city', v)} placeholder="New York" />
          </Field>
          <Field label={country === 'us' || country === 'canada' ? 'State / Province' : 'Region'}>
            <Input value={data.company.state} onChange={v => updateCompany('state', v)} placeholder="NY" />
          </Field>
          <Field label={country === 'uk' ? 'Postcode' : 'ZIP / Postal Code'}>
            <Input value={data.company.zip} onChange={v => updateCompany('zip', v)} placeholder="10001" />
          </Field>
          <Field label="Phone">
            <Input value={data.company.phone} onChange={v => updateCompany('phone', v)} placeholder="+1 212 555 0190" />
          </Field>
          <Field label="Email">
            <Input value={data.company.email} onChange={v => updateCompany('email', v)} type="email" placeholder="payroll@company.com" />
          </Field>
        </div>
      </Section>

      {/* Employee */}
      <Section title="👤 Employee Information">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Full Name" required>
            <Input value={data.employee.name} onChange={v => updateEmployee('name', v)} placeholder="Alex J. Morgan" />
          </Field>
          <Field label="Employee ID">
            <Input value={data.employee.id} onChange={v => updateEmployee('id', v)} placeholder="EMP-0042" />
          </Field>
          <Field label="Job Title / Designation">
            <Input value={data.employee.designation} onChange={v => updateEmployee('designation', v)} placeholder="Senior Analyst" />
          </Field>
          <Field label="Department">
            <Input value={data.employee.department} onChange={v => updateEmployee('department', v)} placeholder="Operations" />
          </Field>
          <Field label={country === 'us' ? 'SSN (last 4 digits)' : country === 'india' ? 'PAN Number' : country === 'uk' ? 'NI Number' : 'Tax ID / National ID'}>
            <Input value={data.employee.taxId} onChange={v => updateEmployee('taxId', v)} placeholder="***-**-4821" />
          </Field>
          <Field label="Start Date">
            <Input value={data.employee.startDate} onChange={v => updateEmployee('startDate', v)} type="date" />
          </Field>
          <Field label="Address">
            <Input value={data.employee.address} onChange={v => updateEmployee('address', v)} placeholder="123 Main Street" />
          </Field>
          <Field label="City">
            <Input value={data.employee.city} onChange={v => updateEmployee('city', v)} placeholder="New York" />
          </Field>
          {(country === 'india' || country === 'kenya' || country === 'nigeria' || country === 'philippines') && (
            <>
              <Field label="Bank Name">
                <Input value={data.employee.bankName || ''} onChange={v => updateEmployee('bankName', v)} placeholder="First National Bank" />
              </Field>
              <Field label="Account Number (masked)">
                <Input value={data.employee.accountNumber || ''} onChange={v => updateEmployee('accountNumber', v)} placeholder="****4821" />
              </Field>
            </>
          )}
        </div>
      </Section>

      {/* Pay Period */}
      <Section title="📅 Pay Period">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Period Start Date" required>
            <Input value={data.payPeriod.startDate} onChange={v => updatePayPeriod('startDate', v)} type="date" />
          </Field>
          <Field label="Period End Date" required>
            <Input value={data.payPeriod.endDate} onChange={v => updatePayPeriod('endDate', v)} type="date" />
          </Field>
          <Field label="Pay Date" required>
            <Input value={data.payPeriod.payDate} onChange={v => updatePayPeriod('payDate', v)} type="date" />
          </Field>
          <Field label="Pay Frequency">
            <Select value={data.payPeriod.frequency} onChange={v => updatePayPeriod('frequency', v)}>
              {COUNTRY_FREQ_OPTIONS[country].map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </Select>
          </Field>
        </div>
      </Section>

      {/* Earnings */}
      <Section title="💰 Earnings">
        <div className="space-y-2">
          <div className="grid grid-cols-[1fr_120px_120px_32px] gap-2 text-xs font-medium text-mist uppercase tracking-wider px-1 pb-1">
            <span>Description</span>
            <span className="text-right">Current ({cfg.currencySymbol})</span>
            <span className="text-right">YTD ({cfg.currencySymbol})</span>
            <span />
          </div>
          {data.earnings.map((e, i) => (
            <div key={i} className="grid grid-cols-[1fr_120px_120px_32px] gap-2 items-center">
              <Input value={e.label} onChange={v => { const earnings = [...data.earnings]; earnings[i] = { ...earnings[i], label: v }; onChange({ earnings }) }}
                placeholder="Earnings item" />
              <Input value={e.amount || ''} onChange={v => updateEarning(i, 'amount', v)} type="number" placeholder="0.00" className="text-right" />
              <Input value={e.ytd || ''} onChange={v => updateEarning(i, 'ytd', v)} type="number" placeholder="0.00" className="text-right" />
              {e.isCustom ? (
                <button onClick={() => removeEarning(i)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={14} />
                </button>
              ) : <div />}
            </div>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <button onClick={addEarning}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-teal-dark hover:bg-teal-light rounded-lg transition-colors font-medium">
              <Plus size={13} /> Add earning
            </button>
            <div className="text-sm font-semibold text-navy">
              Gross: {cfg.currencySymbol}{data.grossPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </Section>

      {/* Deductions */}
      <Section title="📉 Deductions">
        {data.calculationMode === 'auto' && (
          <div className="flex items-start gap-2 p-3 bg-teal-light border border-teal-brand/20 rounded-xl mb-4">
            <Info size={14} className="text-teal-dark mt-0.5 flex-shrink-0" />
            <p className="text-xs text-teal-dark">Auto-calculated using current {new Date().getFullYear()} rates. Switch to manual to override any figure.</p>
          </div>
        )}
        <div className="space-y-2">
          <div className="grid grid-cols-[1fr_120px_120px_32px] gap-2 text-xs font-medium text-mist uppercase tracking-wider px-1 pb-1">
            <span>Description</span>
            <span className="text-right">Current ({cfg.currencySymbol})</span>
            <span className="text-right">YTD ({cfg.currencySymbol})</span>
            <span />
          </div>
          {data.deductions.map((d, i) => (
            <div key={i} className="grid grid-cols-[1fr_120px_120px_32px] gap-2 items-center">
              <Input value={d.label} onChange={v => updateDeduction(i, 'label', v)} placeholder="Deduction item" />
              <Input value={d.amount || ''} onChange={v => updateDeduction(i, 'amount', v)} type="number" placeholder="0.00"
                className={`text-right ${data.calculationMode === 'auto' ? 'bg-teal-light border-teal-brand/30' : ''}`} />
              <Input value={d.ytd || ''} onChange={v => updateDeduction(i, 'ytd', v)} type="number" placeholder="0.00" className="text-right" />
              {d.isCustom ? (
                <button onClick={() => onChange({ deductions: data.deductions.filter((_, idx) => idx !== i) })}
                  className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={14} />
                </button>
              ) : <div />}
            </div>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <button onClick={() => onChange({ deductions: [...data.deductions, { label: 'Other Deduction', amount: 0, ytd: 0, isCustom: true }] })}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-teal-dark hover:bg-teal-light rounded-lg transition-colors font-medium">
              <Plus size={13} /> Add deduction
            </button>
            <div className="text-sm font-semibold text-red-500">
              Total: {cfg.currencySymbol}{data.totalDeductions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </Section>

      {/* Leave balances (AU, NZ, UK, SA) */}
      {data.leaveBalances && (
        <Section title="🏖 Leave Balances" defaultOpen={false}>
          <div className="space-y-3">
            {data.leaveBalances.map((l, i) => (
              <div key={i} className="grid grid-cols-3 gap-3">
                <Input value={l.label} onChange={v => {
                  const lb = [...(data.leaveBalances || [])]; lb[i] = { ...lb[i], label: v }; onChange({ leaveBalances: lb })
                }} placeholder="Leave type" />
                <Field label="Used">
                  <Input value={l.used} onChange={v => {
                    const lb = [...(data.leaveBalances || [])]; lb[i] = { ...lb[i], used: parseFloat(v) || 0 }; onChange({ leaveBalances: lb })
                  }} type="number" placeholder="0" />
                </Field>
                <Field label="Available">
                  <Input value={l.available} onChange={v => {
                    const lb = [...(data.leaveBalances || [])]; lb[i] = { ...lb[i], available: parseFloat(v) || 0 }; onChange({ leaveBalances: lb })
                  }} type="number" placeholder="20" />
                </Field>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Notes */}
      <Section title="📝 Notes (optional)" defaultOpen={false}>
        <textarea value={data.notes || ''} onChange={e => onChange({ notes: e.target.value })}
          placeholder="Any additional notes to appear on the document..."
          rows={3}
          className="w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream focus:bg-white transition-colors font-dm resize-none" />
      </Section>

      {/* YTD Totals */}
      <Section title="📊 YTD Totals" defaultOpen={false}>
        <div className="grid grid-cols-3 gap-4">
          <Field label={`YTD Gross (${cfg.currencySymbol})`}>
            <Input value={data.ytdGross || ''} onChange={v => onChange({ ytdGross: parseFloat(v) || 0 })} type="number" placeholder="0.00" />
          </Field>
          <Field label={`YTD Deductions (${cfg.currencySymbol})`}>
            <Input value={data.ytdDeductions || ''} onChange={v => onChange({ ytdDeductions: parseFloat(v) || 0 })} type="number" placeholder="0.00" />
          </Field>
          <Field label={`YTD Net (${cfg.currencySymbol})`}>
            <Input value={data.ytdNet || ''} onChange={v => onChange({ ytdNet: parseFloat(v) || 0 })} type="number" placeholder="0.00" />
          </Field>
        </div>
      </Section>
    </div>
  )
}
