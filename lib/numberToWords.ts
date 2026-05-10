const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
  'Eighteen', 'Nineteen']
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

function belowThousand(n: number): string {
  if (n === 0) return ''
  if (n < 20) return ones[n] + ' '
  if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '') + ' '
  return ones[Math.floor(n / 100)] + ' Hundred ' + belowThousand(n % 100)
}

export function numberToWords(amount: number, currencyName = 'Dollars', centName = 'Cents'): string {
  if (isNaN(amount) || amount < 0) return 'Zero ' + currencyName + ' Only'

  const fixed = Math.round(amount * 100)
  const dollars = Math.floor(fixed / 100)
  const cents = fixed % 100

  if (dollars === 0 && cents === 0) return 'Zero ' + currencyName + ' Only'

  const groups = [
    { divisor: 1_000_000_000, name: 'Billion' },
    { divisor: 1_000_000, name: 'Million' },
    { divisor: 1_000, name: 'Thousand' },
    { divisor: 1, name: '' },
  ]

  let result = ''
  let remaining = dollars

  for (const { divisor, name } of groups) {
    if (remaining >= divisor) {
      const chunk = Math.floor(remaining / divisor)
      remaining %= divisor
      result += belowThousand(chunk) + (name ? name + ' ' : '')
    }
  }

  result = result.trim() + ' ' + currencyName
  if (cents > 0) result += ' and ' + belowThousand(cents).trim() + ' ' + centName
  return result.replace(/\s+/g, ' ').trim() + ' Only'
}

export const CURRENCY_WORDS: Record<string, { main: string; sub: string }> = {
  USD: { main: 'Dollars', sub: 'Cents' },
  GBP: { main: 'Pounds', sub: 'Pence' },
  EUR: { main: 'Euros', sub: 'Cents' },
  INR: { main: 'Rupees', sub: 'Paise' },
  CAD: { main: 'Dollars', sub: 'Cents' },
  AUD: { main: 'Dollars', sub: 'Cents' },
  AED: { main: 'Dirhams', sub: 'Fils' },
  ZAR: { main: 'Rand', sub: 'Cents' },
  KES: { main: 'Shillings', sub: 'Cents' },
  NGN: { main: 'Naira', sub: 'Kobo' },
  PHP: { main: 'Pesos', sub: 'Centavos' },
  NZD: { main: 'Dollars', sub: 'Cents' },
  PKR: { main: 'Rupees', sub: 'Paisa' },
}

export function generateDocumentRef(companyName: string, payDate: string): string {
  const prefix = 'PAY'
  const year = payDate ? new Date(payDate).getFullYear() : new Date().getFullYear()
  const month = payDate ? String(new Date(payDate).getMonth() + 1).padStart(2, '0') : String(new Date().getMonth() + 1).padStart(2, '0')
  const hash = Math.abs(companyName.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 9000 + 1000
  const seq = String(Math.floor(Math.random() * 900) + 100)
  return `${prefix}-${year}-${month}-${hash}${seq}`
}

export function formatCurrency(amount: number, symbol: string, currency: string): string {
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  if (currency === 'AED' || currency === 'PKR') return `${symbol} ${formatted}`
  return `${symbol}${formatted}`
}
