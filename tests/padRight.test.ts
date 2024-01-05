import JStr from '../src/main.ts';

/**
 * The padRight method, padding the right side of a string with another string until the final string reaches a desired length
 */

describe('JStr static padRight method', () => {
    test('JStr.padRight() - should pad right sides with spaces when necessary', () => {
        expect(JStr.padRight('hello world', 20)).toBe('hello world         ');
    });

    test('JStr.padRight() - should pad right sides with a custom pad character when necessary', () => {
        expect(JStr.padRight('hello', 10, '-')).toBe('hello-----');
    });
    test('JStr.padRight() - should not pad when the length is equal to the value length', () => {
        expect(JStr.padRight('hello', 5)).toBe('hello');
    });
    test('JStr.padRight() - should not pad when the length is less than the value length', () => {
        expect(JStr.padRight('hello', 3)).toBe('hello');
    });

    test('JStr.padRight() - should handle an empty string value', () => {
        expect(JStr.padRight('', 5)).toBe('     ');
    });

});

describe('JStr dynamic padRight method', () => {
    test('JStr.padRight() - should pad right sides with spaces when necessary', () => {
        expect(JStr.of('hello world').padRight(20).toString()).toBe('hello world         ');
    });

    test('JStr.padRight() - should pad right sides with a custom pad character when necessary', () => {
        expect(JStr.of('hello').padRight(10, '-').toString()).toBe('hello-----');
    });
    test('JStr.padRight() - should not pad when the length is equal to the value length', () => {
        expect(JStr.of('hello').padRight(5).toString()).toBe('hello');
    });
    test('JStr.padRight() - should not pad when the length is less than the value length', () => {
        expect(JStr.of('hello').padRight(3).toString()).toBe('hello');
    });

    test('JStr.padRight() - should handle an empty string value', () => {
        expect(JStr.of('').padRight(5).toString()).toBe('     ');
    });

});
