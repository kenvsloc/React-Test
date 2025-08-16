type TaxRate = 3 | 5 | 8 | 10 | 15 | 20;

const TAX_RATES = {
    3: 0.03,
    5: 0.05,
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
