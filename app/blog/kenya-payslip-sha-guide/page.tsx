import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Kenya Payslip Guide 2025 — SHA, NSSF, AHL and PAYE Explained',
  description: 'Complete guide to Kenya payslip deductions in 2025. NHIF is now SHA (2.75% of gross). Includes updated NSSF, AHL Housing Levy, PAYE bands and NITA. With worked example.',
  keywords: ['Kenya payslip', 'SHA Kenya', 'NHIF replaced SHA', 'Kenya salary deductions 2025', 'AHL housing levy Kenya'],
}

export default function KenyaPayslipGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-mist mb-4">
          <Link href="/blog" className="hover:text-teal-brand transition-colors">Blog</Link>
          <span>·</span>
          <span>Kenya</span>
          <span>·</span>
          <span>Last updated: May 2025</span>
        </div>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          Kenya Payslip 2025: SHA Has Replaced NHIF — Here's What Changed
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          If your Kenyan payslip still shows an NHIF deduction, something is wrong. The National Hospital Insurance Fund was replaced by the Social Health Authority (SHA) in October 2024 — and the calculation method changed completely.
        </p>
      </div>

      <div className="relative h-72 rounded-2xl overflow-hidden mb-10 bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80"
          alt="A Kenyan professional reviewing payslip documents at a desk"
          fill className="object-cover opacity-60" />
        <div className="absolute inset-0 flex items-end p-6">
          <p className="text-white text-sm font-medium bg-black/40 px-3 py-1.5 rounded-lg">
            🇰🇪 Updated for Kenya 2025 payroll legislation
          </p>
        </div>
      </div>

      <div className="prose prose-lg text-charcoal/70 space-y-6">
        <p>I want to start with something direct: most Kenya payslip guides you'll find online are outdated. They still reference NHIF rates from 2022. Some have been updated to the 2023 rates. But since October 2024, Kenya has had an entirely new health deduction called SHA — the Social Health Insurance Fund, administered by the Social Health Authority (SHA) — and the rate structure is fundamentally different from NHIF.</p>

        <p>Here is a complete breakdown of every statutory deduction on a Kenyan payslip in 2025, with a worked example at the end.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">The five statutory deductions on a Kenyan payslip</h2>

        <h3 className="font-semibold text-navy text-lg mt-6">1. PAYE (Pay As You Earn)</h3>
        <p>PAYE is Kenya's income tax, collected by the Kenya Revenue Authority (KRA). The 2025 bands are:</p>
        <div className="bg-cream rounded-xl p-5 font-mono text-xs space-y-1 my-4">
          <div className="grid grid-cols-3 gap-4 font-sans text-xs font-semibold text-mist uppercase mb-2">
            <span>Monthly income (KSh)</span><span>Rate</span><span>Tax</span>
          </div>
          {[
            ['0 – 24,000', '10%', 'Up to KSh 2,400'],
            ['24,001 – 32,333', '25%', 'Up to KSh 2,083'],
            ['32,334 – 500,000', '30%', '—'],
            ['500,001 – 800,000', '32.5%', '—'],
            ['Above 800,000', '35%', '—'],
          ].map(([band, rate, note]) => (
            <div key={band} className="grid grid-cols-3 gap-4 text-charcoal/70">
              <span>{band}</span><span className="font-semibold text-navy">{rate}</span><span className="text-mist">{note}</span>
            </div>
          ))}
        </div>
        <p>Every employee gets a personal relief of <strong>KSh 2,400 per month</strong> (KSh 28,800 per year), which is deducted from the calculated PAYE. Additionally, NSSF, SHA, and AHL contributions are deductible from taxable income before PAYE is calculated.</p>

        <h3 className="font-semibold text-navy text-lg mt-6">2. SHA — Social Health Authority (replaced NHIF in October 2024)</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
          <p className="text-amber-800 font-semibold text-sm mb-2">⚠️ Important: NHIF no longer exists</p>
          <p className="text-amber-700 text-sm">The National Hospital Insurance Fund (NHIF) was dissolved and replaced by the Social Health Authority (SHA) and the Social Health Authority (SHA) effective October 1, 2024. Any payslip showing "NHIF" after this date is using outdated deduction labels.</p>
        </div>
        <p>SHA is calculated as <strong>2.75% of gross salary</strong>, with a minimum deduction of <strong>KSh 300 per month</strong>. There is no upper cap — unlike the old NHIF which had fixed amounts per salary band. This means high earners pay significantly more than under NHIF.</p>
        <p>Example: An employee earning KSh 80,000 gross pays KSh 80,000 × 2.75% = <strong>KSh 2,200</strong> in SHA. Under old NHIF at that salary level, they paid approximately KSh 1,700.</p>

        <h3 className="font-semibold text-navy text-lg mt-6">3. NSSF (National Social Security Fund)</h3>
        <p>NSSF contributions changed significantly effective February 2025 under the new NSSF Act. The new contribution structure is:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Tier I:</strong> 6% on earnings up to KSh 8,000 (max KSh 480)</li>
          <li><strong>Tier II:</strong> 6% on earnings between KSh 8,001 and KSh 72,000 (max KSh 3,840)</li>
          <li><strong>Maximum employee NSSF deduction:</strong> KSh 4,320/month</li>
        </ul>
        <p>The employer contributes an equal amount. NSSF contributions are deductible from taxable income for PAYE purposes.</p>

        <AdSenseAd slot="9988776655" format="horizontal" className="my-8" />

        <h3 className="font-semibold text-navy text-lg mt-6">4. AHL — Affordable Housing Levy (introduced March 2024)</h3>
        <p>The Affordable Housing Levy is a relatively new deduction — many payslips from early 2024 may still be missing it. The rate is <strong>1.5% of gross salary for the employee</strong>, with an equal 1.5% employer contribution.</p>
        <p>There is no cap or floor on AHL. It applies to the full gross salary. AHL is also deductible from taxable income for PAYE purposes.</p>

        <h3 className="font-semibold text-navy text-lg mt-6">5. NITA — National Industrial Training Authority</h3>
        <p>A flat <strong>KSh 50 per month</strong> per employee. Small, but it should be on every payslip as a separate line item.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Worked example: KSh 80,000 gross salary</h2>
        <div className="bg-navy rounded-xl p-6 my-6">
          <div className="font-mono text-xs text-white space-y-2">
            <div className="text-teal-brand font-sans text-sm font-semibold mb-3">Employee: James Waweru | Gross: KSh 80,000</div>
            {[
              ['NSSF (Tier I + II)', '(KSh 4,320)', ''],
              ['SHA (2.75% of gross)', '(KSh 2,200)', ''],
              ['AHL (1.5% of gross)', '(KSh 1,200)', ''],
              ['──────────────────', '', ''],
              ['Taxable income for PAYE', 'KSh 72,280', ''],
              ['PAYE on KSh 72,280', '(KSh 14,064)', 'before relief'],
              ['Less: Personal relief', 'KSh 2,400', ''],
              ['Net PAYE', '(KSh 11,664)', ''],
              ['NITA', '(KSh 50)', ''],
              ['──────────────────', '', ''],
              ['TOTAL DEDUCTIONS', '(KSh 19,434)', ''],
              ['NET PAY', 'KSh 60,566', '✓'],
            ].map(([label, amount, note]) => (
              <div key={label} className="flex justify-between">
                <span className="text-white/70">{label}</span>
                <span className={amount.startsWith('(') ? 'text-red-400' : amount.startsWith('K') ? 'text-teal-brand font-semibold' : 'text-white/50'}>
                  {amount} {note && <span className="text-teal-brand">{note}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">What should my Kenya payslip look like?</h2>
        <p>A proper 2025 Kenya payslip should show all five deductions listed above: PAYE, NSSF, SHA (not NHIF), AHL, and NITA. If yours shows NHIF, your employer's payroll system has not been updated. This is not a minor labelling issue — the SHA calculation method (percentage of gross) is fundamentally different from the old NHIF flat-rate bands, so using outdated labels likely means incorrect amounts too.</p>

        <p>If you need to generate a correctly formatted Kenya payslip, <Link href="/payslip-generator" className="text-teal-brand hover:underline font-medium">GenStub's payslip generator</Link> uses current 2025 rates including SHA at 2.75%, NSSF at the new Tier I/II structure, AHL at 1.5%, and the correct PAYE bands with personal relief applied.</p>
      </div>

      <div className="mt-12 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
        <h3 className="font-semibold text-navy mb-2">Generate your Kenya payslip</h3>
        <p className="text-sm text-charcoal/60 mb-4">Uses SHA (not NHIF), current NSSF rates, AHL, and 2025 PAYE bands.</p>
        <Link href="/payslip-generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
          Generate Kenya Payslip →
        </Link>
      </div>
    </article>
  )
}
