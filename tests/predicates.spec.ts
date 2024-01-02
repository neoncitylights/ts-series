import { describe, expect, test } from 'vitest';

import { isArithmeticProgression, isGeometricProgression, isHarmonicProgression } from '../src';

describe('isHarmonicProgression', () => {
	test('detects correctly', () => {
		expect(() => isHarmonicProgression([])).toThrow(RangeError);
		expect(isHarmonicProgression([1, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6])).toStrictEqual([true, 1]);
		expect(isHarmonicProgression([1, 1 / 2, 1 / 3, 1 / 4, 1 / 7])).toStrictEqual([false, NaN]);
	});
});

describe('isGeometricProgression', () => {
	test('detects correctly', () => {
		expect(() => isGeometricProgression([])).toThrow(RangeError);
		expect(isGeometricProgression([1, 3, 9, 27, 81, 243])).toStrictEqual([true, 3]);
		expect(isGeometricProgression([1, 3, 9, 27, 96])).toStrictEqual([false, NaN]);
	});
});

describe('isArithmeticProgression', () => {
	test(' detects correctly', () => {
		expect(() => isArithmeticProgression([])).toThrow(RangeError);
		expect(isArithmeticProgression([1, 3, 5, 7, 10])).toStrictEqual([false, NaN]);
		expect(isArithmeticProgression([1, 3, 5, 7, 9])).toStrictEqual([true, 2]);
	});
});
