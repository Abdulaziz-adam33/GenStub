import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'ADP Pay Stub — How to Read It, Common Codes Explained (2025)',
  description: 'Complete guide to reading your ADP pay stub. Learn what every code means, how to access your ADP payslip online, and what to do when your ADP pay stub has an error.',
  keywords: ['ADP pay stub', 'ADP paycheck stub', 'ADP pay stub codes', 'how to read ADP pay stub', 'ADP payroll'],
}

const earningCodes = [
  { code: 'REG', meaning: 'Regular Pay', notes: 'Your standard hourly or salaried pay for the period.' },
  { code: 'OT', meaning: 'Overtime', notes: 'Hours beyond 40/week at 1.5× rate (federal minimum; some states are higher).' },
  { code: 'BONUS', meaning: 'Bonus', notes: 'Performance or signing bonus. May be taxed at the flat supplemental rate (22% federal).' },
  { code: 'COMM', meaning: 'Commission', notes: 'Sales commission earnings.' },
  { code: 'HOL', meaning: 'Holiday Pay', notes: 'Pay for company-designated public holidays.' },
  { code: 'VAC', meaning: 'Vacation Pay', notes: 'Paid out vacation time, either as you take it or on termination.' },
  { code: 'SICK', meaning: 'Sick Pay', notes: 'Paid sick leave used in the period.' },
  { code: 'PTO', meaning: 'Paid Time Off', notes: 'Consolidated leave that covers vacation and sick days together.' },
  { code: 'RETRO', meaning: 'Retroactive Pay', notes: 'A pay correction for a prior period — catch-up for a raise applied late, for example.' },
]

const deductionCodes = [
  { code: 'FWT', meaning: 'Federal Withholding Tax', notes: 'Federal income tax based on your W-4 and current year brackets.' },
  { code: 'FICA-SS', meaning: 'Social Security (FICA)', notes: '6.2% on earnings up to $176,100 (2025 wage base).' },
  { code: 'FICA-M', meaning: 'Medicare (FICA)', notes: '1.45% with no earnings cap. Additional 0.9% above $200,000.' },
  { code: 'SWT', meaning: 'State Withholding Tax', notes: 'State income tax. Zero in Alaska, Florida, Nevada, NH, SD, TN, TX, WA, WY.' },
  { code: 'LWT', meaning: 'Local Withholding Tax', notes: 'City or county income tax where applicable (e.g. New York City, Philadelphia).' },
  { code: '401K', meaning: '401(k) Contribution', notes: 'Pre-tax retirement contribution. 2025 limit: $23,500 employee ($30,500 if 50+).' },
  { code: 'ROTH', meaning: 'Roth 401(k)', notes: 'Post-tax retirement contribution. Same limits as traditional 401(k).' },
  { code: 'MED', meaning: 'Medical Insurance', notes: 'Employee share of employer-sponsored health insurance premium.' },
  { code: 'DENT', meaning: 'Dental Insurance', notes: 'Employee share of dental coverage premium.' },
  { code: 'VIS', meaning: 'Vision Insurance', notes: 'Employee share of vision coverage premium.' },
  { code: 'HSA', meaning: 'Health Savings Account', notes: 'Pre-tax contribution to HSA. 2025 limits: $4,300 individual, $8,550 family.' },
  { code: 'FSA', meaning: 'Flexible Spending Account', notes: 'Pre-tax contribution to FSA. 2025 limit: $3,300.' },
  { code: 'GTL', meaning: 'Group Term Life (imputed income)', notes: 'Employer-paid life insurance over $50,000 is taxable income — this is the imputed value.' },
  { code: 'GARN', meaning: 'Wage Garnishment', notes: 'Court-ordered deduction for debt, child support, or student loans.' },
]

export default function ADPPayStubPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Pay Stub Guide</p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          How to Read Your ADP Pay Stub — Every Code Explained
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          ADP processes payroll for about 1 in 6 US workers. If your employer uses ADP, your pay stub has a specific layout and a set of abbreviation codes that are not always self-explanatory. This guide explains all of them.
        </p>
      </div>

      <AdSenseAd slot="5566778855" format="horizontal" className="mb-10" />

      <div className="prose prose-lg text-charcoal/70 space-y-6">

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">How to access your ADP pay stubs</h2>
        <p>If your employer uses ADP, you access your pay stubs through the ADP employee self-service portal at <strong>my.adp.com</strong>. You need the registration code your employer provided when they set up your account. If you never received one, ask your HR or payroll department — they can resend it.</p>
        <p>Once logged in: go to <strong>Myself → Pay → Pay Statements</strong>. You can view, download, and print any historical pay stub from the date your employer started using ADP. PDF downloads are available for every statement.</p>
        <p>If your employer recently switched to ADP, pay stubs from before the switch may not be available in the portal. You would need to request those from your previous payroll provider or HR department directly.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">The structure of an ADP pay stub</h2>
        <p>ADP pay stubs have a consistent layout regardless of which ADP product your employer uses (RUN Powered by ADP, ADP Workforce Now, ADP TotalSource, etc.). The top section shows employer and employee information. Below that are two tables side by side: earnings on the left, deductions on the right. The bottom shows net pay, and below the main table is a year-to-date (YTD) summary.</p>
        <p>The YTD section is important at tax time — it shows your cumulative gross pay, total taxes withheld, and total deductions for the calendar year to date. When you receive your W-2 in January, the figures should reconcile with your final pay stub's YTD totals.</p>

        <AdSenseAd slot="6677889966" format="horizontal" className="my-8" />

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">ADP earnings codes</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 text-left font-semibold w-24">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
                <th className="px-4 py-3 text-left font-semibold">What it is</th>
              </tr>
            </thead>
            <tbody>
              {earningCodes.map((c, i) => (
                <tr key={c.code} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                  <td className="px-4 py-3 font-mono font-bold text-teal-dark">{c.code}</td>
                  <td className="px-4 py-3 font-medium text-navy">{c.meaning}</td>
                  <td className="px-4 py-3 text-charcoal/70">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">ADP deduction codes</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 text-left font-semibold w-24">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
                <th className="px-4 py-3 text-left font-semibold">What it is</th>
              </tr>
            </thead>
            <tbody>
              {deductionCodes.map((c, i) => (
                <tr key={c.code} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                  <td className="px-4 py-3 font-mono font-bold text-red-600">{c.code}</td>
                  <td className="px-4 py-3 font-medium text-navy">{c.meaning}</td>
                  <td className="px-4 py-3 text-charcoal/70">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">What to do if your ADP pay stub looks wrong</h2>
        <p>First, check whether the error is in the current period or in the YTD totals. A one-off error in a single pay period (wrong hours, missing bonus, wrong rate) needs to be corrected in the next payroll run — ask your payroll or HR team to issue a correction or retroactive adjustment (it will appear as RETRO on your next stub).</p>
        <p>If the issue is with tax withholding — you're withholding too much or too little — the fix is to submit a new W-4 to your employer. Too much withholding means a refund at tax time but less take-home pay now. Too little means you may owe when you file.</p>
        <p>If you believe your FICA taxes are wrong, check against the current year's rates: Social Security is 6.2% on the first $176,100 of wages (2025), and Medicare is 1.45% on all wages. If the amounts don't match those rates multiplied by your gross pay, raise it with your payroll team.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Need a pay stub but don't use ADP?</h2>
        <p>If your employer doesn't use ADP or another payroll provider — perhaps you're self-employed, a contractor, or your employer issues pay manually — you can generate a professional pay stub that matches the quality and format of an ADP-issued document using GenStub. It's free, includes all the fields banks and landlords look for, and downloads as a watermark-free PDF.</p>

        <div className="mt-6 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
          <h3 className="font-semibold text-navy mb-2">Generate a professional US pay stub</h3>
          <p className="text-sm text-charcoal/60 mb-4">All 50 states, current 2025 federal tax brackets, FICA auto-calculated. Looks like it came from a payroll system.</p>
          <Link href="/pay-stub-generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
            Generate US Pay Stub →
          </Link>
        </div>
      </div>
    </article>
  )
}
