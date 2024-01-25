import JStr from '../src/main.ts';

/**
 * The replaceArray method replaces a given value in the string sequentially using an array
 */

describe('JStr replaceArray static method', () => {
    test('should replace a single string with an array of replacements', () => {
        const search = 'o';
        const replaceValue = ['x', 'y', 'z'];
        const subject = 'Hello, world!';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('Hellx, wyrld!');
    });

    test('should handle a single replacement in the array', () => {
        const search = 'apple';
        const replaceValue = ['banana'];
        const subject = 'I like apple and orange';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('I like banana and orange');
    });

    test('should handle an empty replacement array', () => {
        const search = 'o';
        const replaceValue: any[] = [];
        const subject = 'hello world';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('hello world');
    });

    test('should not replace if search string is not found', () => {
        const search = 'missing';
        const replaceValue = ['replacement'];
        const subject = 'This is a test';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('This is a test');
    });

    test('should handle special characters in search string', () => {
        const search = '$';
        const replaceValue = ['Dollar', 'Euro'];
        const subject = 'Pay $10 with €5';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('Pay Dollar10 with €5');
    });

    test('should handle an array of replacements longer than the number of occurrences', () => {
        const search = 'o';
        const replaceValue = ['x', 'y', 'z'];
        const subject = 'hello world';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('hellx wyrld');
    });

    test('should handle an array of replacements shorter than the number of occurrences', () => {
        const search = 'o';
        const replaceValue = ['x'];
        const subject = 'hello world';
        const result = JStr.replaceArray(search, replaceValue, subject);
        expect(result).toBe('hellx world');
    });
});

describe('JStr replaceArray dynamic method', () => {
    test('should replace a single string with an array of replacements', () => {
        const search = 'o';
        const replaceValue = ['x', 'y', 'z'];
        const subject = 'Hello, world!';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('Hellx, wyrld!');
    });

    test('should handle a single replacement in the array', () => {
        const search = 'apple';
        const replaceValue = ['banana'];
        const subject = 'I like apple and orange';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('I like banana and orange');
    });

    test('should handle an empty replacement array', () => {
        const search = 'o';
        const replaceValue: any[] = [];
        const subject = 'hello world';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('hello world');
    });

    test('should not replace if search string is not found', () => {
        const search = 'missing';
        const replaceValue = ['replacement'];
        const subject = 'This is a test';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('This is a test');
    });

    test('should handle special characters in search string', () => {
        const search = '$';
        const replaceValue = ['Dollar', 'Euro'];
        const subject = 'Pay $10 with €5';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('Pay Dollar10 with €5');
    });

    test('should handle an array of replacements longer than the number of occurrences', () => {
        const search = 'o';
        const replaceValue = ['x', 'y', 'z'];
        const subject = 'hello world';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('hellx wyrld');
    });

    test('should handle an array of replacements shorter than the number of occurrences', () => {
        const search = 'o';
        const replaceValue = ['x'];
        const subject = 'hello world';
        const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
        expect(result).toBe('hellx world');
    });
});



