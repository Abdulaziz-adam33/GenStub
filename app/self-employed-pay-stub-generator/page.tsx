import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'

export const metadata: Metadata = {
  title: 'Free Self-Employed Pay Stub Generator — Freelancer Income Documentation',
  description: 'Generate pay stubs as a self-employed individual or freelancer. Document your income for loans, mortgages, apartment applications, and income verification. Free, no watermark.',
  keywords: ['self employed pay stub generator', 'freelancer pay stub', 'self employed income verification'],
}

export default function SelfEmployedPage() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-teal-brand text-xs font-semibold uppercase tracking-widest mb-3">💼 Self-Employed & Freelancers</div>
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Free Self-Employed Pay Stub Generator
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            When you work for yourself, no employer generates your payslip. But banks, landlords, and lenders often require proof of income. Use your business name as the employer and your name as the employee to generate a professional income verification document.
          </p>
        </div>
      </div>
      <GeneratorWrapper defaultCountry="us" />
    </>
  )
}
