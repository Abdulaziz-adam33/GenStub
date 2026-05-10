import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Free Salary Slip Generator — India, UAE, Pakistan & Gulf',
  description: 'Generate professional salary slips for India (PF, ESI, TDS), UAE/Gulf (allowance-based, no tax), and Pakistan (FBR). Free, watermark-free PDF download.',
  keywords: ['salary slip generator', 'generate salary slip', 'salary slip India', 'salary slip online', 'salary slip maker'],
}

export default function SalarySlipPage() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-teal-brand text-xs font-semibold uppercase tracking-widest mb-3">🌏 India · UAE · Pakistan · Gulf</div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Free Salary Slip Generator
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Generate accurate salary slips for India (EPF, ESI, Professional Tax, TDS), the UAE and Gulf (allowance-based, zero income tax), and Pakistan (FBR income tax, EOBI). Component-based earnings structure. Instant PDF.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {['✓ India PF/ESI/TDS', '✓ UAE no-tax format', '✓ Pakistan FBR', '✓ HRA/DA components', '✓ Free download'].map(t => (
              <span key={t} className="text-xs text-teal-brand bg-teal-brand/10 px-3 py-1.5 rounded-full border border-teal-brand/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <AdSenseAd slot="3344556677" format="horizontal" className="max-w-4xl mx-auto px-4 pt-6" />
      <GeneratorWrapper defaultCountry="india" />
    </>
  )
}
