import JStr from '../src/main.ts';

/**
 * the ascii method will attempt to transliterate the string into an ASCII value
 */

describe('JStr static ascii method', () => {
    test('should remove accents from a string with accents', () => {
        expect(JStr.ascii('úá')).toBe("ua");

    });

    test('should not modify a string without accents', () => {
        expect(JStr.ascii('abcdef')).toBe('abcdef');
    });

    test('should handle mixed characters with and without accents', () => {
        expect(JStr.ascii('héllò wörld')).toBe('hello world');
    });

    test('should handle an empty string', () => {
        expect(JStr.ascii('')).toBe('');
    });

    test('should handle non-Latin characters', () => {
        expect(JStr.ascii('你')).toBe('你');
    });
});

describe('JStr dynamic ascii method', () => {
    test('should remove accents from a string with accents', () => {
        expect(JStr.of('úá').ascii().toString()).toBe("ua");

    });

    test('should not modify a string without accents', () => {
        expect(JStr.of('abcdef').ascii().toString()).toBe('abcdef');
    });

    test('should handle mixed characters with and without accents', () => {
        expect(JStr.of('héllò wörld').ascii().toString()).toBe('hello world');
    });

    test('should handle an empty string', () => {
        expect(JStr.of('').ascii().toString()).toBe('');
    });

    test('should handle non-Latin characters', () => {
        expect(JStr.of('你').ascii().toString()).toBe('你');
    });
});





