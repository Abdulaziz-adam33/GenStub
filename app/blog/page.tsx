import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & Payroll Guides — GenStub',
  description: 'Practical payroll guides for employees, employers, and freelancers. Updated deduction rates for Kenya, India, UK, Nigeria and more.',
}

const posts = [
  { href: '/blog/kenya-payslip-sha-guide', title: 'Kenya Payslip 2025: SHA Has Replaced NHIF', excerpt: 'Complete guide to Kenya\'s updated statutory deductions including SHA (2.75%), NSSF, AHL housing levy, and 2025 PAYE bands.', date: 'May 2025', country: '🇰🇪', tag: 'Kenya' },
  { href: '/blog/salary-slip-india-guide', title: 'India Salary Slip Guide: PF, ESI, TDS Explained', excerpt: 'Everything you need to know about Indian salary slip components and deductions under the new FY 2025-26 tax regime.', date: 'May 2025', country: '🇮🇳', tag: 'India' },
  { href: '/blog/uk-payslip-explained', title: 'UK Payslip Explained: PAYE, NI and Pension 2025/26', excerpt: 'A plain-English guide to reading your UK payslip with current 2025/26 PAYE thresholds, National Insurance rates, and auto-enrolment rules.', date: 'Apr 2025', country: '🇬🇧', tag: 'UK' },
  { href: '/blog/how-to-read-your-payslip', title: 'How to Read Your Payslip — Line by Line', excerpt: 'A universal guide to understanding any payslip, with section-by-section explanations and the questions you should ask if something looks wrong.', date: 'Apr 2025', country: '🌍', tag: 'General' },
  { href: '/blog/payroll-deductions-explained', title: 'Payroll Deductions Explained: What Every Line Means', excerpt: 'From FICA to SHA to NI contributions — what your payroll deductions actually are, why they exist, and where the money goes.', date: 'Mar 2025', country: '🌍', tag: 'General' },
  { href: '/blog/proof-of-income-guide', title: 'Proof of Income: When You Need Pay Stubs and What They Must Show', excerpt: 'Banks, landlords, and lenders all require income proof differently. Here is what each type of institution looks for on your payslip.', date: 'Mar 2025', country: '🌍', tag: 'General' },
  { href: '/blog/freelancer-pay-stub-guide', title: 'Freelancer Pay Stub Guide: How to Document Self-Employment Income', excerpt: 'No employer? No problem. How freelancers, contractors, and self-employed workers can generate income documentation that actually works.', date: 'Feb 2025', country: '🌍', tag: 'Freelancers' },
]

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-12">
        <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Blog & Guides</p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold mb-4">Payroll guides worth reading</h1>
        <p className="text-charcoal/60 text-lg leading-relaxed">Practical, accurate payroll information for employees, employers, and freelancers across 12 countries. Updated whenever legislation changes.</p>
      </div>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link key={post.href} href={post.href}
            className="bg-white border border-cream-dark rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 group flex gap-5">
            <div className="text-4xl flex-shrink-0">{post.country}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-teal-light text-teal-dark px-2.5 py-1 rounded-full font-medium">{post.tag}</span>
                <span className="text-xs text-mist">{post.date}</span>
              </div>
              <h2 className="font-fraunces text-xl text-navy font-semibold mb-2 group-hover:text-teal-dark transition-colors leading-snug">{post.title}</h2>
              <p className="text-sm text-charcoal/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
