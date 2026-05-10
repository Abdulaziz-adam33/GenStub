import type { Metadata } from 'next'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Pay Stub & Salary Slip Generator — GenStub',
  description: 'Free online pay stub, salary slip and payslip generator for 12 countries. Auto-calculated deductions, live preview, watermark-free PDF download.',
}

export default function GeneratorPage() {
  return (
    <>
      <div className="bg-navy py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-fraunces text-2xl sm:text-3xl text-white font-semibold mb-1">
            Pay Stub & Salary Slip Generator
          </h1>
          <p className="text-white/50 text-sm">
            Select your country → fill in details → download your watermark-free PDF
          </p>
        </div>
      </div>
      <GeneratorWrapper />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdSenseAd slot="1122334455" format="horizontal" />
      </div>
    </>
  )
}
