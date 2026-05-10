import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Free US Pay Stub Generator — Federal Tax, FICA, All 50 States',
  description: 'Generate a free US pay stub with accurate federal income tax, Social Security, Medicare, and state tax calculations for all 50 states. Watermark-free PDF, instant download.',
  keywords: ['pay stub generator', 'generate pay stub', 'free paystub maker', 'paycheck stub generator'],
}

export default function USPayStubPage() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-teal-brand text-xs font-semibold uppercase tracking-widest mb-3">🇺🇸 United States</div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Free US Pay Stub Generator
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Generate professional US pay stubs with auto-calculated federal taxes, Social Security (6.2%), Medicare (1.45%), and state income tax for all 50 states. Instant, watermark-free PDF.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {['✓ 2025 federal tax brackets', '✓ All 50 US states', '✓ FICA auto-calculated', '✓ YTD tracking', '✓ Free download'].map(t => (
              <span key={t} className="text-xs text-teal-brand bg-teal-brand/10 px-3 py-1.5 rounded-full border border-teal-brand/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <AdSenseAd slot="2233445566" format="horizontal" className="max-w-4xl mx-auto px-4 pt-6" />
      <GeneratorWrapper defaultCountry="us" />
    </>
  )
}
