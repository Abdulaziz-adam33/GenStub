import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Download, Zap, Globe, Shield, Star, ChevronDown } from 'lucide-react'
import SampleDocument from '@/components/landing/SampleDocument'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'GenStub — Free Pay Stub & Salary Slip Generator | 12 Countries',
  description: 'Generate professional, bank-accepted pay stubs, salary slips and payslips free. Supports 12 countries including USA, India, UK, Kenya, Nigeria and more. Watermark-free PDF, instant download.',
}

const formats = [
  { label: 'US Pay Stub', flag: '🇺🇸', desc: 'Federal tax, FICA, state', href: '/pay-stub-generator', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
  { label: 'Salary Slip', flag: '🌏', desc: 'India, UAE, Pakistan, Gulf', href: '/salary-slip-generator', color: 'bg-orange-50 border-orange-200 hover:border-orange-400' },
  { label: 'Payslip', flag: '🇬🇧', desc: 'UK, AU, NZ, SA, Kenya, NG, PH', href: '/payslip-generator', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' },
]

const features = [
  { icon: '✅', title: 'Genuinely free — forever', desc: 'No hidden charges, no per-document fees, no bait-and-switch pricing. GenStub is 100% free, supported by non-intrusive ads.' },
  { icon: '🔍', title: 'Live preview before download', desc: 'See exactly what your document looks like before committing. Edit any field and the preview updates instantly.' },
  { icon: '📄', title: 'Watermark-free PDF', desc: 'Every document downloads as a clean, professional PDF with no watermarks, no branding stamps, no strings attached.' },
  { icon: '🧮', title: 'Auto-calculate or manual', desc: 'Let us calculate your taxes automatically using current rates, or enter your own figures. Full control, always.' },
  { icon: '💷', title: 'Amount in words included', desc: 'Net pay appears in both figures and words — exactly as banks and landlords expect to see it on a professional payslip.' },
  { icon: '🔖', title: 'Unique document reference', desc: 'Every document gets a unique reference number, making it look like it came straight from a proper payroll system.' },
]

const countries = [
  { flag: '🇺🇸', name: 'United States', detail: 'Federal, FICA, 50 states', href: '/pay-stub-generator' },
  { flag: '🇮🇳', name: 'India', detail: 'PF, ESI, PT, TDS', href: '/salary-slip-generator' },
  { flag: '🇬🇧', name: 'United Kingdom', detail: 'PAYE, NI, Pension', href: '/payslip-generator' },
  { flag: '🇨🇦', name: 'Canada', detail: 'CPP, EI, Federal & Provincial', href: '/canadian-pay-stub-generator' },
  { flag: '🇦🇺', name: 'Australia', detail: 'PAYG, Medicare, Super', href: '/payslip-generator' },
  { flag: '🇦🇪', name: 'UAE / Gulf', detail: 'No tax, allowance-based', href: '/salary-slip-generator' },
  { flag: '🇿🇦', name: 'South Africa', detail: 'PAYE, UIF (SARS)', href: '/payslip-generator' },
  { flag: '🇰🇪', name: 'Kenya', detail: 'PAYE, SHA, NSSF, AHL', href: '/payslip-generator' },
  { flag: '🇳🇬', name: 'Nigeria', detail: 'PAYE (NTA 2025), Pension', href: '/payslip-generator' },
  { flag: '🇵🇭', name: 'Philippines', detail: 'SSS, PhilHealth, Pag-IBIG', href: '/payslip-generator' },
  { flag: '🇳🇿', name: 'New Zealand', detail: 'PAYE, ACC, KiwiSaver', href: '/payslip-generator' },
  { flag: '🇵🇰', name: 'Pakistan', detail: 'FBR tax, EOBI', href: '/salary-slip-generator' },
]

const faqs = [
  {
    q: 'Is GenStub really free?',
    a: 'Yes, completely. GenStub is free to use and always will be. We are supported by Google AdSense advertisements, which means you never pay per document. There are no hidden charges, no subscriptions, and no watermarks.',
  },
  {
    q: 'Will my pay stub be accepted by a bank or landlord?',
    a: 'GenStub documents are designed to meet the standards banks, landlords, and lenders look for. Every document includes a unique reference number, the net pay amount in words, employer contact details, correctly itemised deductions, and the statement "This is a computer-generated document." We recommend pairing your generated stub with supporting employment documentation where required.',
  },
  {
    q: 'Can I use GenStub if I am self-employed or a freelancer?',
    a: 'Absolutely. We have a dedicated self-employed pay stub generator that lets you document your income, including your business name as the employer. This is useful for loan applications, rental agreements, and income verification.',
  },
  {
    q: 'How are the taxes calculated?',
    a: 'GenStub uses current, up-to-date tax rates for each country. For example, Kenya uses SHA at 2.75% (not the old NHIF), Nigeria uses NTA 2025 bands, and the UK uses 2025/26 PAYE thresholds. You can use auto-calculation or enter your own figures manually if your situation differs.',
  },
  {
    q: 'Is my data saved or stored?',
    a: 'No. GenStub does not store any of the information you enter. Your data lives in your browser session only. When you close the tab, it is gone. We do not collect salary data, names, or company information.',
  },
  {
    q: 'Can I generate pay stubs for my employees?',
    a: 'Yes. You can generate separate stubs for multiple employees. Many small business owners and HR managers use GenStub to produce monthly payslips for their teams. See our dedicated page for businesses.',
  },
]

const themes = [
  { name: 'Navy', color: '#0B1F3A' },
  { name: 'Forest', color: '#1A4731' },
  { name: 'Slate', color: '#2D3748' },
  { name: 'Mono', color: '#000000' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden noise-bg min-h-screen lg:min-h-[92vh] flex items-center">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(12,200,168,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(12,200,168,0.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">

            {/* Left — copy */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-brand/15 border border-teal-brand/30 rounded-full mb-7">
                <span className="w-1.5 h-1.5 bg-teal-brand rounded-full animate-pulse" />
                <span className="text-teal-brand text-xs font-semibold tracking-wide">Free · Watermark-free · 12 Countries</span>
              </div>

              <h1 className="font-fraunces text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
                Pay stubs<br />
                <span className="text-teal-brand italic">banks actually</span><br />
                accept.
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                Generate professional pay stubs, salary slips and payslips for free. Live preview, auto-calculated taxes, unique reference numbers — documents that look like they came from a proper payroll system.
              </p>

              {/* Format selector */}
              <div className="flex flex-col gap-2 mb-8">
                {formats.map(f => (
                  <Link key={f.href} href={f.href}
                    className={`flex items-center gap-3 px-4 py-3 bg-white border-2 rounded-xl transition-all group ${f.color}`}>
                    <span className="text-2xl">{f.flag}</span>
                    <div>
                      <div className="text-navy font-semibold text-sm">{f.label}</div>
                      <div className="text-charcoal/50 text-xs">{f.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link href="/generator"
                  className="px-8 py-4 bg-teal-brand text-navy font-bold text-base rounded-xl hover:bg-teal-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-brand/20">
                  Generate Free Now →
                </Link>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Check size={14} className="text-teal-brand" />
                  No signup required
                </div>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10">
                <div className="text-center">
                  <div className="font-fraunces text-2xl text-white font-semibold">12</div>
                  <div className="text-white/40 text-xs mt-0.5">Countries</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-fraunces text-2xl text-white font-semibold">4</div>
                  <div className="text-white/40 text-xs mt-0.5">Design themes</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-fraunces text-2xl text-white font-semibold">$0</div>
                  <div className="text-white/40 text-xs mt-0.5">Cost forever</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <div className="font-fraunces text-2xl text-white font-semibold flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#0CC8A8" className="text-teal-brand mt-1" />)}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">No hidden fees</div>
                </div>
              </div>
            </div>

            {/* Right — document mockup */}
            <div className="hidden lg:block animate-fade-in animate-delay-300">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-teal-brand/20 blur-3xl rounded-full scale-75 translate-y-8" />
                {/* Badge */}
                <div className="absolute -top-4 -right-4 z-10 bg-teal-brand text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  ✓ Watermark-free
                </div>
                <SampleDocument />
                {/* Theme swatches label */}
                <div className="mt-5 text-center">
                  <p className="text-white/30 text-xs mb-2">4 color themes available</p>
                  <div className="flex items-center justify-center gap-2">
                    {themes.map(t => (
                      <div key={t.name} title={t.name}
                        style={{ background: t.color }}
                        className="w-5 h-5 rounded-full border-2 border-white/20 hover:scale-110 transition-transform cursor-pointer" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AD SLOT 1 ───────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <AdSenseAd slot="1234567890" format="horizontal" className="min-h-[90px]" />
      </div>

      {/* ── FORMAT SELECTOR ─────────────────────────────── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">Choose your document</p>
            <h2 className="font-fraunces text-4xl text-navy font-semibold">What do you need to generate?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: '/pay-stub-generator',
                flag: '🇺🇸', title: 'US Pay Stub',
                desc: 'For employers and employees in the United States. Includes Federal income tax, Social Security, Medicare, and state tax for all 50 states.',
                tags: ['Federal Tax', 'FICA', '50 States', 'YTD Totals'],
                cta: 'Generate US Pay Stub',
              },
              {
                href: '/salary-slip-generator',
                flag: '🌏', title: 'Salary Slip',
                desc: 'The standard format used across India, Pakistan, UAE, and the Gulf. Includes component-based earnings (Basic, HRA, DA) and statutory deductions.',
                tags: ['India PF/ESI/TDS', 'UAE Allowances', 'Pakistan FBR', 'Gulf Format'],
                cta: 'Generate Salary Slip',
              },
              {
                href: '/payslip-generator',
                flag: '🌍', title: 'Payslip',
                desc: 'Used in the UK, Australia, New Zealand, South Africa, Kenya, Nigeria, and the Philippines. Each country\'s statutory deductions auto-calculated.',
                tags: ['UK PAYE/NI', 'Kenya SHA/AHL', 'Nigeria NTA 2025', 'AU Super'],
                cta: 'Generate Payslip',
              },
            ].map(item => (
              <div key={item.href} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group border border-cream-dark">
                <div className="text-5xl mb-5">{item.flag}</div>
                <h3 className="font-fraunces text-2xl text-navy font-semibold mb-3">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-teal-light text-teal-dark text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={item.href}
                  className="block w-full text-center py-3 px-4 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all group-hover:bg-teal-brand group-hover:text-navy">
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">Why GenStub</p>
            <h2 className="font-fraunces text-4xl text-navy font-semibold mb-4">Everything competitors charge for — free</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">Most pay stub generators are free until they charge you. We built GenStub differently: everything is free, always, supported by advertising rather than per-document fees.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all border border-cream-dark">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-navy text-base mb-2">{f.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES ─────────────────────────────────────── */}
      <section className="py-20 bg-navy noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">Global coverage</p>
            <h2 className="font-fraunces text-4xl text-white font-semibold mb-4">Built for payroll worldwide</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Every country has its own deduction rules, terminology, and document format. GenStub handles them all — with current, accurate tax rates.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {countries.map(c => (
              <Link key={c.name} href={c.href}
                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-brand/40 rounded-xl transition-all group">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <div className="text-white text-sm font-medium group-hover:text-teal-brand transition-colors">{c.name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{c.detail}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD SLOT 2 ───────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AdSenseAd slot="0987654321" format="rectangle" className="min-h-[250px]" />
      </div>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">Simple process</p>
          <h2 className="font-fraunces text-4xl text-navy font-semibold mb-14">Generate in 3 steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose your country', desc: 'Select from 12 supported countries. The form and deduction structure adapt automatically.' },
              { step: '02', title: 'Fill in your details', desc: 'Enter employer, employee, and earnings information. Watch the live preview update as you type.' },
              { step: '03', title: 'Download your PDF', desc: 'Choose your color theme and download a clean, watermark-free PDF in seconds. No account needed.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div className="font-fraunces text-6xl font-bold text-navy/10 mb-3">{s.step}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all hover:scale-105">
              <Zap size={18} /> Start Generating Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-brand text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-fraunces text-4xl text-navy font-semibold">Common questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-cream-dark rounded-2xl p-6 group shadow-card">
                <summary className="font-semibold text-navy text-base cursor-pointer flex items-center justify-between list-none">
                  {faq.q}
                  <ChevronDown size={18} className="text-mist group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────── */}
      <section className="py-16 bg-teal-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-fraunces text-4xl text-navy font-semibold mb-4">
            Ready to generate your document?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">Professional, watermark-free, and completely free. Always.</p>
          <Link href="/generator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold text-lg rounded-xl hover:bg-navy-light transition-all hover:scale-105 shadow-xl">
            <Download size={20} /> Generate Free Now
          </Link>
        </div>
      </section>
    </>
  )
}
