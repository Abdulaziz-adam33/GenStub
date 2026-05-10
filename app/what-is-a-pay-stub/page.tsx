import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'What Is a Pay Stub? Everything You Need to Know (2025)',
  description: 'A pay stub is the document that shows your earnings, deductions, and net pay for a period. Learn what every line means, what employers must include, and how to use your pay stub.',
  keywords: ['what is a pay stub', 'pay stub explained', 'pay stub example', 'how to read a pay stub'],
}

export default function WhatIsPayStub() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-fraunces text-5xl text-navy font-semibold leading-tight mb-5">What Is a Pay Stub?</h1>
      <p className="text-xl text-charcoal/60 leading-relaxed mb-8">A pay stub is the official record of what you earned, what was deducted, and what was deposited into your account during a pay period. Here is everything you need to know about it.</p>
      <div className="relative h-64 rounded-2xl overflow-hidden mb-10 bg-navy">
        <Image src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80" alt="Pay stub documents and financial records" fill className="object-cover opacity-50" />
      </div>
      <div className="prose prose-lg text-charcoal/70 space-y-5">
        <p>Walk into any bank to apply for a loan, fill out an apartment rental application, or file for government assistance — at some point, someone will ask you for your pay stubs. They are one of the most commonly requested financial documents in existence, yet most people have only a vague understanding of what each line on them actually means.</p>
        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">The anatomy of a pay stub</h2>
        <p>Every pay stub, regardless of which country it comes from, has three main sections: earnings, deductions, and net pay. The gross pay is what you earned before anything was taken out. The deductions are the taxes, insurance contributions, and retirement savings removed from that amount. The net pay — sometimes called take-home pay — is what actually lands in your account.</p>
        <p>In the United States, the deductions section of a pay stub typically includes federal income tax, Social Security tax (6.2% in 2025), Medicare tax (1.45%), state income tax, and any voluntary deductions like 401(k) contributions or health insurance premiums.</p>
        <AdSenseAd slot="7766554433" format="horizontal" className="my-8" />
        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">Why pay stubs matter</h2>
        <p>Beyond the obvious — knowing how much you got paid — pay stubs serve several important purposes. They are the primary document used to verify employment income for loans, mortgages, rental applications, and government benefits. The year-to-date (YTD) columns track how much you have earned and paid in taxes across the year, which you need when filing your tax return. And they create a paper trail that protects both you and your employer in the event of a dispute about pay.</p>
        <p>Need to generate one? <Link href="/pay-stub-generator" className="text-teal-brand hover:underline font-medium">GenStub's free US pay stub generator</Link> creates professional, bank-accepted pay stubs with all required fields.</p>
      </div>
    </article>
  )
}
