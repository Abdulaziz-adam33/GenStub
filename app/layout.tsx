import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://genstub.com'),
  title: {
    default: 'GenStub — Free Pay Stub & Salary Slip Generator | 12 Countries',
    template: '%s | GenStub',
  },
  description: 'Generate professional pay stubs, salary slips and payslips free. Supports USA, India, UK, Canada, Australia, UAE, Kenya, Nigeria, South Africa, Philippines, New Zealand and Pakistan. Watermark-free PDF download.',
  keywords: ['pay stub generator', 'salary slip generator', 'payslip generator', 'free pay stub', 'salary slip India', 'payslip UK', 'Kenya payslip SHA'],
  authors: [{ name: 'GenStub' }],
  creator: 'GenStub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genstub.com',
    siteName: 'GenStub',
    title: 'GenStub — Free Pay Stub & Salary Slip Generator',
    description: 'Professional pay stubs and salary slips for 12 countries. Watermark-free, instant PDF download.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GenStub Pay Stub Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenStub — Free Pay Stub & Salary Slip Generator',
    description: 'Professional, watermark-free pay stubs for 12 countries.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google AdSense — loads after cookie consent */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        />
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WXK4CDV5EE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-WXK4CDV5EE');
        </script>
      </head>
      <body className="bg-cream font-dm text-charcoal" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
