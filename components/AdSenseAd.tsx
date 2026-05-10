'use client'
import { useEffect } from 'react'

interface AdSenseAdProps {
  slot: string
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal'
  className?: string
  style?: React.CSSProperties
}

export default function AdSenseAd({ slot, format = 'auto', className = '', style }: AdSenseAdProps) {
  useEffect(() => {
    try {
      const consent = localStorage.getItem('gs-cookie-consent')
      if (consent === 'accepted') {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch {}
  }, [])

  return (
    <div className={`ad-container ${className}`} style={style} aria-label="Advertisement">
      <ins
        suppressHydrationWarning
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
