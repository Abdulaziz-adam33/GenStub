import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — GenStub',
  description: 'Terms of service for GenStub pay stub and salary slip generator. Proper use policy, disclaimer, and liability limitations.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-fraunces text-4xl text-navy font-semibold mb-2">Terms of Service</h1>
      <p className="text-mist text-sm mb-10">Last updated: May 2025</p>
      <div className="prose text-charcoal/70 space-y-6 text-sm leading-relaxed">
        <p>Please read these Terms of Service carefully before using GenStub. By using the Service, you agree to be bound by these terms.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">1. Permitted Use</h2>
        <p>GenStub may be used for legitimate payroll record-keeping, income documentation, and employment verification purposes. You may use GenStub to generate pay stubs or salary slips for actual employment or self-employment relationships where the information entered accurately reflects real compensation.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">2. Prohibited Use</h2>
        <p>You may not use GenStub to: (a) generate documents containing false or fabricated employment information for the purpose of deceiving lenders, landlords, government agencies, or any third party; (b) commit fraud, identity theft, or any illegal act; (c) generate documents in violation of any applicable law. Fraudulent use of generated documents may constitute a criminal offence in your jurisdiction.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">3. Accuracy Disclaimer</h2>
        <p>GenStub provides tax and deduction calculations based on generally applicable rates and standard assumptions. These calculations are intended as a guide and may not reflect your exact tax liability. Individual circumstances — including multiple income sources, special tax codes, deductions, or exemptions — may result in different amounts. GenStub is not a licensed tax advisor. We strongly recommend verifying your specific deduction amounts with a qualified payroll professional or your country's tax authority.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">4. No Warranty</h2>
        <p>The Service is provided "as is" without warranty of any kind. We make no guarantee that documents generated will be accepted by any bank, lender, landlord, or government body, as each institution sets its own verification requirements.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">5. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, GenStub shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service or any documents generated through it.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">6. Changes</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the revised terms.</p>

        <h2 className="font-fraunces text-xl text-navy font-semibold mt-8">7. Contact</h2>
        <p>Questions? Email us at <a href="mailto:hello@genstub.com" className="text-teal-brand hover:underline">hello@genstub.com</a>.</p>
      </div>
    </div>
  )
}
