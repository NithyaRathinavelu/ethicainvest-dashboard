// Indian number formatting utilities

/**
 * Formats a number in Indian numbering system (lakhs/crores)
 * Example: 124500 → "1,24,500"
 */
export function formatIndianNumber(num: number): string {
  const numStr = Math.abs(num).toString();
  const lastThree = numStr.substring(numStr.length - 3);
  const otherNumbers = numStr.substring(0, numStr.length - 3);

  if (otherNumbers !== '') {
    const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
    return num < 0 ? "-" + formatted : formatted;
  }

  return num < 0 ? "-" + lastThree : lastThree;
}

/**
 * Formats currency in Indian Rupees
 * Example: 124500 → "₹1,24,500"
 */
export function formatINR(amount: number, decimals: number = 0): string {
  const formatted = formatIndianNumber(Math.round(amount * Math.pow(10, decimals)) / Math.pow(10, decimals));
  return `₹${formatted}${decimals > 0 ? '.' + amount.toFixed(decimals).split('.')[1] : ''}`;
}

/**
 * Formats currency in compact Indian format (lakhs/crores)
 * Example: 124500 → "₹1.2L", 10000000 → "₹1Cr"
 */
export function formatCompactINR(amount: number): string {
  const absAmount = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';

  if (absAmount >= 10000000) {
    // Crores (1 Cr = 10,000,000)
    return `${sign}₹${(absAmount / 10000000).toFixed(1)}Cr`;
  } else if (absAmount >= 100000) {
    // Lakhs (1 L = 100,000)
    return `${sign}₹${(absAmount / 100000).toFixed(1)}L`;
  } else if (absAmount >= 1000) {
    // Thousands
    return `${sign}₹${(absAmount / 1000).toFixed(1)}K`;
  }

  return `${sign}₹${absAmount.toFixed(0)}`;
}

/**
 * Formats monthly SIP display
 * Example: 5000 → "₹5,000/mo"
 */
export function formatSIP(amount: number): string {
  return `${formatINR(amount)}/mo`;
}
