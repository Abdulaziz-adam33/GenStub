import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Best Pay Stub Generators in 2025 — Honest Comparison',
  description: 'We compared the top 10 pay stub generators on pricing, features, international support, and document quality. Here is what we found.',
  keywords: ['best pay stub generator', 'best free paystub maker', 'pay stub generator comparison 2025'],
}

export default function BestGeneratorsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-fraunces text-5xl text-navy font-semibold leading-tight mb-5">Best Pay Stub Generators in 2025</h1>
      <p className="text-xl text-charcoal/60 leading-relaxed mb-10">We tested 10 pay stub generators. Most claimed to be free. Most were not. Here is an honest assessment.</p>
      <AdSenseAd slot="6655443322" format="horizontal" className="mb-10" />
      <div className="prose prose-lg text-charcoal/70 space-y-5">
        <p>The pay stub generator market has a dirty secret: almost every tool that ranks for "free pay stub generator" is not actually free. They all put you through a five-minute form and then reveal a charge — typically $7.95 to $8.99 per document — at the moment you try to download.</p>
        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">The honest ranking</h2>
        {[
          { rank: 1, name: 'GenStub', verdict: 'Best overall', detail: 'Genuinely free (ad-supported). 12 countries. Current tax rates. Watermark-free PDF. Live preview. No signup required.' },
          { rank: 2, name: 'Shopify Pay Stub Generator', verdict: 'Best truly-free US option', detail: 'Free, but minimal. No tax calculation, US only, email delivery only, no logo upload.' },
          { rank: 3, name: 'Wix Pay Stub Generator', verdict: 'Decent for basics', detail: 'Free, basic US format. No auto-tax calc, no YTD tracking, Wix branding.' },
          { rank: 4, name: '123PayStubs', verdict: 'Best paid option', detail: 'First stub free, then $7.95. Good US coverage, 30 templates, accurate calculations. US only.' },
          { rank: 5, name: 'SecurePayStubs', verdict: 'Misleading "free" claim', detail: 'First stub free then $2.99 each. US only. Deceptive free branding.' },
        ].map(r => (
          <div key={r.rank} className="bg-white border border-cream-dark rounded-xl p-5 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-fraunces text-2xl text-navy font-bold">#{r.rank}</span>
              <span className="font-semibold text-navy">{r.name}</span>
              <span className="text-xs bg-teal-light text-teal-dark px-2.5 py-1 rounded-full">{r.verdict}</span>
            </div>
            <p className="text-sm text-charcoal/60">{r.detail}</p>
          </div>
        ))}
        <div className="mt-8 p-6 bg-teal-light rounded-2xl border border-teal-brand/20">
          <h3 className="font-semibold text-navy mb-2">Try GenStub free</h3>
          <p className="text-sm text-charcoal/60 mb-4">No signup. No payment. 12 countries. Watermark-free PDF.</p>
          <Link href="/generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
            Generate Free Now →
          </Link>
        </div>
      </div>
    </div>
  )
}
