import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Pay Stub Calculator — Calculate Your Net Pay for Any Country (2025)',
  description: 'Free pay stub calculator for 12 countries. Calculate net pay after federal tax, Social Security, Medicare, state tax and voluntary deductions. Accurate 2025 rates.',
  keywords: ['pay stub calculator', 'paycheck calculator', 'net pay calculator', 'salary calculator', 'take home pay calculator'],
}

const usExample = [
  { label: 'Gross Pay (bi-weekly)', amount: '$3,846.15', note: '$100,000 / 26 periods' },
  { label: 'Federal Income Tax', amount: '− $576.92', note: '2025 bracket calculation on $100K annual' },
  { label: 'Social Security (6.2%)', amount: '− $238.46', note: 'On $3,846.15 gross' },
  { label: 'Medicare (1.45%)', amount: '− $55.77', note: 'On $3,846.15 gross' },
  { label: 'NY State Tax (~6.85%)', amount: '− $263.46', note: 'New York effective rate' },
  { label: '401(k) Contribution (5%)', amount: '− $192.31', note: 'Pre-tax deduction' },
  { label: 'Health Insurance', amount: '− $150.00', note: 'Typical employer plan employee share' },
  { label: 'Net Pay', amount: '$2,369.23', note: 'Bi-weekly take-home' },
]

const kenyaExample = [
  { label: 'Gross Pay (monthly)', amount: 'KSh 80,000', note: '' },
  { label: 'NSSF', amount: '− KSh 4,320', note: 'New 2025 tier structure (max)' },
  { label: 'SHA (2.75%)', amount: '− KSh 2,200', note: 'Replaced NHIF Oct 2024' },
  { label: 'AHL (1.5%)', amount: '− KSh 1,200', note: 'Affordable Housing Levy' },
  { label: 'NITA', amount: '− KSh 50', note: 'Flat monthly levy' },
  { label: 'Taxable Income', amount: 'KSh 72,280', note: 'After deductible items' },
  { label: 'PAYE (on KSh 72,280)', amount: '− KSh 14,064', note: 'Before personal relief' },
  { label: 'Personal Relief', amount: '+ KSh 2,400', note: 'Monthly personal relief' },
  { label: 'Net PAYE', amount: '− KSh 11,664', note: '' },
  { label: 'Net Pay', amount: 'KSh 60,566', note: 'Monthly take-home' },
]

export default function PayStubCalculatorPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Calculator & Guide</p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          Pay Stub Calculator — How to Calculate Your Net Pay
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          Understanding what comes out of your pay before it reaches your account is one of the most practically useful things you can know. This guide walks through the calculation step by step — with a worked example for the US and Kenya — and links to our auto-calculator for all 12 supported countries.
        </p>
      </div>

      <div className="bg-teal-brand rounded-2xl p-6 mb-10">
        <h2 className="font-fraunces text-2xl text-navy font-semibold mb-2">Use the auto-calculator</h2>
        <p className="text-navy/70 mb-4 text-sm">Select your country, enter your earnings, and get all deductions calculated instantly using current 2025 rates. Generates a downloadable PDF pay stub.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/pay-stub-generator" className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-all">🇺🇸 US Calculator</Link>
          <Link href="/salary-slip-generator" className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-all">🇮🇳 India Calculator</Link>
          <Link href="/payslip-generator" className="px-4 py-2 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-all">🇰🇪 Kenya Calculator</Link>
          <Link href="/generator" className="px-4 py-2 bg-white/20 text-navy text-sm font-semibold rounded-lg hover:bg-white/30 transition-all">All Countries →</Link>
        </div>
      </div>

      <AdSenseAd slot="9900112299" format="horizontal" className="mb-10" />

      <div className="prose prose-lg text-charcoal/70 space-y-6">

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">How pay stub calculations work</h2>
        <p>Every pay stub calculation follows the same basic structure regardless of country. Start with gross pay (total earnings before anything is deducted). Apply statutory deductions (taxes and mandatory contributions required by law). Apply voluntary deductions (retirement contributions, insurance premiums you've chosen). What remains is net pay — your take-home.</p>
        <p>The complexity lies in step two. Statutory deductions are different in every country, and most involve progressive tax brackets where the rate increases as income rises. The deductions also interact — in Kenya, for example, your NSSF and SHA contributions reduce your taxable income before PAYE is calculated, which means higher mandatory contributions actually lower your tax bill.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Worked example — US (bi-weekly, $100,000/year, New York)</h2>
        <div className="bg-navy rounded-xl p-6 my-6">
          <div className="space-y-2">
            {usExample.map((row, i) => (
              <div key={i} className={`flex justify-between items-baseline gap-4 ${i === usExample.length - 1 ? 'pt-3 mt-2 border-t border-white/20' : ''}`}>
                <div>
                  <span className={`text-sm ${i === usExample.length - 1 ? 'text-teal-brand font-bold text-base' : 'text-white/80'}`}>{row.label}</span>
                  {row.note && <span className="text-white/35 text-xs ml-2">({row.note})</span>}
                </div>
                <span className={`font-mono font-semibold whitespace-nowrap ${
                  i === usExample.length - 1 ? 'text-teal-brand text-lg' :
                  row.amount.startsWith('−') ? 'text-red-400' : 'text-white'
                }`}>{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
        <p>A few things worth noting from this example. The effective federal tax rate on $100,000 is about 15%, not the top bracket rate of 22% — that is because only income above $48,475 is taxed at 22%; the lower brackets apply to the income below that threshold. The 401(k) contribution reduces your taxable income, so it partially offsets the federal and state tax. And Social Security stops at $176,100 in annual wages — once you cross that threshold mid-year, your bi-weekly take-home increases.</p>

        <AdSenseAd slot="0011223300" format="horizontal" className="my-8" />

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Worked example — Kenya (monthly, KSh 80,000 gross)</h2>
        <div className="bg-navy rounded-xl p-6 my-6">
          <div className="space-y-2">
            {kenyaExample.map((row, i) => (
              <div key={i} className={`flex justify-between items-baseline gap-4 ${
                row.label === 'Taxable Income' ? 'pt-3 mt-1 border-t border-white/20' :
                i === kenyaExample.length - 1 ? 'pt-3 mt-2 border-t border-white/20' : ''
              }`}>
                <div>
                  <span className={`text-sm ${i === kenyaExample.length - 1 ? 'text-teal-brand font-bold text-base' : row.label === 'Taxable Income' ? 'text-white font-semibold' : 'text-white/80'}`}>{row.label}</span>
                  {row.note && <span className="text-white/35 text-xs ml-2">({row.note})</span>}
                </div>
                <span className={`font-mono font-semibold whitespace-nowrap ${
                  i === kenyaExample.length - 1 ? 'text-teal-brand text-lg' :
                  row.amount.startsWith('−') ? 'text-red-400' :
                  row.amount.startsWith('+') ? 'text-green-400' : 'text-white'
                }`}>{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
        <p>The Kenya example shows how mandatory deductions interact. Notice that NSSF, SHA, and AHL are all deducted from gross pay before PAYE is calculated — this reduces the taxable income from KSh 80,000 to KSh 72,280, saving approximately KSh 2,316 in PAYE compared to if they were non-deductible. The personal relief of KSh 2,400 per month is then subtracted from the calculated PAYE.</p>
        <p>This is also why payslips showing NHIF instead of SHA are not just using an outdated label — the calculation method is fundamentally different. NHIF was a flat-rate banded system; SHA is 2.75% of gross with no cap, which means higher earners pay significantly more.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">How to check if your employer's calculation is correct</h2>
        <p>The easiest method is to use a calculator like GenStub's — enter your gross pay and frequency, select your country and state, and compare the auto-calculated figures against what appears on your payslip. Small rounding differences are normal; differences of more than a few dollars or shillings warrant a query to your payroll department.</p>
        <p>For US employees, you can also cross-check Social Security by multiplying your gross pay by 6.2% — the result should match your FICA-SS deduction exactly unless you have already exceeded the annual wage base ($176,100 in 2025).</p>
        <p>For UK employees, HMRC provides an online tax checker at gov.uk that verifies whether the PAYE deducted matches your tax code and income level. If your payslip shows a tax code you do not recognise (such as 0T or BR), contact HMRC directly as these indicate a non-standard situation that may be causing over- or under-withholding.</p>

        <div className="mt-10 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
          <h3 className="font-semibold text-navy mb-2">Calculate and generate your pay stub</h3>
          <p className="text-sm text-charcoal/60 mb-4">Auto-calculated deductions for 12 countries using current 2025 rates. Generates a professional, watermark-free PDF. Free, no signup.</p>
          <Link href="/generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
            Open Calculator →
          </Link>
        </div>
      </div>
    </article>
  )
}
