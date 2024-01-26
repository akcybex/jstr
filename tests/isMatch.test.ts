import JStr from "../src/main.ts";

/**
 * The isMatch method will return true if the string matches a given regular expression
 */

describe("JStr isMatch static method", () => {

    // Test for successful matching with a captured group
    test('should return the true when a match is found', () => {
        const pattern = /(\d{4})-(\d{2})-(\d{2})/;
        const subject = 'The date is 2024-01-15';
        const expectedMatch = true;

        expect(JStr.isMatch(pattern, subject)).toBe(expectedMatch);
    });

    // Test for successful matching without a captured group
    test('should return the true when the match found', () => {
        const pattern = /hello/;
        const subject = 'hello, world!';
        const expectedMatch = true;

        expect(JStr.isMatch(pattern, subject)).toBe(expectedMatch);
    });

    // Test for no match
    test('should return false when there is no match', () => {
        const pattern = /abc/;
        const subject = 'xyz';
        const expectedMatch = false;

        expect(JStr.isMatch(pattern, subject)).toBe(expectedMatch);
    });
    // greedy match
    test('should return true when there is match', () => {
        const pattern = /(ab)*c/ig;
        const subject = 'ababcabab';
        const expectedMatch = true;

        expect(JStr.isMatch(pattern, subject)).toBe(expectedMatch);
    });
})

describe("JStr isMatch dynamic method", () => {

    // Test for successful matching with a captured group
    test('should return the true when a match is found', () => {
        const pattern = /(\d{4})-(\d{2})-(\d{2})/;
        const subject = 'The date is 2024-01-15';
        const expectedMatch = true;

        expect(JStr.of(subject).isMatch(pattern)).toBe(expectedMatch);
    });

    // Test for successful matching without a captured group
    test('should return the true when the match found', () => {
        const pattern = /hello/;
        const subject = 'hello, world!';
        const expectedMatch = true;

        expect(JStr.of(subject).isMatch(pattern)).toBe(expectedMatch);
    });

    // Test for no match
    test('should return false when there is no match', () => {
        const pattern = /abc/;
        const subject = 'xyz';
        const expectedMatch = false;

        expect(JStr.of(subject).isMatch(pattern)).toBe(expectedMatch);
    });
    // greedy match
    test('should return true when there is match', () => {
        const pattern = /(ab)*c/ig;
        const subject = 'ababcabab';
        const expectedMatch = true;

        expect(JStr.of(subject).isMatch(pattern)).toBe(expectedMatch);
    });
})




