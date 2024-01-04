import JStr from '../src/main.ts';

/**
 * The lcfirst method returns the given string with the first character lowercased
 */

describe('JStr static lcfirst method', () => {
    test('JStr.lcfirst() - should convert the first character to lowercase', () => {
        expect(JStr.lcfirst('Hello World')).toBe('hello World');
    });
    test('JStr.lcfirst() - should handle an empty string', () => {
        expect(JStr.lcfirst('')).toBe('');
    });

    test('JStr.lcfirst() - should not change the string if the first character is already lowercase', () => {
        expect(JStr.lcfirst('hello')).toBe('hello');
    });
    test('JStr.lcfirst() - should handle a string with only one character', () => {
        expect(JStr.lcfirst('A')).toBe('a');
    });


});

describe('JStr dynamic lcfirst method', () => {
    test('JStr.lcfirst() - should convert the first character to lowercase', () => {
        expect(JStr.of('Hello World').lcfirst().toString()).toBe('hello World');
    });
    test('JStr.lcfirst() - should handle an empty string', () => {
        expect(JStr.of('').lcfirst().toString()).toBe('');
    });

    test('JStr.lcfirst() - should not change the string if the first character is already lowercase', () => {
        expect(JStr.of('hello').lcfirst().toString()).toBe('hello');
    });
    test('JStr.lcfirst() - should handle a string with only one character', () => {
        expect(JStr.of('A').lcfirst().toString()).toBe('a');
    });


});

