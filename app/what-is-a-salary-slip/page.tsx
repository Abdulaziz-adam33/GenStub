import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'What Is a Salary Slip? Complete Guide (India, UAE, Pakistan)',
  description: 'A salary slip is the monthly income document issued in India, UAE, and Pakistan. Learn what every component means — Basic, HRA, DA, PF, ESI, TDS — with a worked example.',
  keywords: ['what is a salary slip', 'salary slip meaning', 'salary slip India', 'salary slip components'],
}

export default function WhatIsSalarySlip() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-fraunces text-5xl text-navy font-semibold leading-tight mb-5">What Is a Salary Slip?</h1>
      <p className="text-xl text-charcoal/60 leading-relaxed mb-8">In India, Pakistan, and across the Gulf, a salary slip is the official monthly document showing your earnings components and statutory deductions. Here is what every line means.</p>
      <div className="relative h-64 rounded-2xl overflow-hidden mb-10 bg-navy">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Professional reviewing salary slip documents in an office" fill className="object-cover opacity-50" />
      </div>
      <div className="prose prose-lg text-charcoal/70 space-y-5">
        <p>"Salary slip" and "pay stub" refer to the same concept but come from different professional traditions. The term "pay stub" is used in North America. "Salary slip" is used across South Asia and the Gulf — India, Pakistan, Bangladesh, the UAE, Saudi Arabia, Qatar, and Kuwait. "Payslip" is used in the UK, Australia, and most of Africa.</p>
        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">Earnings components on an Indian salary slip</h2>
        <p>Indian salary slips are distinctive because they break earnings into components rather than showing a single salary figure. This is deliberate — different components attract different tax treatment, which affects both employer costs and employee take-home pay.</p>
        <p>The most common components are: <strong>Basic Salary</strong> (the foundation, usually 40-60% of CTC), <strong>HRA</strong> (House Rent Allowance, partially tax-exempt), <strong>DA</strong> (Dearness Allowance, mostly for government employees), <strong>Conveyance Allowance</strong>, <strong>Medical Allowance</strong>, and <strong>Special Allowance</strong> (a catch-all top-up).</p>
        <AdSenseAd slot="8877665544" format="horizontal" className="my-8" />
        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">Deductions on an Indian salary slip</h2>
        <p>The deductions side of an Indian salary slip typically shows EPF (12% of basic, or capped at ₹1,800 if basic exceeds ₹15,000), ESI (0.75% of gross, only if gross ≤ ₹21,000), Professional Tax (state-specific, commonly ₹200/month), and TDS (income tax deducted at source under the new or old regime).</p>
        <p>Generate an accurate Indian salary slip with current FY 2025-26 rates at <Link href="/salary-slip-generator" className="text-teal-brand hover:underline font-medium">GenStub's salary slip generator</Link>.</p>
      </div>
    </article>
  )
}
