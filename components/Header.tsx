'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, FileText } from 'lucide-react'

const tools = [
  { href: '/pay-stub-generator', label: '🇺🇸 US Pay Stub Generator' },
  { href: '/salary-slip-generator', label: '🌏 Salary Slip Generator' },
  { href: '/payslip-generator', label: '🇬🇧 Payslip Generator' },
  { href: '/1099-pay-stub-generator', label: '📋 1099 / Contractor Stub' },
  { href: '/self-employed-pay-stub-generator', label: '💼 Self-Employed Pay Stub' },
  { href: '/canadian-pay-stub-generator', label: '🇨🇦 Canadian Pay Stub' },
  { href: '/pay-stubs-for-employees', label: '🏢 Pay Stubs for Employees' },
]

const resources = [
  { href: '/what-is-a-pay-stub', label: 'What Is a Pay Stub?' },
  { href: '/what-is-a-salary-slip', label: 'What Is a Salary Slip?' },
  { href: '/salary-slip-format', label: 'Salary Slip Format Guide' },
  { href: '/free-pay-stub-templates', label: 'Free Templates' },
  { href: '/best-pay-stub-generators', label: 'Best Pay Stub Generators' },
  { href: '/blog', label: 'Blog & Guides' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-navy/95 backdrop-blur-md shadow-lg'
        : 'bg-navy'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
           <img
  src="/favicon.png"
  alt="GenStub logo"
  width={32}
  height={32}
  className="rounded-lg group-hover:scale-105 transition-transform"
/>
            <span className="font-fraunces font-semibold text-xl text-white tracking-tight">
              Gen<span className="text-teal-brand">Stub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Tools dropdown */}
            <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                Tools <ChevronDown size={14} className={`transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-cream-dark overflow-hidden z-50 animate-fade-in">
                  {tools.map(t => (
                    <Link key={t.href} href={t.href}
                      className="flex items-center px-4 py-3 text-sm text-charcoal hover:bg-teal-light hover:text-navy transition-colors font-dm">
                      {t.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources dropdown */}
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all">
                Resources <ChevronDown size={14} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-cream-dark overflow-hidden z-50 animate-fade-in">
                  {resources.map(r => (
                    <Link key={r.href} href={r.href}
                      className="block px-4 py-3 text-sm text-charcoal hover:bg-teal-light hover:text-navy transition-colors font-dm">
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all">
              About
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/generator"
              className="px-5 py-2 bg-teal-brand text-navy text-sm font-semibold rounded-lg hover:bg-teal-dark transition-all hover:scale-105 active:scale-95">
              Generate Free →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-white/80 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10 px-4 pb-6 pt-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-mist uppercase tracking-widest font-semibold px-3 py-2">Tools</p>
            {tools.map(t => (
              <Link key={t.href} href={t.href} onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                {t.label}
              </Link>
            ))}
            <p className="text-xs text-mist uppercase tracking-widest font-semibold px-3 py-2 mt-2">Resources</p>
            {resources.map(r => (
              <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                {r.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link href="/generator" onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-teal-brand text-navy font-semibold rounded-lg hover:bg-teal-dark transition-all">
                Generate Free →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
