import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact GenStub — Get in Touch',
  description: 'Contact the GenStub team for support, feedback, or questions about our free pay stub and salary slip generator.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-teal-brand text-sm font-semibold uppercase tracking-widest mb-3">Get in touch</p>
      <h1 className="font-fraunces text-4xl text-navy font-semibold mb-4">Contact Us</h1>
      <p className="text-charcoal/60 mb-10 leading-relaxed">Have a question, found an error in our deduction rates, or want to suggest a new country? We read every message.</p>

      <div className="bg-white border border-cream-dark rounded-2xl p-8 shadow-card space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">First Name *</label>
            <input type="text" className="w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream" placeholder="Alex" />
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal/70 mb-1.5">Last Name</label>
            <input type="text" className="w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream" placeholder="Morgan" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-charcoal/70 mb-1.5">Email Address *</label>
          <input type="email" className="w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream" placeholder="alex@example.com" />
        </div>
        <div>
          <label className="block text-xs font-medium text-charcoal/70 mb-1.5">Subject</label>
          <select className="w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream">
            <option>General question</option>
            <option>Tax rate / deduction error</option>
            <option>New country request</option>
            <option>Document design feedback</option>
            <option>Technical issue</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-charcoal/70 mb-1.5">Message *</label>
          <textarea rows={5} className="w-full px-3 py-2.5 text-sm border border-cream-darker rounded-lg bg-cream resize-none" placeholder="Your message..." />
        </div>
        <button className="w-full py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all">
          Send Message
        </button>
        <p className="text-xs text-mist text-center">Or email us directly at <a href="mailto:hello@genstub.com" className="text-teal-brand hover:underline">hello@genstub.com</a></p>
      </div>
    </div>
  )
}
