import JStr from '../src/main.ts';

/**
 * The padLeft method, padding the left side of a string with another string until the final string reaches a desired length
 */

describe('JStr static padLeft method', () => {
    test('JStr.padLeft() - should pad left sides with spaces when necessary', () => {
        expect(JStr.padLeft('hello world', 20)).toBe('         hello world');
    });

    test('JStr.padLeft() - should pad left sides with a custom pad character when necessary', () => {
        expect(JStr.padLeft('hello', 10, '-')).toBe('-----hello');
    });
    test('JStr.padLeft() - should not pad when the length is equal to the value length', () => {
        expect(JStr.padLeft('hello', 5)).toBe('hello');
    });
    test('JStr.padLeft() - should not pad when the length is less than the value length', () => {
        expect(JStr.padLeft('hello', 3)).toBe('hello');
    });

    test('JStr.padLeft() - should handle an empty string value', () => {
        expect(JStr.padLeft('', 5)).toBe('     ');
    });

});

describe('JStr dynamic padLeft method', () => {
    test('JStr.padLeft() - should pad left sides with spaces when necessary', () => {
        expect(JStr.of('hello world').padLeft(20).toString()).toBe('         hello world');
    });

    test('JStr.padLeft() - should pad left sides with a custom pad character when necessary', () => {
        expect(JStr.of('hello').padLeft(10, '-').toString()).toBe('-----hello');
    });
    test('JStr.padLeft() - should not pad when the length is equal to the value length', () => {
        expect(JStr.of('hello').padLeft(5).toString()).toBe('hello');
    });
    test('JStr.padLeft() - should not pad when the length is less than the value length', () => {
        expect(JStr.of('hello').padLeft(3).toString()).toBe('hello');
    });

    test('JStr.padLeft() - should handle an empty string value', () => {
        expect(JStr.of('').padLeft(5).toString()).toBe('     ');
    });

});
