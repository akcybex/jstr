import JStr from '../src/main.ts';

/**
 * The padBoth method, padding both sides of a string with another string until the final string reaches a desired length
 */

describe('JStr static padBoth method', () => {
    test('JStr.padBoth() - should pad both sides with spaces when necessary', () => {
        expect(JStr.padBoth('hello', 10)).toBe('  hello   ');
    });

    test('JStr.padBoth() - should pad both sides with a custom pad character when necessary', () => {
        expect(JStr.padBoth('hello', 10, '-')).toBe('--hello---');
    });
    test('JStr.padBoth() - should not pad when the length is equal to the value length', () => {
        expect(JStr.padBoth('hello', 5)).toBe('hello');
    });
    test('JStr.padBoth() - should not pad when the length is less than the value length', () => {
        expect(JStr.padBoth('hello', 3)).toBe('hello');
    });

    test('JStr.padBoth() - should handle an empty string value', () => {
        expect(JStr.padBoth('', 5)).toBe('     ');
    });

});

describe('JStr dynamic padBoth method', () => {
    test('JStr.padBoth() - should pad both sides with spaces when necessary', () => {
        expect(JStr.of('hello').padBoth(10).toString()).toBe('  hello   ');
    });

    test('JStr.padBoth() - should pad both sides with a custom pad character when necessary', () => {
        expect(JStr.of('hello').padBoth(10, '-').toString()).toBe('--hello---');
    });
    test('JStr.padBoth() - should not pad when the length is equal to the value length', () => {
        expect(JStr.of('hello').padBoth(5).toString()).toBe('hello');
    });
    test('JStr.padBoth() - should not pad when the length is less than the value length', () => {
        expect(JStr.of('hello').padBoth(3).toString()).toBe('hello');
    });

    test('JStr.padBoth() - should handle an empty string value', () => {
        expect(JStr.of('').padBoth(5).toString()).toBe('     ');
    });

});
