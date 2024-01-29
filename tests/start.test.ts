import JStr from '../src/main.ts';

/**
 * The start method adds a single instance of the given value to a string if it does not already start with that value
 */

describe('JStr start static function', () => {
    test('should add prefix to a string without the prefix', () => {
        const result = JStr.start('world', 'hello ');
        expect(result).toBe('hello world');
    });

    test('should not add duplicate prefix to a string with the same prefix', () => {
        const result = JStr.start('world', 'world');
        expect(result).toBe('world');
    });

    test('should not modify the string if it already starts with the prefix', () => {
        const result = JStr.start('hello world', 'hello ');
        expect(result).toBe('hello world');
    });

    test('should handle an empty string and add the prefix', () => {
        const result = JStr.start('', 'prefix');
        expect(result).toBe('prefix');
    });

    test('should handle an empty prefix and return the original string', () => {
        const result = JStr.start('string', '');
        expect(result).toBe('string');
    });

    test('should handle special characters in the prefix', () => {
        const result = JStr.start('*world', '*');
        expect(result).toBe('*world');
    });

    test('should handle a prefix with regex special characters', () => {
        const result = JStr.start('world', '.\\*');
        expect(result).toBe('.\\*world');
    });

    test('should handle Unicode characters in the prefix', () => {
        const result = JStr.start('world', '😊 ');
        expect(result).toBe('😊 world');
    });
});


describe('JStr start dynamic function', () => {
    test('should add prefix to a string without the prefix', () => {
        const result = JStr.of('world').start('hello ').toString();
        expect(result).toBe('hello world');
    });

    test('should not add duplicate prefix to a string with the same prefix', () => {
        const result = JStr.of('world').start('world').toString();
        expect(result).toBe('world');
    });

    test('should not modify the string if it already starts with the prefix', () => {
        const result = JStr.of('hello world').start('hello ').toString();
        expect(result).toBe('hello world');
    });

    test('should handle an empty string and add the prefix', () => {
        const result = JStr.of('').start('prefix').toString();
        expect(result).toBe('prefix');
    });

    test('should handle an empty prefix and return the original string', () => {
        const result = JStr.of('string').start('').toString();
        expect(result).toBe('string');
    });

    test('should handle special characters in the prefix', () => {
        const result = JStr.of('*world').start('*').toString();
        expect(result).toBe('*world');
    });

    test('should handle a prefix with regex special characters', () => {
        const result = JStr.of('world').start('.\\*').toString();
        expect(result).toBe('.\\*world');
    });

    test('should handle Unicode characters in the prefix', () => {
        const result = JStr.of('world').start('😊 ').toString();
        expect(result).toBe('😊 world');
    });
});



