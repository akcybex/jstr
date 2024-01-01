import JStr from '../src/main.ts';

/**
 * the isUuid method determines if the given string is a valid UUID:
 */

describe('JStr static isUuid method', () => {
    test('should return true if valid uuid', () => {
        expect(JStr.isUlid('a0a2a2d2-0b87-4a18-83f2-2529882be2de')).toBe(false);

    });

    test('should return false non valid string', () => {
        expect(JStr.isUlid('abcdef')).toBe(false);
    });

    test('should return false for an empty string', () => {
        expect(JStr.isUlid('')).toBe(false);
    });
});









