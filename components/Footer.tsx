import Link from 'next/link'
import { FileText, Mail, Globe } from 'lucide-react'

const footerLinks = {
  Tools: [
    { href: '/pay-stub-generator', label: 'US Pay Stub Generator' },
    { href: '/salary-slip-generator', label: 'Salary Slip Generator' },
    { href: '/payslip-generator', label: 'Payslip Generator' },
    { href: '/1099-pay-stub-generator', label: '1099 Pay Stub' },
    { href: '/self-employed-pay-stub-generator', label: 'Self-Employed Pay Stub' },
    { href: '/canadian-pay-stub-generator', label: 'Canadian Pay Stub' },
  ],
  Resources: [
    { href: '/what-is-a-pay-stub', label: 'What Is a Pay Stub?' },
    { href: '/what-is-a-salary-slip', label: 'What Is a Salary Slip?' },
    { href: '/salary-slip-format', label: 'Salary Slip Format Guide' },
    { href: '/free-pay-stub-templates', label: 'Free Templates' },
    { href: '/best-pay-stub-generators', label: 'Best Generators Compared' },
    { href: '/adp-pay-stub', label: 'ADP Pay Stub Guide' },
  ],
  Blog: [
    { href: '/blog/how-to-read-your-payslip', label: 'How to Read Your Payslip' },
    { href: '/blog/payroll-deductions-explained', label: 'Payroll Deductions Explained' },
    { href: '/blog/salary-slip-india-guide', label: 'India Salary Slip Guide' },
    { href: '/blog/kenya-payslip-sha-guide', label: 'Kenya Payslip Guide (SHA)' },
    { href: '/blog/uk-payslip-explained', label: 'UK Payslip Explained' },
    { href: '/blog/freelancer-pay-stub-guide', label: 'Freelancer Pay Stub Guide' },
  ],
  Company: [
    { href: '/about', label: 'About GenStub' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
}

const countries = ['🇺🇸 USA', '🇮🇳 India', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia',
  '🇦🇪 UAE', '🇿🇦 South Africa', '🇰🇪 Kenya', '🇳🇬 Nigeria', '🇵🇭 Philippines', '🇳🇿 New Zealand', '🇵🇰 Pakistan']

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* Countries bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-3 flex-wrap">
            <Globe size={14} className="text-teal-brand flex-shrink-0" />
            <span className="text-xs text-mist uppercase tracking-widest font-semibold">Supported countries:</span>
            {countries.map(c => (
              <span key={c} className="text-sm text-white/60 hover:text-white/90 transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-teal-brand rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-navy" strokeWidth={2.5} />
              </div>
              <span className="font-fraunces font-semibold text-xl text-white">
                Gen<span className="text-teal-brand">Stub</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Professional pay stubs and salary slips for 12 countries. Free, accurate, and instant.
            </p>
            <a href="mailto:hello@genstub.com" className="flex items-center gap-2 text-sm text-teal-brand hover:text-teal-dark transition-colors">
              <Mail size={14} /> hello@genstub.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-teal-brand transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30" suppressHydrationWarning>
            © {new Date().getFullYear()} GenStub. All rights reserved. Documents generated are for legitimate payroll record-keeping purposes only.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
