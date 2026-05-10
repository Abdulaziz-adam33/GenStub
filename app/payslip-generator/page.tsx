import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Free Payslip Generator — UK, Australia, Kenya, Nigeria, South Africa & More',
  description: 'Generate payslips for UK (PAYE, NI, pension), Australia (PAYG, Super), Kenya (SHA, NSSF, AHL), Nigeria (NTA 2025), South Africa (PAYE, UIF), Philippines and New Zealand.',
  keywords: ['payslip generator', 'generate payslip', 'payslip online', 'payslip maker', 'payslip generator free'],
}

export default function PayslipPage() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-teal-brand text-xs font-semibold uppercase tracking-widest mb-3">🌍 UK · AU · NZ · Kenya · Nigeria · South Africa · Philippines</div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Free Payslip Generator
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            Generate payslips for 8 countries with current deduction rates: UK (PAYE, NI, pension), Australia (PAYG, Medicare, Super), Kenya (SHA 2.75%, NSSF, AHL), Nigeria (NTA 2025), South Africa (PAYE, UIF), Philippines (SSS, PhilHealth, Pag-IBIG), and New Zealand (PAYE, ACC, KiwiSaver).
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {['✓ UK 2025/26 rates', '✓ Kenya SHA (not NHIF)', '✓ Nigeria NTA 2025', '✓ AU Super 11.5%', '✓ Free download'].map(t => (
              <span key={t} className="text-xs text-teal-brand bg-teal-brand/10 px-3 py-1.5 rounded-full border border-teal-brand/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <AdSenseAd slot="4455667788" format="horizontal" className="max-w-4xl mx-auto px-4 pt-6" />
      <GeneratorWrapper defaultCountry="uk" />
    </>
  )
}
