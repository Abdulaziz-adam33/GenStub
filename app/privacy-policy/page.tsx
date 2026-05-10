import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — GenStub',
  description: 'GenStub privacy policy — how we collect, use, and protect your data, including Google AdSense cookie disclosure.',
}

const lastUpdated = 'May 2025'

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-fraunces text-4xl text-navy font-semibold mb-2">Privacy Policy</h1>
      <p className="text-mist text-sm mb-10">Last updated: {lastUpdated}</p>
      <div className="prose text-charcoal/70 space-y-6 text-sm leading-relaxed">
        <p>This Privacy Policy explains how GenStub ("we", "us", "our") collects, uses, and protects information when you use our website at genstub.com (the "Service").</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">1. Information We Do Not Collect</h2>
        <p>GenStub does not store any payroll data you enter into the generator. Employee names, company names, salary figures, tax identification numbers, and all other document data are processed entirely in your browser and are never transmitted to our servers. When you close the tab, your data is gone.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">2. Information We Do Collect</h2>
        <p>We collect standard web analytics data including: IP address (anonymised), browser type, device type, pages visited, time on site, and referring URLs. This data is collected to understand how our service is used and to improve it. We use Google Analytics for this purpose.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">3. Google AdSense and Advertising Cookies</h2>
        <p>We use Google AdSense to serve advertisements. Google and its partners use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the internet.</p>
        <p>You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" className="text-teal-brand hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>. You may also opt out of a third-party vendor's use of cookies for personalised advertising by visiting <a href="http://www.aboutads.info" className="text-teal-brand hover:underline" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">4. Cookies</h2>
        <p>We use the following types of cookies: (a) Essential cookies — required for the site to function, including your cookie consent preference; (b) Analytics cookies — Google Analytics to understand site usage; (c) Advertising cookies — Google AdSense to serve relevant advertisements. You may decline non-essential cookies via our cookie consent banner. Declining advertising cookies means ads may be less relevant to you but does not prevent ads from appearing.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">5. Your Rights</h2>
        <p>Depending on your location, you may have rights under GDPR (EU/UK), CCPA (California), POPIA (South Africa), or other applicable law, including the right to access, correct, or request deletion of personal data we hold about you. Contact us at hello@genstub.com to exercise any such rights.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">6. Children</h2>
        <p>GenStub is not directed at children under 13. We do not knowingly collect data from children.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">7. Changes</h2>
        <p>We may update this policy from time to time. We will indicate the date of the latest revision at the top of this page.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">8. Contact</h2>
        <p>Questions about this policy? Contact us at <a href="mailto:hello@genstub.com" className="text-teal-brand hover:underline">hello@genstub.com</a>.</p>
      </div>
    </div>
  )
}
