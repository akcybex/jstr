import JStr from '../src/main.ts';

/**
 * the isAscii method determines if a given string is 7 bit ASCII
 */

describe('JStr static isAscii method', () => {
    test('should return false non-ascii characters', () => {
        expect(JStr.isAscii('úá')).toBe(false);

    });

    test('should return true for a string containing only ASCII characters', () => {
        expect(JStr.isAscii('abcdef')).toBe(true);
    });

    test('should return true for an empty string', () => {
        expect(JStr.isAscii('')).toBe(true);
    });

    test('should return false for a string with mixed ASCII and non-ASCII characters', () => {
        expect(JStr.isAscii('hello你')).toBe(false);
    });
});

describe('JStr dynamic isAscii method', () => {
    test('should return false non-ascii characters', () => {
        expect(JStr.of('úá').isAscii()).toBe(false);

    });

    test('should return true for a string containing only ASCII characters', () => {
        expect(JStr.of('abcdef').isAscii()).toBe(true);
    });

    test('should return true for an empty string', () => {
        expect(JStr.of('').isAscii()).toBe(true);
    });

    test('should return false for a string with mixed ASCII and non-ASCII characters', () => {
        expect(JStr.of('hello你').isAscii()).toBe(false);
    });
});







