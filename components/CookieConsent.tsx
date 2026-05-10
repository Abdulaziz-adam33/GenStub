'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Check } from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('gs-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('gs-cookie-consent', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('gs-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50 animate-fade-up">
      <div className="bg-navy rounded-2xl shadow-doc p-5 border border-white/10">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-teal-brand/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie size={16} className="text-teal-brand" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-1">We use cookies</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              We use cookies to serve personalised ads and improve your experience. Google and partners use cookies based on your site visits.{' '}
              <Link href="/privacy-policy" className="text-teal-brand hover:underline">Learn more</Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={decline}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all">
            <X size={12} /> Decline
          </button>
          <button onClick={accept}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold bg-teal-brand text-navy hover:bg-teal-dark rounded-lg transition-all">
            <Check size={12} /> Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
