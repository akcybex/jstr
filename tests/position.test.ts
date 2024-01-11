import JStr from '../src/main.ts';

/**
 * The position method returns the position of the first occurrence of a substring in a string. If the substring does not exist in the given string, false is returned
 */

describe('JStr static position method', () => {

    test('JStr.position() - should find the position of needle in haystack', () => {
        expect(JStr.position("Hello, world!", 'world')).toBe(7);
    });

    test('JStr.position() - should find the position of needle in haystack start of given index', () => {
        expect(JStr.position("Hello, world! hello world", 'world', 10)).toBe(20);
    });

    test('JStr.position() - should find the position of needle in character', () => {
        expect(JStr.position("Hello, world!", 'o')).toBe(4);
    });

});

describe('JStr dynamic position method', () => {

    test('JStr.position() - should find the position of needle in haystack', () => {
        expect(JStr.of("Hello, world!").position('world')).toBe(7);
    });

    test('JStr.position() - should find the position of needle in haystack start of given index', () => {
        expect(JStr.of("Hello, world! hello world").position('world', 10)).toBe(20);
    });

    test('JStr.position() - should find the position of needle in character', () => {
        expect(JStr.of("Hello, world!").position('o')).toBe(4);
    });


});

