import type { Metadata } from 'next'
import Link from 'next/link'
import AdSenseAd from '@/components/AdSenseAd'

export const metadata: Metadata = {
  title: 'Free Pay Stub Templates — Download or Generate Instantly (2025)',
  description: 'Free pay stub templates for the US, UK, Canada, Australia and more. Compare template options, understand what must be included, and generate a professional pay stub instantly.',
  keywords: ['free pay stub templates', 'pay stub template', 'paycheck stub template', 'free payslip template'],
}

const mustHave = [
  { item: 'Employer name, address and registration/EIN number', why: 'Verifies the paying entity is real and registered' },
  { item: 'Employee name, ID and job title', why: 'Identifies who the payment is for' },
  { item: 'Pay period start and end dates', why: 'Banks and lenders need to verify the payment schedule' },
  { item: 'Pay date', why: 'The actual date money was or will be deposited' },
  { item: 'Full earnings breakdown', why: 'Gross pay shown line by line — not just a single number' },
  { item: 'Full deductions breakdown', why: 'Every statutory and voluntary deduction itemised separately' },
  { item: 'Net pay in figures and words', why: 'Many banks and landlords specifically require amount in words' },
  { item: 'Year-to-date (YTD) totals', why: 'Tax authorities and lenders use YTD to verify annual income' },
  { item: 'Unique document reference number', why: 'Makes the document traceable and looks professionally issued' },
]

const templateTypes = [
  {
    title: 'US Pay Stub Template',
    flag: '🇺🇸',
    description: 'Must show federal income tax, Social Security (6.2%), Medicare (1.45%), and state income tax. YTD columns are standard. 401(k) and health insurance deductions are common voluntary items.',
    href: '/pay-stub-generator',
    cta: 'Generate US Pay Stub',
  },
  {
    title: 'UK Payslip Template',
    flag: '🇬🇧',
    description: 'Must show PAYE income tax, National Insurance contributions, pension (auto-enrolment minimum 5%), and student loan repayments where applicable. Tax code and NI number are required fields.',
    href: '/payslip-generator',
    cta: 'Generate UK Payslip',
  },
  {
    title: 'Canada Pay Stub Template',
    flag: '🇨🇦',
    description: 'Must show federal income tax, provincial income tax, CPP contributions (5.95% on eligible earnings), CPP2, and EI premiums (1.66%). Pay frequency is most commonly bi-weekly.',
    href: '/canadian-pay-stub-generator',
    cta: 'Generate Canadian Pay Stub',
  },
  {
    title: 'India Salary Slip Template',
    flag: '🇮🇳',
    description: 'Component-based structure with Basic, HRA, DA, allowances on the earnings side. EPF (12% of basic), ESI (0.75% if gross ≤ ₹21,000), Professional Tax, and TDS on deductions side.',
    href: '/salary-slip-generator',
    cta: 'Generate Salary Slip',
  },
  {
    title: 'Australia Payslip Template',
    flag: '🇦🇺',
    description: 'Must show PAYG withholding tax, Medicare levy (2%), and superannuation contributions (11.5% employer contribution shown separately). Leave balances are legally required on Australian payslips.',
    href: '/payslip-generator',
    cta: 'Generate Payslip',
  },
  {
    title: 'Kenya Payslip Template',
    flag: '🇰🇪',
    description: 'Must show PAYE, NSSF (new 2025 tier structure, max KSh 4,320), SHA at 2.75% of gross (replaced NHIF October 2024), AHL Housing Levy at 1.5%, and NITA at KSh 50.',
    href: '/payslip-generator',
    cta: 'Generate Kenya Payslip',
  },
]

export default function FreePayStubTemplatesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Templates & Guides</p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-navy font-semibold leading-tight mb-4">
          Free Pay Stub Templates — What to Look for and What to Avoid
        </h1>
        <p className="text-charcoal/60 text-xl leading-relaxed">
          Not all pay stub templates are equal. A template that looks professional but leaves out required fields will be rejected by a bank, landlord, or tax authority. Here is what every pay stub template must include — and the fastest way to generate one correctly.
        </p>
      </div>

      <AdSenseAd slot="3344556633" format="horizontal" className="mb-10" />

      <div className="prose prose-lg text-charcoal/70 space-y-6">

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-8">The problem with most free templates</h2>
        <p>There are thousands of free pay stub templates available as Word documents, Excel spreadsheets, and PDF downloads. Most of them have the same problems: they are designed to look like a pay stub rather than function as one. Fields are decorative. Tax calculations are not included or are wrong. There is no mechanism to ensure deduction rates are current. And they produce generic, unverifiable documents that sophisticated institutions increasingly reject.</p>
        <p>The better approach is to use a generator rather than a static template — the generator handles calculations, formats the document correctly, and produces a unique reference number that makes the document traceable.</p>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">What every pay stub template must include</h2>
        <div className="space-y-3 my-6">
          {mustHave.map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-white border border-cream-dark rounded-xl shadow-card">
              <div className="w-6 h-6 bg-teal-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-navy text-xs font-bold">{i + 1}</span>
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">{item.item}</p>
                <p className="text-charcoal/60 text-xs mt-0.5">{item.why}</p>
              </div>
            </div>
          ))}
        </div>

        <AdSenseAd slot="4455667744" format="horizontal" className="my-8" />

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Pay stub templates by country</h2>
        <p>Each country has its own terminology, required fields, and deduction structure. A US pay stub template will not work for a UK employee, and an Indian salary slip format does not apply in Kenya. Here are the key requirements for each country GenStub supports.</p>

        <div className="grid gap-5 mt-6">
          {templateTypes.map(t => (
            <div key={t.title} className="bg-white border border-cream-dark rounded-2xl p-6 shadow-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{t.flag}</span>
                <h3 className="font-fraunces text-xl text-navy font-semibold leading-tight">{t.title}</h3>
              </div>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-4">{t.description}</p>
              <Link href={t.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-xs font-semibold rounded-lg hover:bg-navy-light transition-all">
                {t.cta} →
              </Link>
            </div>
          ))}
        </div>

        <h2 className="font-fraunces text-2xl text-navy font-semibold mt-10">Word and Excel templates vs online generators</h2>
        <p>Word and Excel templates have one advantage: you own the file and can customise every pixel. They have several disadvantages: you need to manually enter tax calculations (and update them every year when rates change), the formatting often breaks when content changes length, and the documents have no unique identifier that makes them verifiable.</p>
        <p>Online generators like GenStub handle all of this automatically — calculations use current rates, the layout scales to your content, and every document gets a unique reference number in the format PAY-YYYY-MM-XXXXXX. The trade-off is that you need an internet connection and cannot customise the design beyond the four colour themes we offer.</p>
        <p>For most people generating pay stubs for personal income documentation, an online generator is the better choice. For accountants or payroll software providers building custom documents, a template might still make sense.</p>

        <div className="mt-10 p-6 bg-teal-light border border-teal-brand/20 rounded-2xl">
          <h3 className="font-semibold text-navy mb-2">Skip the template — generate instantly</h3>
          <p className="text-sm text-charcoal/60 mb-4">GenStub generates professional, bank-accepted pay stubs for 12 countries. All deductions auto-calculated. Watermark-free PDF. No signup required.</p>
          <Link href="/generator" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-all">
            Generate Free Now →
          </Link>
        </div>
      </div>
    </article>
  )
}
