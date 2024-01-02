import { describe, expect, test } from 'vitest';

import { newArithmeticProgression, newGeometricProgression, newHarmonicProgression } from '../src';

describe('newArithmeticProgression', () => {
	test('returns empty array if length is 0', () => {
		expect(newArithmeticProgression(4, 0, 1)).toStrictEqual([]);
	});

	test('fills an array of n length if step is 0', () => {
		expect(newArithmeticProgression(5, 5, 0)).toStrictEqual([5, 5, 5, 5, 5]);
	});

	test('generates correctly', () => {
		expect(newArithmeticProgression(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
	});
});

describe('newGeometricProgression', () => {
	test('throws error if starting number is 0', () => {
		expect(() => newGeometricProgression(0, 5, 6)).toThrow(RangeError);
	});

	test('throws error if scale is 0', () => {
		expect(() => newGeometricProgression(5, 5, 0)).toThrow(RangeError);
	});

	test('returns empty array if length is 0', () => {
		expect(newGeometricProgression(1, 0, 2)).toStrictEqual([]);
	});

	test('generates correctly', () => {
		expect(newGeometricProgression(1, 11, 2)).toStrictEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
	});
});

describe('newHarmonicProgression', () => {
	test('throws error if starting number is 0', () => {
		expect(() => newHarmonicProgression(0, 2, 7)).toThrow(RangeError);
	});

	test('throws error if scale is 0', () => {
		expect(() => newHarmonicProgression(3, 4, 0)).toThrow(RangeError);
	});

	test('returns empty array if length is 0', () => {
		expect(newHarmonicProgression(1, 0, 2)).toEqual([]);
	});

	test('generates correctly', () => {
		expect(newHarmonicProgression(1, 5, 1)).toStrictEqual([1, 1/2, 1/3, 1/4, 1/5]);
	});
});
