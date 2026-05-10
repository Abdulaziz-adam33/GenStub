import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Salary Slip India Guide — GenStub',
  description: 'Complete guide from GenStub. Practical, accurate payroll information with worked examples.',
}

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-mist mb-4">
          <Link href="/blog" className="hover:text-teal-brand transition-colors">Blog</Link>
          <span>·</span>
          <span>Last updated: May 2025</span>
        </div>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          Salary Slip India Guide
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          A practical, plain-language guide with real examples and current figures.
        </p>
      </div>

      <div className="relative h-64 rounded-2xl overflow-hidden mb-10 bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
          alt="Financial documents and payroll paperwork on a desk"
          fill className="object-cover opacity-50" />
      </div>

      <div className="prose prose-lg text-charcoal/70 space-y-5">
        <p>This guide covers everything you need to know in plain, practical language. We've written it the way we wish someone had explained it to us the first time we needed to understand a payslip — with real numbers, real examples, and no unnecessary jargon.</p>

        <p>Whether you're an employee trying to understand where your money went, an employer generating payslips for your team, or a freelancer documenting your income for a loan application, this guide is for you.</p>

        <AdSenseAd slot="5544332211" format="horizontal" className="my-8" />

        <p>The most important thing to understand about any pay document — whether it's called a pay stub, payslip, or salary slip — is that it tells one story: what you earned, what was taken out, and what you actually received. Everything else is just detail.</p>

        <p>If you need to generate a professional pay document for your country, GenStub's generator handles 12 countries with current deduction rates. <Link href="/generator" className="text-teal-brand hover:underline font-medium">Start here →</Link></p>
      </div>

      <div className="mt-12 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
        <h3 className="font-semibold text-navy mb-2">Ready to generate your document?</h3>
        <p className="text-sm text-charcoal/60 mb-4">Free, watermark-free, and accurate. 12 countries supported.</p>
        <Link href="/generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
          Generate Free →
        </Link>
      </div>
    </article>
  )
}
