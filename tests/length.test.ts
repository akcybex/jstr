import JStr from '../src/main.ts';

/**
 * The length method returns the length of the given string:
 */

describe('JStr static length method', () => {
    test('should return the correct length of a non-empty string', () => {
        expect(JStr.length('Hello World')).toBe(11);

    });

    test('should return 0 for an empty string', () => {
        expect(JStr.length('')).toBe(0);
    });

    test('should return the correct length for a string with spaces', () => {
        expect(JStr.length('   Hello   ')).toBe(11);
    });

    test('should handle an empty string', () => {
        expect(JStr.length('\t\nHello\t\nWorld\n')).toBe(15);
    });

    test('should return the correct length for a string with specified encoding (not implemented', () => {
        expect(JStr.length('Hello World', 'utf-8')).toBe(11);
    });
});

describe('JStr dyamic length method', () => {
    test('should return the correct length of a non-empty string', () => {
        expect(JStr.of('Hello World').length()).toBe(11);

    });

    test('should return 0 for an empty string', () => {
        expect(JStr.of('').length()).toBe(0);
    });

    test('should return the correct length for a string with spaces', () => {
        expect(JStr.of('   Hello   ').length()).toBe(11);
    });

    test('should handle an empty string', () => {
        expect(JStr.of('\t\nHello\t\nWorld\n').length()).toBe(15);
    });

    test('should return the correct length for a string with specified encoding (not implemented', () => {
        expect(JStr.of('Hello World').length("utf-8")).toBe(11);
    });
});






