import JStr from "../src/main.ts";

/**
 * The matchAll method will return a collection containing the portions of a string that match a given regular expression pattern
 */

describe("JStr matchAll static method", () => {

    // Test for successful matching with a captured group
    test('should return the match value in array when a match is found', () => {
        const pattern = /\d+/;
        const subject = 'abc123def456';
        const expectedMatch = ['123', '456'];

        expect(JStr.matchAll(pattern, subject)).toStrictEqual(expectedMatch);
    });

    // Test for successful matching without a captured group
    test('should return the match value when the match found', () => {
        const pattern = /hello/;
        const subject = 'hello, world! hello world';
        const expectedMatch = ['hello', 'hello'];

        expect(JStr.matchAll(pattern, subject)).toStrictEqual(expectedMatch);
    });

    // Test for no match
    test('should return empty array when there is no match', () => {
        const pattern = /abc/;
        const subject = 'xyz';
        const expectedMatch: any[] = [];

        expect(JStr.matchAll(pattern, subject)).toStrictEqual(expectedMatch);
    });
    // greedy match
    test('should return true when there is match', () => {
        const pattern = /(ab)*c/;
        const subject = 'ababcabab';
        const expectedMatch = ["ab"];

        expect(JStr.matchAll(pattern, subject)).toStrictEqual(expectedMatch);
    });
})


describe("JStr matchAll dynamic method", () => {

    // Test for successful matching with a captured group
    test('should return the match value in array when a match is found', () => {
        const pattern = /\d+/;
        const subject = 'abc123def456';
        const expectedMatch = ['123', '456'];

        expect(JStr.of(subject).matchAll(pattern)).toStrictEqual(expectedMatch);
    });

    // Test for successful matching without a captured group
    test('should return the match value when the match found', () => {
        const pattern = /hello/;
        const subject = 'hello, world! hello world';
        const expectedMatch = ['hello', 'hello'];

        expect(JStr.of(subject).matchAll(pattern)).toStrictEqual(expectedMatch);
    });

    // Test for no match
    test('should return empty array when there is no match', () => {
        const pattern = /abc/;
        const subject = 'xyz';
        const expectedMatch: any[] = [];

        expect(JStr.of(subject).matchAll(pattern)).toStrictEqual(expectedMatch);
    });
    // greedy match
    test('should return true when there is match', () => {
        const pattern = /(ab)*c/ig;
        const subject = 'ababcabab';
        const expectedMatch = ["ab"];

        expect(JStr.of(subject).matchAll(pattern)).toStrictEqual(expectedMatch);
    });
})



