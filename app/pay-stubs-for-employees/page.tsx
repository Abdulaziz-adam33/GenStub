import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'
import GeneratorWrapper from '@/components/generator/GeneratorWrapper'

export const metadata: Metadata = {
  title: 'Pay Stubs For Employees — GenStub',
  description: 'Free pay stub and salary slip generator. Supports 12 countries with current deduction rates. Watermark-free PDF download.',
}

export default function Page() {
  return (
    <>
      <div className="bg-navy py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-fraunces text-3xl sm:text-4xl text-white font-semibold mb-3">
            Pay Stubs For Employees
          </h1>
          <p className="text-white/60 text-base max-w-2xl">
            Generate professional pay documents for 12 countries. Free, watermark-free, instant PDF download.
          </p>
        </div>
      </div>
      <AdSenseAd slot="1234509876" format="horizontal" className="max-w-4xl mx-auto px-4 pt-6" />
      <GeneratorWrapper />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdSenseAd slot="9876501234" format="rectangle" />
      </div>
    </>
  )
}
