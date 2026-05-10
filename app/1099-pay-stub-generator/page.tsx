import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'

export const metadata: Metadata = {
  title: 'Free 1099 Pay Stub Generator — Independent Contractor Stub',
  description: 'Generate pay stubs for 1099 contractors and independent contractors. No FICA withholding. Document your contract income for loans, rentals, and income verification.',
  keywords: ['1099 pay stub generator', 'independent contractor pay stub', 'contractor pay stub generator'],
}

export default function Page1099() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-teal-brand text-xs font-semibold uppercase tracking-widest mb-3">📋 Independent Contractors & 1099 Workers</div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Free 1099 Contractor Pay Stub Generator
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            As a 1099 independent contractor, you don't have an employer withholding taxes. But you still need to document your income for loan applications, apartment rentals, and financial verification. Generate a professional contractor pay stub showing your gross earnings and any estimated quarterly tax set-asides.
          </p>
        </div>
      </div>
      <GeneratorWrapper defaultCountry="us" />
    </>
  )
}
