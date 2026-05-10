import { DocumentData, COUNTRY_CONFIGS, THEME_COLORS } from '@/lib/types'
import { numberToWords, CURRENCY_WORDS, formatCurrency } from '@/lib/numberToWords'

interface Props { data: DocumentData }
const fmt = (n: number, s: string, c: string) => formatCurrency(n, s, c)

export default function DocumentPreview({ data }: Props) {
  const cfg  = COUNTRY_CONFIGS[data.country]
  const col  = THEME_COLORS[data.theme]
  const sym  = data.currencySymbol
  const cur  = data.currency
  const cw   = CURRENCY_WORDS[cur] || { main: 'Units', sub: 'Cents' }
  const words = numberToWords(data.netPay, cw.main, cw.sub)

  const fd = (s: string) => {
    if (!s) return '—'
    try { return new Date(s).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }
    catch { return s }
  }

  /* ─── shared cell style ─── */
  const lbl: React.CSSProperties = {
    color: '#8FA3B1', fontSize: '9px', textTransform: 'uppercase',
    letterSpacing: '0.08em', paddingBottom: '3px', display: 'block',
  }

  return (
    <div style={{
      width: 794, minHeight: 1123, background: '#fff',
      fontFamily: "'DM Sans','Helvetica Neue',Arial,sans-serif",
      fontSize: 11, color: '#1C2B3A', position: 'relative',
    }}>

      {/* ════════════════════════════════════════
          HEADER — table replaces flex (html2canvas
          renders flex children at wrong heights)
          ════════════════════════════════════════ */}
      <div style={{ background: col.headerBg, padding: '24px 32px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              {/* LEFT: company info */}
              <td style={{ verticalAlign: 'top', paddingRight: 16 }}>

                {/* ── BADGE ──────────────────────────────────────────────────────
                    SVG badge: html2canvas captures SVG as native browser pixels,
                    bypassing its broken CSS text-positioning engine entirely.
                    dominantBaseline="central" + y=h/2 = perfect vertical centre,
                    guaranteed in every renderer.
                    ─────────────────────────────────────────────────────────── */}
                {data.company.name && (() => {
                  const name = data.company.name.toUpperCase()
                  const approxCharW = 8.5          // px per char at 13px bold
                  const badgeW = Math.max(60, Math.round(name.length * approxCharW) + 32)
                  const badgeH = 30
                  return (
                    <svg
                      width={badgeW} height={badgeH}
                      style={{ display: 'block', marginBottom: 10 }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={badgeW} height={badgeH} rx="6" fill={col.accentBg} />
                      <text
                        x="16"
                        y={badgeH / 2}
                        fontFamily="'DM Sans', Arial, sans-serif"
                        fontSize="13"
                        fontWeight="700"
                        letterSpacing="0.5"
                        fill={col.accentText}
                        dominantBaseline="central"
                      >
                        {name}
                      </text>
                    </svg>
                  )
                })()}

                <div style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontSize: 11 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#fff' }}>
                    {data.company.name || 'Company Name'}
                  </div>
                  {data.company.address  && <div>{data.company.address}</div>}
                  {(data.company.city || data.company.state) && (
                    <div>{[data.company.city, data.company.state, data.company.zip].filter(Boolean).join(', ')}</div>
                  )}
                  {data.company.phone && <div>{data.company.phone}</div>}
                  {data.company.email && <div style={{ color: col.accentBg }}>{data.company.email}</div>}
                  {data.company.ein && (
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, marginTop: 4 }}>
                      {cfg.documentTitle === 'Pay Stub' ? 'EIN' : 'Reg No'}: {data.company.ein}
                    </div>
                  )}
                </div>
              </td>

              {/* RIGHT: document title + ref */}
              <td style={{ verticalAlign: 'top', textAlign: 'right', whiteSpace: 'nowrap' }}>
                <div style={{ color: col.accentBg, fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px' }}>
                  {cfg.documentTitle.toUpperCase()}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, marginTop: 6, lineHeight: 1.8 }}>
                  {data.documentRef && <div>Ref: {data.documentRef}</div>}
                  <div>Pay Date: {fd(data.payPeriod.payDate)}</div>
                  <div>Period: {fd(data.payPeriod.startDate)} – {fd(data.payPeriod.endDate)}</div>
                  <div style={{ textTransform: 'capitalize' }}>{data.payPeriod.frequency} Pay</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ════════════════════
          EMPLOYEE INFO BAR
          ════════════════════ */}
      <div style={{ background: col.rowAlt, padding: '14px 32px', borderBottom: `1px solid ${col.border}` }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              {/* Employee */}
              <td style={{ verticalAlign: 'top', width: '34%', paddingRight: 16 }}>
                <span style={lbl}>Employee</span>
                <div style={{ fontWeight: 700, fontSize: 14, color: col.headerBg }}>
                  {data.employee.name || 'Employee Name'}
                </div>
                <div style={{ color: '#6B7280', fontSize: 10, marginTop: 2 }}>
                  {[data.employee.designation, data.employee.department].filter(Boolean).join(' · ') || 'Designation'}
                </div>
                {data.employee.id && (
                  <div style={{ color: '#8FA3B1', fontSize: 9.5, marginTop: 1 }}>ID: {data.employee.id}</div>
                )}
              </td>

              {/* Contact */}
              <td style={{ verticalAlign: 'top', width: '33%', paddingRight: 16 }}>
                <span style={lbl}>Contact</span>
                <div style={{ color: '#374151', fontSize: 10.5, lineHeight: 1.7 }}>
                  {data.employee.address && <div>{data.employee.address}</div>}
                  {data.employee.city    && <div>{data.employee.city}</div>}
                  {data.employee.taxId  && (
                    <div style={{ color: '#8FA3B1', fontSize: 9.5 }}>
                      {data.country === 'us' ? 'SSN' : data.country === 'india' ? 'PAN' : data.country === 'uk' ? 'NI No' : 'Tax ID'}: {data.employee.taxId}
                    </div>
                  )}
                </div>
              </td>

              {/* Pay details */}
              <td style={{ verticalAlign: 'top', width: '33%' }}>
                <span style={lbl}>Pay Details</span>
                <div style={{ color: '#374151', fontSize: 10.5, lineHeight: 1.7 }}>
                  {data.employee.bankName      && <div>Bank: {data.employee.bankName}</div>}
                  {data.employee.accountNumber && <div>A/C: {data.employee.accountNumber}</div>}
                  <div>Mode: {data.employee.paymentMode || 'Bank Transfer'}</div>
                  {data.employee.startDate && (
                    <div style={{ color: '#8FA3B1', fontSize: 9.5 }}>Since: {fd(data.employee.startDate)}</div>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ════════════════════════════
          EARNINGS + DEDUCTIONS
          (side-by-side via table cell)
          ════════════════════════════ */}
      <div style={{ padding: '20px 32px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              {/* Earnings */}
              <td style={{ verticalAlign: 'top', width: '50%', paddingRight: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: col.headerBg, marginBottom: 10, borderLeft: `3px solid ${col.accentBg}`, paddingLeft: 8 }}>
                  Earnings
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['Description','Current','YTD'].map((h,i) => (
                        <th key={h} style={{ padding: '6px 8px', textAlign: i===0?'left':'right', color:'#8FA3B1', fontSize:9, fontWeight:500, borderBottom:`1px solid ${col.border}`, textTransform:'uppercase', letterSpacing:'0.06em' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.earnings.filter(e => e.amount > 0 || e.label).map((e, i) => (
                      <tr key={i} style={{ background: i%2===1 ? col.rowAlt : 'transparent' }}>
                        <td style={{ padding:'5px 8px', fontSize:10.5 }}>{e.label}</td>
                        <td style={{ padding:'5px 8px', textAlign:'right', fontWeight:500, fontSize:10.5 }}>{fmt(e.amount,sym,cur)}</td>
                        <td style={{ padding:'5px 8px', textAlign:'right', color:'#8FA3B1', fontSize:10 }}>{e.ytd>0?fmt(e.ytd,sym,cur):'—'}</td>
                      </tr>
                    ))}
                    <tr style={{ borderTop:`2px solid ${col.border}`, background:col.rowAlt }}>
                      <td style={{ padding:'7px 8px', fontWeight:700, fontSize:11, color:col.headerBg }}>Gross Pay</td>
                      <td style={{ padding:'7px 8px', textAlign:'right', fontWeight:700, fontSize:12, color:col.headerBg }}>{fmt(data.grossPay,sym,cur)}</td>
                      <td style={{ padding:'7px 8px', textAlign:'right', fontWeight:600, fontSize:10.5, color:col.headerBg }}>{data.ytdGross>0?fmt(data.ytdGross,sym,cur):'—'}</td>
                    </tr>
                  </tbody>
                </table>
              </td>

              {/* Deductions */}
              <td style={{ verticalAlign: 'top', width: '50%', paddingLeft: 12 }}>
                <div style={{ fontWeight:700, fontSize:10, textTransform:'uppercase', letterSpacing:'0.1em', color:col.headerBg, marginBottom:10, borderLeft:'3px solid #E53E3E', paddingLeft:8 }}>
                  Deductions
                </div>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead>
                    <tr>
                      {['Description','Current','YTD'].map((h,i) => (
                        <th key={h} style={{ padding:'6px 8px', textAlign:i===0?'left':'right', color:'#8FA3B1', fontSize:9, fontWeight:500, borderBottom:`1px solid ${col.border}`, textTransform:'uppercase', letterSpacing:'0.06em' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.deductions.filter(d => d.amount>0 || d.label).map((d,i) => (
                      <tr key={i} style={{ background:i%2===1?col.rowAlt:'transparent' }}>
                        <td style={{ padding:'5px 8px', fontSize:10.5 }}>{d.label}</td>
                        <td style={{ padding:'5px 8px', textAlign:'right', fontWeight:500, fontSize:10.5, color:'#C53030' }}>{fmt(d.amount,sym,cur)}</td>
                        <td style={{ padding:'5px 8px', textAlign:'right', color:'#8FA3B1', fontSize:10 }}>{d.ytd>0?fmt(d.ytd,sym,cur):'—'}</td>
                      </tr>
                    ))}
                    <tr style={{ borderTop:`2px solid ${col.border}`, background:col.rowAlt }}>
                      <td style={{ padding:'7px 8px', fontWeight:700, fontSize:11, color:'#C53030' }}>Total Deductions</td>
                      <td style={{ padding:'7px 8px', textAlign:'right', fontWeight:700, fontSize:12, color:'#C53030' }}>{fmt(data.totalDeductions,sym,cur)}</td>
                      <td style={{ padding:'7px 8px', textAlign:'right', fontWeight:600, fontSize:10.5, color:'#C53030' }}>{data.ytdDeductions>0?fmt(data.ytdDeductions,sym,cur):'—'}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ════════════════
          LEAVE BALANCES
          ════════════════ */}
      {data.leaveBalances && data.leaveBalances.length > 0 && (
        <div style={{ padding:'0 32px 16px' }}>
          <div style={{ fontWeight:700, fontSize:10, textTransform:'uppercase', letterSpacing:'0.1em', color:col.headerBg, marginBottom:8, borderLeft:`3px solid ${col.accentBg}`, paddingLeft:8 }}>
            Leave Balances
          </div>
          <table style={{ borderCollapse:'collapse' }}>
            <tbody>
              <tr>
                {data.leaveBalances.map((lb,i) => (
                  <td key={i} style={{ paddingRight:16, verticalAlign:'top' }}>
                    <div style={{ background:col.rowAlt, border:`1px solid ${col.border}`, borderRadius:8, padding:'8px 14px', minWidth:120 }}>
                      <div style={{ color:'#8FA3B1', fontSize:9, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:4 }}>{lb.label}</div>
                      <table style={{ borderCollapse:'collapse' }}>
                        <tbody><tr>
                          <td style={{ paddingRight:12 }}>
                            <div style={{ color:'#8FA3B1', fontSize:8.5 }}>Used</div>
                            <div style={{ fontWeight:600, fontSize:12, color:col.headerBg }}>{lb.used}</div>
                          </td>
                          <td>
                            <div style={{ color:'#8FA3B1', fontSize:8.5 }}>Available</div>
                            <div style={{ fontWeight:600, fontSize:12, color:'#16A34A' }}>{lb.available}</div>
                          </td>
                        </tr></tbody>
                      </table>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* ═══════════
          NET PAY
          ═══════════ */}
      <div style={{ margin:'8px 32px 20px', background:col.accentBg, borderRadius:12, padding:'18px 24px' }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <tbody><tr>
            <td style={{ verticalAlign:'middle' }}>
              <div style={{ color:col.accentText, fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', opacity:0.75, marginBottom:4 }}>Net Pay</div>
              <div style={{ color:col.accentText, fontWeight:800, fontSize:28, letterSpacing:'-0.5px', lineHeight:1.1 }}>{fmt(data.netPay,sym,cur)}</div>
              <div style={{ color:col.accentText, fontSize:9, marginTop:5, opacity:0.7, fontStyle:'italic' }}>{words}</div>
            </td>
            <td style={{ verticalAlign:'middle', textAlign:'right' }}>
              <div style={{ color:col.accentText, opacity:0.6, fontSize:10, marginBottom:4 }}>YTD Net Pay</div>
              <div style={{ color:col.accentText, fontWeight:700, fontSize:16 }}>{data.ytdNet>0?fmt(data.ytdNet,sym,cur):'—'}</div>
            </td>
          </tr></tbody>
        </table>
      </div>

      {/* ═══════
          NOTES
          ═══════ */}
      {data.notes && (
        <div style={{ padding:'0 32px 16px' }}>
          <div style={{ background:'#FFF8E7', border:'1px solid #F6D860', borderRadius:8, padding:'10px 14px' }}>
            <div style={{ fontSize:9, color:'#92610A', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:4 }}>Notes</div>
            <div style={{ fontSize:10.5, color:'#4A3000', lineHeight:1.6 }}>{data.notes}</div>
          </div>
        </div>
      )}

      {/* ════════
          FOOTER
          ════════ */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'10px 32px 14px', borderTop:`1px solid ${col.border}` }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <tbody><tr>
            <td style={{ verticalAlign:'middle' }}>
              <div style={{ color:'#9CA3AF', fontSize:8.5, lineHeight:1.7 }}>
                This is a computer-generated document and does not require a signature.<br/>
                {data.documentRef && <>Ref: {data.documentRef} · </>}
                Pay Period: {fd(data.payPeriod.startDate)} – {fd(data.payPeriod.endDate)} · Pay Date: {fd(data.payPeriod.payDate)}
              </div>
            </td>
            <td style={{ verticalAlign:'middle', textAlign:'right' }}>
              <div style={{ color:'#9CA3AF', fontSize:8.5 }}>
                {cfg.flag} {cfg.name}<br/>
                {data.payPeriod.frequency.charAt(0).toUpperCase()+data.payPeriod.frequency.slice(1)} Payroll
              </div>
            </td>
          </tr></tbody>
        </table>
      </div>

    </div>
  )
}
