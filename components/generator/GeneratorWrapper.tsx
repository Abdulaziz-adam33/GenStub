'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import { Country, DocumentTheme, DocumentData, COUNTRY_CONFIGS, ALL_COUNTRIES, COUNTRY_DEFAULT_FREQ, calcPeriodDates } from '@/lib/types'
import { generateDocumentRef } from '@/lib/numberToWords'
import DocumentPreview from './DocumentPreview'
import GeneratorForm from './GeneratorForm'
import { Download, Eye, Palette, FileText, Loader2 } from 'lucide-react'

interface Props { defaultCountry?: Country }

function makeDefaultData(country: Country): DocumentData {
  const cfg = COUNTRY_CONFIGS[country]
  const defaultFreq = COUNTRY_DEFAULT_FREQ[country]
  // Dates intentionally empty — set in useEffect (client-only) to avoid
  // server/client timezone mismatch causing React hydration errors.
  return {
    country, theme: 'navy', calculationMode: 'auto',
    currency: cfg.currency, currencySymbol: cfg.currencySymbol, documentRef: '',
    company: { name: '', address: '', city: '', state: '', zip: '', country: cfg.name, phone: '', email: '', ein: '' },
    employee: { name: '', id: '', designation: '', department: '', address: '', city: '', state: '', startDate: '', taxId: '', bankName: '', accountNumber: '', paymentMode: 'Bank Transfer' },
    payPeriod: { startDate: '', endDate: '', payDate: '', frequency: defaultFreq, payPeriodNumber: '1' },
    earnings: cfg.earningLabels.slice(0, 3).map(label => ({ label, amount: 0, ytd: 0 })),
    deductions: cfg.defaultDeductions.map(label => ({ label, amount: 0, ytd: 0 })),
    leaveBalances: cfg.requiresLeaveBalance ? [
      { label: 'Annual Leave', used: 0, available: 20, unit: 'days' },
      { label: 'Sick Leave', used: 0, available: 10, unit: 'days' },
    ] : undefined,
    grossPay: 0, totalDeductions: 0, netPay: 0,
    ytdGross: 0, ytdDeductions: 0, ytdNet: 0,
  }
}

const THEMES: { id: DocumentTheme; label: string; color: string }[] = [
  { id: 'navy', label: 'Navy', color: '#0B1F3A' },
  { id: 'forest', label: 'Forest', color: '#1A4731' },
  { id: 'slate', label: 'Slate', color: '#2D3748' },
  { id: 'mono', label: 'Mono', color: '#000000' },
]

// Scales the 794px document to fit any container width
function ScaledPreview({ data }: { data: DocumentData }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setScale(Math.min(1, (el.offsetWidth - 8) / 794))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <div style={{ height: Math.round(1123 * scale), position: 'relative', overflow: 'hidden' }}>
        <div style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: 794,
          position: 'absolute',
          top: 0, left: 0,
        }}>
          <DocumentPreview data={data} />
        </div>
      </div>
    </div>
  )
}

export default function GeneratorWrapper({ defaultCountry = 'us' }: Props) {
  const [country, setCountry] = useState<Country>(defaultCountry)
  const [data, setData] = useState<DocumentData>(makeDefaultData(defaultCountry))
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form')
  const [downloading, setDownloading] = useState(false)
  const [showCapture, setShowCapture] = useState(false)
  const captureRef = useRef<HTMLDivElement>(null)

  // Populate pay period dates on the client only — avoids SSR/client
  // timezone mismatch that triggers React hydration errors.
  useEffect(() => {
    setData(prev => {
      if (prev.payPeriod.payDate) return prev // already set (e.g. after country change)
      const today = new Date()
      const pad = (n: number) => String(n).padStart(2, '0')
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
      const payDate = `${lastDay.getFullYear()}-${pad(lastDay.getMonth() + 1)}-${pad(lastDay.getDate())}`
      const { startDate, endDate } = calcPeriodDates(payDate, prev.payPeriod.frequency)
      return { ...prev, payPeriod: { ...prev.payPeriod, startDate, endDate, payDate } }
    })
  }, [])

  const handleCountryChange = (c: Country) => {
    setCountry(c)
    const base = makeDefaultData(c)
    // Re-apply client-side dates immediately on country change
    const today = new Date()
    const pad = (n: number) => String(n).padStart(2, '0')
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const payDate = `${lastDay.getFullYear()}-${pad(lastDay.getMonth() + 1)}-${pad(lastDay.getDate())}`
    const { startDate, endDate } = calcPeriodDates(payDate, base.payPeriod.frequency)
    setData({ ...base, payPeriod: { ...base.payPeriod, startDate, endDate, payDate } })
  }

  const handleDataChange = useCallback((updates: Partial<DocumentData>) => {
    setData(prev => {
      const next = { ...prev, ...updates }
      next.grossPay = next.earnings.reduce((s, e) => s + (Number(e.amount) || 0), 0)
      next.totalDeductions = next.deductions.reduce((s, d) => s + (Number(d.amount) || 0), 0)
      next.netPay = Math.max(0, next.grossPay - next.totalDeductions)
      if (!next.documentRef && next.company.name && next.payPeriod.payDate)
        next.documentRef = generateDocumentRef(next.company.name, next.payPeriod.payDate)
      return next
    })
  }, [])

  const handleDownload = async () => {
    setDownloading(true)

    // 1. Show the full-size capture layer
    setShowCapture(true)

    // 2. Wait two animation frames + a short delay so React renders it fully
    await new Promise<void>(resolve => {
      requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(resolve, 350)))
    })

    const el = captureRef.current
    if (!el) {
      setShowCapture(false)
      setDownloading(false)
      return
    }

    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 794,
        windowWidth: 794,
      })

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pageW = pdf.internal.pageSize.getWidth()
      const pageH = pdf.internal.pageSize.getHeight()

      // If document is taller than one A4 page, split across pages
      const imgW = pageW
      const imgH = (canvas.height * pageW) / canvas.width

      if (imgH <= pageH) {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgW, imgH)
      } else {
        let yOffset = 0
        while (yOffset < canvas.height) {
          const sliceH = Math.min(canvas.height - yOffset, (pageH * canvas.width) / pageW)
          const sliceCanvas = document.createElement('canvas')
          sliceCanvas.width = canvas.width
          sliceCanvas.height = Math.round(sliceH)
          const ctx = sliceCanvas.getContext('2d')!
          ctx.drawImage(canvas, 0, yOffset, canvas.width, Math.round(sliceH), 0, 0, canvas.width, Math.round(sliceH))
          pdf.addImage(sliceCanvas.toDataURL('image/png'), 'PNG', 0, 0, pageW, (Math.round(sliceH) * pageW) / canvas.width)
          yOffset += Math.round(sliceH)
          if (yOffset < canvas.height) pdf.addPage()
        }
      }

      const safe = (s: string) => s.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase()
      const fileName = `${safe(data.company.name || 'genstub')}-${safe(data.employee.name || 'payslip')}-${data.payPeriod.payDate || 'doc'}.pdf`
      pdf.save(fileName)

    } catch (err) {
      console.error('PDF error:', err)
      alert('Could not generate PDF. Please try again.')
    } finally {
      setShowCapture(false)
      setDownloading(false)
    }
  }

  const canDownload = !downloading && !!data.company.name && !!data.employee.name

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Full-size capture layer (visible only during PDF gen) ── */}
      {showCapture && (
        <>
          {/* Dark overlay — user sees this */}
          <div className="fixed inset-0 z-[9998] bg-navy/80 flex flex-col items-center justify-center gap-4 pointer-events-none">
            <Loader2 size={36} className="text-teal-brand animate-spin" />
            <p className="text-white font-medium">Generating your PDF…</p>
          </div>

          {/* Document div at full 794px — html2canvas captures this div directly,
              ignoring what's layered on top of it in the DOM. Must be in viewport. */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: 794,
              background: 'white',
              zIndex: 9997,
              pointerEvents: 'none',
              // Shift right if screen is wide enough so user doesn't see it peeking
              // On mobile it's covered by the overlay anyway
              opacity: 1,
            }}
          >
            <div ref={captureRef}>
              <DocumentPreview data={data} />
            </div>
          </div>
        </>
      )}

      {/* ── Sticky top bar ── */}
      <div className="bg-white border-b border-cream-dark sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5">

          {/* Country chips — horizontal scroll on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[10px] text-mist font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0 hidden sm:inline">Country</span>
            {ALL_COUNTRIES.map(c => {
              const cfg = COUNTRY_CONFIGS[c]
              return (
                <button key={c} onClick={() => handleCountryChange(c)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    country === c ? 'bg-navy text-white' : 'bg-cream text-charcoal hover:bg-cream-dark'
                  }`}>
                  <span className="text-sm">{cfg.flag}</span>
                  <span className="hidden md:inline ml-0.5">{cfg.name}</span>
                </button>
              )
            })}
          </div>

          {/* Theme picker + download button */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream-dark">
            <div className="flex items-center gap-2.5">
              <Palette size={13} className="text-mist" />
              {THEMES.map(t => (
                <button key={t.id} title={t.label} onClick={() => handleDataChange({ theme: t.id })}
                  style={{ background: t.color }}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    data.theme === t.id ? 'ring-2 ring-offset-1 ring-teal-brand scale-110' : 'hover:scale-110'
                  }`} />
              ))}
            </div>

            <div className="flex items-center gap-2">
              {!canDownload && !downloading && (
                <span className="text-xs text-mist hidden sm:inline">
                  Fill company &amp; employee name to unlock
                </span>
              )}
              <button
                onClick={handleDownload}
                disabled={!canDownload}
                className="flex items-center gap-2 px-4 py-2 bg-teal-brand text-navy text-sm font-semibold rounded-lg hover:bg-teal-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
              >
                {downloading
                  ? <><Loader2 size={14} className="animate-spin" /> <span className="hidden sm:inline">Generating…</span></>
                  : <><Download size={14} /> <span className="hidden sm:inline">Download PDF</span><span className="sm:hidden">PDF</span></>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile tabs ── */}
      <div className="lg:hidden border-b border-cream-dark bg-white">
        <div className="flex">
          {(['form', 'preview'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                activeTab === tab ? 'text-navy border-navy' : 'text-mist border-transparent hover:text-charcoal'
              }`}>
              {tab === 'form' ? <><FileText size={14} /> Fill Details</> : <><Eye size={14} /> Preview</>}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main two-column layout ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-[440px_1fr] xl:grid-cols-[500px_1fr] gap-6 items-start">

          {/* Form */}
          <div className={activeTab === 'preview' ? 'hidden lg:block' : ''}>
            <GeneratorForm data={data} onChange={handleDataChange} country={country} />
          </div>

          {/* Live preview (scaled) */}
          <div className={`min-w-0 ${activeTab === 'form' ? 'hidden lg:block' : ''}`}>
            <div className="lg:sticky lg:top-36">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Eye size={15} className="text-mist" />
                  <span className="text-sm font-medium text-charcoal">Live Preview</span>
                </div>
                <span className="text-xs text-mist bg-cream border border-cream-dark px-2.5 py-1 rounded-lg">
                  {COUNTRY_CONFIGS[country].flag} {COUNTRY_CONFIGS[country].documentTitle}
                </span>
              </div>
              <div className="bg-gray-100 rounded-2xl p-3 overflow-hidden">
                <ScaledPreview data={data} />
              </div>
              <p className="text-center text-xs text-mist mt-2">
                PDF will match this preview exactly
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
