import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Payslip Template — UK, Australia, New Zealand & South Africa (2025)',
  description: 'Free payslip template guide for UK, Australia, New Zealand and South Africa. Learn what your payslip must legally contain, how to read each section, and generate one instantly.',
  keywords: ['payslip template', 'payslip template UK', 'payslip template Australia', 'free payslip template', 'payslip format'],
}

const ukLegalReqs = [
  { field: 'Gross pay', required: true },
  { field: 'Net pay', required: true },
  { field: 'Variable deductions (must be itemised)', required: true },
  { field: 'Fixed deductions (can be shown as a total with annual statement of components)', required: true },
  { field: 'Hours worked (if pay varies by hours)', required: true },
  { field: 'Tax code', required: false },
  { field: 'NI number and NI category letter', required: false },
  { field: 'Pay period', required: false },
]

const auLegalReqs = [
  { field: 'Employer name and ABN', required: true },
  { field: 'Employee name', required: true },
  { field: 'Pay period dates', required: true },
  { field: 'Gross pay', required: true },
  { field: 'Net pay', required: true },
  { field: 'Amount and type of each allowance paid', required: true },
  { field: 'Deductions itemised', required: true },
  { field: 'Leave balances (annual leave, sick leave)', required: true },
  { field: 'Superannuation fund name and amount', required: true },
]

export default function PayslipTemplatePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Payslip Guide</p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          Payslip Template — What Must Be Included by Law
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          In the UK, Australia, New Zealand and South Africa, payslips are a legal requirement — employers must issue them. But the law also specifies what must appear on them. A template that misses required fields isn't just incomplete; it may mean your employer is in breach of employment law.
        </p>
      </div>

      <AdSenseAd slot="7788990077" format="horizontal" className="mb-10" />

      <div className="prose prose-lg text-charcoal/70 space-y-6">

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">UK payslip — legal requirements</h2>
        <p>Under the Employment Rights Act 1996 (as amended by the Employment Rights Act 2018), all UK employees and workers are entitled to a payslip. Agency workers are also included. Employers who fail to provide payslips can be taken to an employment tribunal.</p>
        <p>The law specifies certain fields that must appear on every UK payslip. These are enforced by HMRC and the Employment Rights Act:</p>

        <div className="my-5 space-y-2">
          {ukLegalReqs.map((r, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white border border-cream-dark rounded-lg">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${r.required ? 'bg-teal-brand text-navy' : 'bg-cream-dark text-mist'}`}>
                {r.required ? '✓' : '○'}
              </span>
              <span className={`text-sm ${r.required ? 'font-medium text-navy' : 'text-charcoal/60'}`}>
                {r.field} {r.required ? <span className="text-teal-dark font-semibold">(legally required)</span> : <span className="text-mist">(recommended)</span>}
              </span>
            </div>
          ))}
        </div>

        <p>The 2018 amendment added one important requirement: if an employee's pay varies based on the number of hours worked, the payslip must show how many hours the payment covers. This affects casual workers, zero-hours contract employees, and hourly paid staff.</p>

        <h3 className="font-semibold text-navy text-lg mt-6">UK deductions on a payslip</h3>
        <p>For the 2025/26 tax year, UK payslips show PAYE income tax (personal allowance £12,570; 20% basic rate up to £50,270; 40% higher rate up to £125,140), National Insurance contributions (8% on earnings £12,570–£50,270; 2% above), workplace pension contributions (minimum 5% employee on qualifying earnings £6,240–£50,270), and student loan repayments where applicable (Plan 2 threshold: £27,295).</p>

        <AdSenseAd slot="8899001188" format="horizontal" className="my-8" />

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Australian payslip — legal requirements</h2>
        <p>In Australia, payslips are required under the Fair Work Act 2009. Employers must provide a payslip within one working day of paying an employee. Electronic payslips (email or online portal) are perfectly valid.</p>
        <p>The Fair Work Act specifies these required fields:</p>

        <div className="my-5 space-y-2">
          {auLegalReqs.map((r, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white border border-cream-dark rounded-lg">
              <span className="w-5 h-5 rounded-full bg-teal-brand flex items-center justify-center text-xs font-bold text-navy flex-shrink-0">✓</span>
              <span className="text-sm font-medium text-navy">{r.field}</span>
            </div>
          ))}
        </div>

        <p>Leave balances are a unique requirement of Australian payslips — UK and US pay stubs typically omit them. Australian employees are entitled to see exactly how much annual leave and personal/sick leave they have accrued and available. Omitting this from a payslip is non-compliant.</p>
        <p>Superannuation is the other distinctive feature. The employer's super contribution (11.5% in 2024/25; 12% from July 2025) must be shown on the payslip even though it does not affect the employee's net pay. It goes directly to the employee's super fund, not via their pay.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">New Zealand payslip requirements</h2>
        <p>New Zealand's Employment Relations Act 2000 requires employers to keep wage and time records but does not technically mandate that payslips be provided to employees. However, the Holidays Act 2003 creates de facto payslip requirements by obligating employers to calculate and inform employees of their leave entitlements. In practice, all NZ employers provide payslips as part of standard payroll.</p>
        <p>A New Zealand payslip should show PAYE withheld (calculated against the correct tax code — M, ME, SH, STC, etc.), ACC Earners' Levy (1.39% in 2025), KiwiSaver contribution (minimum 3% employee), student loan repayment where applicable (12% above the repayment threshold of NZ$24,128), and leave balances.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">South Africa payslip requirements</h2>
        <p>In South Africa, the Basic Conditions of Employment Act (BCEA) requires employers to give employees a payslip (called a wage advice or pay advice) when paying wages. The payslip must show employer details, employee details, the period of payment, gross remuneration and its components, all deductions itemised (including PAYE, UIF at 1%, and any other deductions), and net pay.</p>
        <p>SARS (South African Revenue Service) requires that PAYE is withheld and remitted monthly via the EMP201 return. Employees receive an IRP5 or IT3(a) certificate annually summarising their payroll information — the monthly payslip figures should reconcile with this annual certificate.</p>

        <div className="mt-10 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
          <h3 className="font-semibold text-navy mb-2">Generate a compliant payslip for your country</h3>
          <p className="text-sm text-charcoal/60 mb-4">GenStub supports UK, Australia, New Zealand and South Africa with current statutory deduction rates, leave balance fields, and legally required content. Free, watermark-free PDF.</p>
          <Link href="/payslip-generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
            Generate Payslip →
          </Link>
        </div>
      </div>
    </article>
  )
}
