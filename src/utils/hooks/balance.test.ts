import { describe, it, expect } from 'vitest';

// Extract the balance calculation logic for testing
function calculateBalance(amount: string, decimals: number): { value: bigint; formatted: string } {
  const value = BigInt(amount);
  
  // Handle null/undefined decimals
  if (decimals == null) {
    throw new Error('Decimals cannot be null or undefined');
  }
  
  const factor = BigInt(10 ** decimals);
  
  // Use BigInt arithmetic for precision, then convert to decimal string
  const wholePart = value / factor;
  const fractionalPart = value % factor;
  
  // Convert to decimal string to avoid floating-point precision issues
  let decimalStr = wholePart.toString();
  
  if (fractionalPart > 0n) {
    // Pad fractional part with leading zeros to match decimal places
    const fractionalStr = fractionalPart.toString().padStart(decimals, '0');
    // Remove trailing zeros for cleaner display
    const trimmedFractional = fractionalStr.replace(/0+$/, '');
    if (trimmedFractional) {
      decimalStr += '.' + trimmedFractional;
    }
  }
  
  // Convert to number for rounding to 2 decimal places
  const adjusted = parseFloat(decimalStr);
  const rounded = Math.round(adjusted * 100) / 100;
  const formatted = rounded.toString();
  
  return {
    value,
    formatted,
  };
}

describe('Balance calculation logic', () => {
  describe('Basic functionality', () => {
    it('should handle whole numbers correctly', () => {
      const result = calculateBalance('1000000', 6);
      expect(result.formatted).toBe('1');
      expect(result.value).toBe(1000000n);
    });

    it('should handle fractional amounts correctly', () => {
      const result = calculateBalance('4966487025', 6);
      expect(result.formatted).toBe('4966.49');
      expect(result.value).toBe(4966487025n);
    });

    it('should handle zero correctly', () => {
      const result = calculateBalance('0', 6);
      expect(result.formatted).toBe('0');
      expect(result.value).toBe(0n);
    });

    it('should handle very small amounts correctly', () => {
      const result = calculateBalance('1', 6);
      expect(result.formatted).toBe('0');
      expect(result.value).toBe(1n);
    });

    it('should handle amounts just under 1 unit correctly', () => {
      const result = calculateBalance('999999', 6);
      expect(result.formatted).toBe('1');
      expect(result.value).toBe(999999n);
    });

    it('should handle amounts just over 1 unit correctly', () => {
      const result = calculateBalance('1000001', 6);
      expect(result.formatted).toBe('1');
      expect(result.value).toBe(1000001n);
    });
  });

  describe('Different decimal places', () => {
    it('should handle 18 decimals (like ETH)', () => {
      const result = calculateBalance('1000000000000000000', 18);
      expect(result.formatted).toBe('1');
      expect(result.value).toBe(1000000000000000000n);
    });

    it('should handle 18 decimals with fractional part', () => {
      const result = calculateBalance('1500000000000000000', 18);
      expect(result.formatted).toBe('1.5');
      expect(result.value).toBe(1500000000000000000n);
    });

    it('should handle 2 decimals (like USD cents)', () => {
      const result = calculateBalance('150', 2);
      expect(result.formatted).toBe('1.5');
      expect(result.value).toBe(150n);
    });

    it('should handle 0 decimals', () => {
      const result = calculateBalance('42', 0);
      expect(result.formatted).toBe('42');
      expect(result.value).toBe(42n);
    });
  });

  describe('Large numbers', () => {
    it('should handle very large amounts without precision loss', () => {
      const result = calculateBalance('999999999999999999999', 18);
      expect(result.formatted).toBe('1000');
      expect(result.value).toBe(999999999999999999999n);
    });

    it('should handle maximum safe BigInt values', () => {
      const largeAmount = '123456789012345678901234567890';
      const result = calculateBalance(largeAmount, 18);
      expect(result.value).toBe(BigInt(largeAmount));
      expect(typeof result.formatted).toBe('string');
      expect(result.formatted).not.toBe('NaN');
    });
  });

  describe('Rounding behavior', () => {
    it('should round to 2 decimal places', () => {
      const result = calculateBalance('1234567', 6); // 1.234567
      expect(result.formatted).toBe('1.23');
    });

    it('should round up when needed', () => {
      const result = calculateBalance('1235000', 6); // 1.235
      expect(result.formatted).toBe('1.24');
    });

    it('should handle exact 2 decimal places', () => {
      const result = calculateBalance('1230000', 6); // 1.23
      expect(result.formatted).toBe('1.23');
    });

    it('should handle trailing zeros correctly', () => {
      const result = calculateBalance('1200000', 6); // 1.2
      expect(result.formatted).toBe('1.2');
    });
  });

  describe('Edge cases', () => {
    it('should handle negative amounts', () => {
      const result = calculateBalance('-1000000', 6);
      expect(result.formatted).toBe('-1');
      expect(result.value).toBe(-1000000n);
    });

    it('should handle very high decimal precision', () => {
      const result = calculateBalance('1000000000000000000000000000000', 30);
      expect(result.value).toBe(1000000000000000000000000000000n);
      expect(typeof result.formatted).toBe('string');
      expect(result.formatted).not.toBe('NaN');
    });

    it('should handle single digit amounts', () => {
      const result = calculateBalance('5', 1);
      expect(result.formatted).toBe('0.5');
      expect(result.value).toBe(5n);
    });
  });

  describe('Error scenarios that would cause NaN in old logic', () => {
    it('should throw on invalid amount string', () => {
      expect(() => calculateBalance('invalid', 6)).toThrow();
    });

    it('should throw on null amount', () => {
      expect(() => calculateBalance(null as any, 6)).toThrow();
    });

    it('should throw on undefined amount', () => {
      expect(() => calculateBalance(undefined as any, 6)).toThrow();
    });

    it('should handle negative decimals by throwing', () => {
      expect(() => calculateBalance('1000000', -1)).toThrow();
    });

    it('should throw on null decimals', () => {
      expect(() => calculateBalance('1000000', null as any)).toThrow();
    });

    it('should throw on undefined decimals', () => {
      expect(() => calculateBalance('1000000', undefined as any)).toThrow();
    });
  });

  describe('Precision comparisons', () => {
    it('should maintain precision for large fractional parts', () => {
      const result1 = calculateBalance('4966487025', 6);
      const result2 = calculateBalance('4966487026', 6);
      
      expect(result1.formatted).toBe('4966.49');
      expect(result2.formatted).toBe('4966.49'); // Both round to same value
      expect(result1.value).not.toBe(result2.value); // But BigInt values are different
    });

    it('should handle precision at rounding boundaries', () => {
      const result1 = calculateBalance('1234999', 6); // 1.234999
      const result2 = calculateBalance('1235000', 6); // 1.235000
      const result3 = calculateBalance('1235001', 6); // 1.235001
      
      expect(result1.formatted).toBe('1.23');
      expect(result2.formatted).toBe('1.24');
      expect(result3.formatted).toBe('1.24');
    });
  });

  describe('Real world scenarios', () => {
    it('should handle typical credit amounts', () => {
      const scenarios = [
        { amount: '1000000', decimals: 6, expected: '1' },
        { amount: '500000', decimals: 6, expected: '0.5' },
        { amount: '1500000', decimals: 6, expected: '1.5' },
        { amount: '123456789', decimals: 6, expected: '123.46' },
      ];

      scenarios.forEach(({ amount, decimals, expected }) => {
        const result = calculateBalance(amount, decimals);
        expect(result.formatted).toBe(expected);
      });
    });

    it('should handle typical token amounts', () => {
      const scenarios = [
        { amount: '1000000000000000000', decimals: 18, expected: '1' }, // 1 ETH
        { amount: '500000000000000000', decimals: 18, expected: '0.5' }, // 0.5 ETH
        { amount: '1000000', decimals: 6, expected: '1' }, // 1 USDC
        { amount: '1500000', decimals: 6, expected: '1.5' }, // 1.5 USDC
      ];

      scenarios.forEach(({ amount, decimals, expected }) => {
        const result = calculateBalance(amount, decimals);
        expect(result.formatted).toBe(expected);
      });
    });
  });
}); 