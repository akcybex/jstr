import JStr from '../src/main.ts';

/**
 * The replaceFirst method replaces the first occurrence of a given value in a string
 */

describe('JStr static replaceFirst method', () => {

    test('JStr.replaceFirst() - should replaceFirst a single occurrence of search with replaceFirst', () => {
        const search = 'world';
        const replaceFirstValue = 'planet';
        const subject = 'Hello, world!';
        expect(JStr.replaceFirst(search, replaceFirstValue, subject)).toBe("Hello, planet!");
    });

    test('JStr.replaceFirst() - should replaceFirst multiple occurrences of search with replaceFirst', () => {
        const search = 'o';
        const replaceFirstValue = 'O';
        const subject = 'Hello, world!';
        expect(JStr.replaceFirst(search, replaceFirstValue, subject)).toBe("HellO, world!");
    });

    test('JStr.replaceFirst() - should handle empty replace string', () => {
        const search = "apple";
        const replaceFirstValue = "";
        const subject = 'apple banana apple';


        expect(JStr.replaceFirst(search, replaceFirstValue, subject)).toBe(" banana apple");
    });

    test('should handle multiple occurrences of the search string', () => {
        const search = "apple";
        const replaceFirstValue = "orange";
        const subject = 'apple banana apple apple';
        const result = JStr.replaceFirst(search, replaceFirstValue, subject);
        expect(result).toBe('orange banana apple apple');
    });

});

describe('JStr dynamic replaceFirst method', () => {

    test('JStr.replaceFirst() - should replaceFirst a single occurrence of search with replaceFirst', () => {
        const search = 'world';
        const replaceFirstValue = 'planet';
        const subject = 'Hello, world!';
        expect(JStr.of(subject).replaceFirst(search, replaceFirstValue).toString()).toBe("Hello, planet!");
    });

    test('JStr.replaceFirst() - should replaceFirst multiple occurrences of search with replaceFirst', () => {
        const search = 'o';
        const replaceFirstValue = 'O';
        const subject = 'Hello, world!';
        expect(JStr.of(subject).replaceFirst(search, replaceFirstValue).toString()).toBe("HellO, world!");
    });

    test('JStr.replaceFirst() - should handle empty replace string', () => {
        const search = "apple";
        const replaceFirstValue = "";
        const subject = 'apple banana apple';


        expect(JStr.of(subject).replaceFirst(search, replaceFirstValue).toString()).toBe(" banana apple");
    });

    test('should handle multiple occurrences of the search string', () => {
        const search = "apple";
        const replaceFirstValue = "orange";
        const subject = 'apple banana apple apple';
        const result = JStr.of(subject).replaceFirst(search, replaceFirstValue).toString();
        expect(result).toBe('orange banana apple apple');
    });

});


