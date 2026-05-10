import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'

export const metadata: Metadata = {
  title: 'Free Canadian Pay Stub Generator — CPP, EI & Federal/Provincial Tax',
  description: 'Generate Canadian pay stubs with accurate 2025 CPP (5.95%), CPP2, EI (1.66%), federal income tax, and provincial tax. All provinces supported.',
  keywords: ['canadian pay stub generator', 'canada pay stub', 'canadian pay stub maker'],
}

export default function CanadaPage() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-teal-brand text-xs font-semibold uppercase tracking-widest mb-3">🇨🇦 Canada</div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Free Canadian Pay Stub Generator
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Generate professional Canadian pay stubs with current 2025 deduction rates: CPP at 5.95% (earnings $3,500–$68,500), CPP2 at 4% (up to $73,200), EI at 1.66% (up to $63,200 insurable earnings), federal income tax, and provincial income tax.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {['✓ CPP & CPP2 2025', '✓ EI 2025 rates', '✓ Federal + provincial tax', '✓ RRSP support', '✓ Free download'].map(t => (
              <span key={t} className="text-xs text-teal-brand bg-teal-brand/10 px-3 py-1.5 rounded-full border border-teal-brand/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <GeneratorWrapper defaultCountry="canada" />
    </>
  )
}
