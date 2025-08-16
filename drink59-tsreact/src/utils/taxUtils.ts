// taxUtils.ts
type TaxRate = 8 | 10 | 15 | 20;

const TAX_RATES = {
  8: 0.08,
  10: 0.10,
  15: 0.15,
  20: 0.20,
} as const;

interface TaxResult {
  subtotal: number;       // Tiền trước thuế
  taxAmount: number;      // Tiền thuế
  total: number;          // Tổng cộng sau thuế
}

/**
 * Hàm tính thuế dịch vụ
 * @param amount - Số tiền trước thuế
 * @param rate - Mức thuế: 8, 10, 15, hoặc 20 (%)
 * @returns Đối tượng kết quả gồm: subtotal, taxAmount, total
 */
export const calculateServiceTax = (amount: number, rate: TaxRate): TaxResult => {
  if (amount < 0) throw new Error("Số tiền phải lớn hơn hoặc bằng 0");

  const taxRate = TAX_RATES[rate];
  if (taxRate === undefined) {
    throw new Error("Mức thuế không hợp lệ. Chỉ hỗ trợ: 8%, 10%, 15%, 20%");
  }

  const taxAmount = amount * taxRate;
  const total = amount + taxAmount;

  return {
    subtotal: amount,
    taxAmount: Number(taxAmount.toFixed(2)), // Làm tròn 2 chữ số
    total: Number(total.toFixed(2)),
  };
};