import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Salary Slip Format — Complete Guide with Examples (India, UAE, Pakistan)',
  description: 'Complete guide to salary slip format. Learn every section, what each component means, and what a legally correct salary slip must include. With worked examples for India, UAE and Pakistan.',
  keywords: ['salary slip format', 'salary slip format India', 'salary slip components', 'salary slip template format'],
}

const indiaComponents = [
  { name: 'Basic Salary', typical: '40–50% of CTC', taxable: 'Fully taxable', notes: 'Foundation of all other calculations. EPF is based on this.' },
  { name: 'HRA (House Rent Allowance)', typical: '40–50% of Basic', taxable: 'Partially exempt if rent paid', notes: 'Exempt up to the least of: actual HRA, rent paid minus 10% of basic, or 50% of basic (metro) / 40% (non-metro).' },
  { name: 'Dearness Allowance (DA)', typical: '0–30% of Basic', taxable: 'Fully taxable', notes: 'Common in government and PSU jobs. Adjusts pay for inflation.' },
  { name: 'Conveyance Allowance', typical: 'Fixed amount', taxable: 'Taxable (standard deduction covers)', notes: 'For travel between home and office.' },
  { name: 'Medical Allowance', typical: 'Fixed amount', taxable: 'Taxable (standard deduction covers)', notes: 'For medical expenses. Old exemption of ₹15,000 removed; covered under ₹50,000 standard deduction.' },
  { name: 'Special Allowance', typical: 'Balancing figure', taxable: 'Fully taxable', notes: 'Top-up to reach the agreed CTC after all other components are accounted for.' },
  { name: 'LTA (Leave Travel Allowance)', typical: 'Fixed amount', taxable: 'Exempt for actual travel costs (twice in 4 years)', notes: 'Claimed by submitting travel bills. Only domestic travel qualifies.' },
]

const deductions = [
  { name: 'EPF (Employee Provident Fund)', rate: '12% of Basic', cap: '₹1,800/mo if Basic > ₹15,000', notes: 'Goes into your PF account. Employer also contributes 12% (split between EPF and EPS).' },
  { name: 'ESI (Employee State Insurance)', rate: '0.75% of Gross', cap: 'Only if Gross ≤ ₹21,000/mo', notes: 'Provides medical and disability insurance. Employer contributes 3.25%.' },
  { name: 'Professional Tax (PT)', rate: 'State-specific', cap: 'Max ₹2,500/year', notes: 'Varies by state. Maharashtra, Karnataka, West Bengal are common. Some states have no PT.' },
  { name: 'TDS (Income Tax)', rate: 'Based on income slab', cap: 'None', notes: 'Deducted monthly based on projected annual income. New regime: zero tax up to ₹12L (FY 2025-26).' },
]

export default function SalarySlipFormatPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Complete Guide</p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          Salary Slip Format — Every Section Explained
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          A salary slip is more than a payment receipt. It's a legal document, a tax record, and proof of employment income — all in one. Here is what every section means and what a properly formatted salary slip must contain.
        </p>
      </div>

      <AdSenseAd slot="1122334411" format="horizontal" className="mb-10" />

      <div className="prose prose-lg text-charcoal/70 space-y-6">

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">What a salary slip must always contain</h2>
        <p>Regardless of country, every valid salary slip needs six things: employer details (name, address, registration number), employee details (name, ID, designation, department), the pay period it covers, a full breakdown of earnings components, a full breakdown of deductions, and the net pay — the amount actually paid into the employee's account.</p>
        <p>Missing any of these makes the document incomplete and potentially unusable for loan applications, visa applications, or tax filing.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Standard salary slip format — India</h2>
        <p>Indian salary slips are structured differently from pay stubs in most other countries. Instead of a single salary figure, earnings are broken into multiple named components. This is deliberate — different components have different tax treatment, which affects both how much tax an employee pays and what the employer can claim.</p>

        <h3 className="font-semibold text-navy text-lg mt-6">Earnings components</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Typical %</th>
                <th className="px-4 py-3 text-left font-semibold">Tax treatment</th>
              </tr>
            </thead>
            <tbody>
              {indiaComponents.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-navy">{c.name}</td>
                  <td className="px-4 py-3 text-charcoal/70">{c.typical}</td>
                  <td className="px-4 py-3 text-charcoal/70">{c.taxable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-navy text-lg mt-6">Statutory deductions (FY 2025-26)</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-3 text-left font-semibold">Deduction</th>
                <th className="px-4 py-3 text-left font-semibold">Rate</th>
                <th className="px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {deductions.map((d, i) => (
                <tr key={d.name} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-navy">{d.name}</td>
                  <td className="px-4 py-3 text-charcoal/70">{d.rate}</td>
                  <td className="px-4 py-3 text-charcoal/70">{d.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="2233445522" format="horizontal" className="my-8" />

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Salary slip format — UAE and Gulf</h2>
        <p>UAE salary slips look completely different from Indian ones. Since there is no personal income tax for expatriates in the UAE, there are no tax deductions on the slip. Instead, the document focuses on the allowance structure, which is central to how Gulf employment contracts are written.</p>
        <p>A typical UAE salary slip shows Basic Salary (usually 40–60% of total package), Housing Allowance, Transport Allowance, Phone Allowance, Medical Allowance, and Other Allowances. The only deduction for most expatriate employees is "Other Deductions" for any advances or voluntary contributions. UAE nationals employed in the private sector have a GPSSA (General Pension and Social Security Authority) deduction of 5%.</p>
        <p>UAE employers are legally required to pay salaries through the Wage Protection System (WPS) — a Central Bank programme that monitors salary payments. Every salary must be paid monthly, and late payment is a legal violation.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Salary slip format — Pakistan</h2>
        <p>Pakistani salary slips follow a similar component-based structure to India. Common earnings components include Basic Salary, House Rent Allowance (HRA, typically 45% of basic), Conveyance Allowance, Medical Allowance, and Utility Allowance. Deductions include Income Tax (based on FBR slabs), EOBI (Employees' Old-Age Benefits Institution, PKR 370/month employee contribution), and Provident Fund (8.33% of basic for most schemes).</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">What a salary slip is used for</h2>
        <p>Beyond its primary purpose as a pay record, a salary slip is frequently requested as supporting documentation for personal loan applications (banks want to verify regular income), home loan or mortgage applications (lenders typically ask for 3–6 months of payslips), rental applications (landlords use it to confirm affordability), visa applications (embassies require proof of employment and income), and income tax filing (it provides the figures you need for your annual return).</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Common mistakes on salary slips</h2>
        <p>The most frequent problems we see are: missing the pay period dates (just showing the month is not enough — start and end dates should be explicit), no document reference number (makes the slip look informal and harder to trace), net pay shown only in numbers without the amount in words (many banks specifically require this), and outdated deduction rates — such as still showing NHIF instead of SHA in Kenya, or using old EPF rates in India.</p>

        <div className="mt-10 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
          <h3 className="font-semibold text-navy mb-2">Generate a correctly formatted salary slip</h3>
          <p className="text-sm text-charcoal/60 mb-4">GenStub generates salary slips for India, UAE, and Pakistan with current rates, correct component structure, amount in words, and a unique document reference. Free, no watermark.</p>
          <Link href="/salary-slip-generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
            Generate Salary Slip →
          </Link>
        </div>
      </div>
    </article>
  )
}
