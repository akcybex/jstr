import JStr from "../src/main.ts";

/**
 * The match method will return the portion of a string that matches a given regular expression pattern
 */

describe("JStr match static method", () => {

    // Test for successful matching with a captured group
    test('should return the captured group when a match is found', () => {
        const pattern = /(\d{4})-(\d{2})-(\d{2})/g;
        const subject = 'The date is 2024-01-15';
        const expectedMatch = '2024-01-15';

        expect(JStr.match(pattern, subject)).toBe(expectedMatch);
    });

    // Test for successful matching without a captured group
    test('should return the entire match when there is no captured group', () => {
        const pattern = /hello/;
        const subject = 'hello, world!';
        const expectedMatch = 'hello';

        expect(JStr.match(pattern, subject)).toBe(expectedMatch);
    });

    // Test for no match
    test('should return empty string when there is no match', () => {
        const pattern = /abc/;
        const subject = 'xyz';
        const expectedMatch = '';

        expect(JStr.match(pattern, subject)).toBe(expectedMatch);
    });
    // greedy match
    test('should return empty string when there is no match', () => {
        const pattern = /(ab)*c/ig;
        const subject = 'abababab';
        const expectedMatch = 'abaabc';

        expect(JStr.match(pattern, subject)).toBe(expectedMatch);
    });




})




