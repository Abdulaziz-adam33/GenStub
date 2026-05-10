export default function SampleDocument() {
  return (
    <div className="select-none pointer-events-none transition-transform duration-500 hover:-translate-y-2">
      <div className="bg-white rounded-xl shadow-doc w-full max-w-sm sm:max-w-md mx-auto overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px' }}>

        {/* Header band */}
        <div style={{ background: '#0B1F3A', padding: '18px 22px' }}>
          <div className="flex items-start justify-between">
            <div>
              <div style={{
                background: '#0CC8A8', color: '#0B1F3A', fontWeight: 700,
                fontSize: '15px', padding: '5px 10px', borderRadius: '6px',
                letterSpacing: '-0.3px', display: 'inline-flex', alignItems: 'center',
                lineHeight: 1, marginBottom: '8px'
              }}>
                MERIDIAN
              </div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '10.5px', lineHeight: '1.6' }}>
                Meridian Solutions Ltd<br />
                450 Business Park, Suite 12<br />
                New York, NY 10001<br />
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>EIN: 47-1234567</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#0CC8A8', fontWeight: 600, fontSize: '13px', letterSpacing: '-0.2px' }}>
                PAY STUB
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '9px', marginTop: '4px', lineHeight: '1.7' }}>
                Ref: PAY-2025-04-14709<br />
                Pay Date: Apr 30, 2025<br />
                Period: Apr 1–30, 2025
              </div>
            </div>
          </div>
        </div>

        {/* Employee info */}
        <div style={{ background: '#F0F7FF', padding: '12px 22px', borderBottom: '1px solid #CBD8E8' }}>
          <div className="flex justify-between">
            <div>
              <div style={{ color: '#8FA3B1', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                Employee
              </div>
              <div style={{ color: '#0B1F3A', fontWeight: 600, fontSize: '13px' }}>Alex J. Morgan</div>
              <div style={{ color: '#8FA3B1', fontSize: '9.5px', marginTop: '2px' }}>
                ID: EMP-0042 · Senior Analyst · Operations
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#8FA3B1', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                Pay Frequency
              </div>
              <div style={{ color: '#0B1F3A', fontWeight: 500, fontSize: '11px' }}>Monthly</div>
              <div style={{ color: '#8FA3B1', fontSize: '9.5px', marginTop: '2px' }}>
                SSN: ***-**-4821
              </div>
            </div>
          </div>
        </div>

        {/* Earnings table */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ color: '#0B1F3A', fontWeight: 600, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Earnings
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {['Description', 'Current', 'YTD'].map(h => (
                  <th key={h} style={{ padding: '5px 8px', textAlign: h === 'Description' ? 'left' : 'right', color: '#8FA3B1', fontSize: '9px', fontWeight: 500, borderBottom: '1px solid #CBD8E8' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Regular Pay', '$4,500.00', '$18,000.00'],
                ['Overtime', '$337.50', '$675.00'],
                ['Performance Bonus', '$250.00', '$500.00'],
              ].map(([desc, cur, ytd], i) => (
                <tr key={desc} style={{ background: i % 2 === 1 ? '#F0F7FF' : 'transparent' }}>
                  <td style={{ padding: '5px 8px', color: '#1C2B3A', fontSize: '10px' }}>{desc}</td>
                  <td style={{ padding: '5px 8px', textAlign: 'right', color: '#1C2B3A', fontSize: '10px', fontWeight: 500 }}>{cur}</td>
                  <td style={{ padding: '5px 8px', textAlign: 'right', color: '#8FA3B1', fontSize: '10px' }}>{ytd}</td>
                </tr>
              ))}
              <tr style={{ borderTop: '1.5px solid #CBD8E8', background: '#F8FAFC' }}>
                <td style={{ padding: '6px 8px', color: '#0B1F3A', fontWeight: 600, fontSize: '10px' }}>Gross Pay</td>
                <td style={{ padding: '6px 8px', textAlign: 'right', color: '#0B1F3A', fontWeight: 700, fontSize: '11px' }}>$5,087.50</td>
                <td style={{ padding: '6px 8px', textAlign: 'right', color: '#0B1F3A', fontWeight: 600, fontSize: '10px' }}>$19,175.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deductions table */}
        <div style={{ padding: '14px 22px 0' }}>
          <div style={{ color: '#0B1F3A', fontWeight: 600, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Deductions
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['Federal Income Tax', '$610.50', '$2,442.00'],
                ['Social Security (6.2%)', '$315.43', '$1,188.85'],
                ['Medicare (1.45%)', '$73.77', '$278.04'],
                ['NY State Income Tax', '$275.21', '$1,100.84'],
                ['Health Insurance', '$185.00', '$740.00'],
                ['401(k) Contribution', '$254.38', '$957.50'],
              ].map(([desc, cur, ytd], i) => (
                <tr key={desc} style={{ background: i % 2 === 1 ? '#F0F7FF' : 'transparent' }}>
                  <td style={{ padding: '5px 8px', color: '#1C2B3A', fontSize: '10px' }}>{desc}</td>
                  <td style={{ padding: '5px 8px', textAlign: 'right', color: '#A32D2D', fontSize: '10px', fontWeight: 500 }}>{cur}</td>
                  <td style={{ padding: '5px 8px', textAlign: 'right', color: '#8FA3B1', fontSize: '10px' }}>{ytd}</td>
                </tr>
              ))}
              <tr style={{ borderTop: '1.5px solid #CBD8E8', background: '#F8FAFC' }}>
                <td style={{ padding: '6px 8px', color: '#0B1F3A', fontWeight: 600, fontSize: '10px' }}>Total Deductions</td>
                <td style={{ padding: '6px 8px', textAlign: 'right', color: '#A32D2D', fontWeight: 700, fontSize: '11px' }}>$1,714.29</td>
                <td style={{ padding: '6px 8px', textAlign: 'right', color: '#A32D2D', fontWeight: 600, fontSize: '10px' }}>$6,707.23</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Net pay block */}
        <div style={{ margin: '14px 22px 0', background: '#0CC8A8', borderRadius: '10px', padding: '14px 18px' }}>
          <div className="flex items-center justify-between">
            <div>
              <div style={{ color: '#0B1F3A', fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.7 }}>
                Net Pay
              </div>
              <div style={{ color: '#0B1F3A', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
                $3,373.21
              </div>
              <div style={{ color: '#0B1F3A', fontSize: '8.5px', marginTop: '3px', opacity: 0.65, fontStyle: 'italic' }}>
                Three Thousand Three Hundred Seventy-Three Dollars and 21 Cents Only
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '9px', color: '#0B1F3A', opacity: 0.6, lineHeight: 1.8 }}>
              <div>YTD Net</div>
              <div style={{ fontWeight: 700, fontSize: '12px', opacity: 0.9 }}>$12,467.77</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '10px 22px 14px', borderTop: '1px solid #CBD8E8', marginTop: '14px' }}>
          <div className="flex items-center justify-between">
            <div style={{ color: '#8FA3B1', fontSize: '8px', lineHeight: 1.7 }}>
              This is a computer-generated document and does not require a signature.<br />
              Ref: PAY-2025-04-14709 · Pay Period: Apr 1–30, 2025 · Pay Date: Apr 30, 2025
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {['#0B1F3A', '#1A4731', '#2D3748', '#000000'].map((c, i) => (
                <div key={i} style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: c, border: i === 0 ? '2px solid #0CC8A8' : '1px solid #CBD8E8'
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
