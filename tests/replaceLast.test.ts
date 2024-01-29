import JStr from '../src/main.ts';

/**
 * The replaceLast method replaces the last occurrence of a given value in a string
 */

describe('JStr static replaceLast method', () => {

    test('JStr.replaceLast() - should replaceLast a single occurrence of search with replaceLast', () => {
        const search = 'world';
        const replaceLastValue = 'planet';
        const subject = 'Hello, world!';
        expect(JStr.replaceLast(search, replaceLastValue, subject)).toBe("Hello, planet!");
    });

    test('JStr.replaceLast() - should replaceLast multiple occurrences of search with replaceLast', () => {
        const search = 'o';
        const replaceLastValue = 'O';
        const subject = 'Hello, world!';
        expect(JStr.replaceLast(search, replaceLastValue, subject)).toBe("Hello, wOrld!");
    });

    test('JStr.replaceLast() - should handle empty replace string', () => {
        const search = "apple";
        const replaceLastValue = "";
        const subject = 'apple banana apple';


        expect(JStr.replaceLast(search, replaceLastValue, subject)).toBe("apple banana ");
    });

    test('should handle multiple occurrences of the search string', () => {
        const search = "apple";
        const replaceLastValue = "orange";
        const subject = 'apple banana apple apple';
        const result = JStr.replaceLast(search, replaceLastValue, subject);
        expect(result).toBe('apple banana apple orange');
    });

});

describe('JStr dynamic replaceLast method', () => {

    test('JStr.replaceLast() - should replaceLast a single occurrence of search with replaceLast', () => {
        const search = 'world';
        const replaceLastValue = 'planet';
        const subject = 'Hello, world!';
        expect(JStr.of(subject).replaceLast(search, replaceLastValue).toString()).toBe("Hello, planet!");
    });

    test('JStr.replaceLast() - should replaceLast multiple occurrences of search with replaceLast', () => {
        const search = 'o';
        const replaceLastValue = 'O';
        const subject = 'Hello, world!';
        expect(JStr.of(subject).replaceLast(search, replaceLastValue).toString()).toBe("Hello, wOrld!");
    });

    test('JStr.replaceLast() - should handle empty replace string', () => {
        const search = "apple";
        const replaceLastValue = "";
        const subject = 'apple banana apple';


        expect(JStr.of(subject).replaceLast(search, replaceLastValue).toString()).toBe("apple banana ");
    });

    test('should handle multiple occurrences of the search string', () => {
        const search = "apple";
        const replaceLastValue = "orange";
        const subject = 'apple banana apple apple';
        const result = JStr.of(subject).replaceLast(search, replaceLastValue).toString();
        expect(result).toBe('apple banana apple orange');
    });

});


