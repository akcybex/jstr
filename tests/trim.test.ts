import JStr from '../src/main.ts';

/**
 * The trim method trims the given string
 */

describe('JStr static trim method', () => {
    test('should handle an empty string', () => {
        expect(JStr.trim('')).toBe("");
    });
    test('should trim leading and trailing spaces by default', () => {
        expect(JStr.trim('   Hello World   ')).toBe("Hello World");

    });

    test('should trim leading and trailing specified characters', () => {
        expect(JStr.trim('***Hello World***', '*')).toBe("Hello World");
    });

    test('should trim leading and trailing specified characters (regex special characters)', () => {
        expect(JStr.trim('[Hello World!]', '[]!')).toBe("Hello World");
    });

    test('should trim leading and trailing whitespace, tabs, and newlines', () => {
        expect(JStr.trim('\t\n   Hello World \t\n')).toBe("Hello World");
    });

    test('should handle a string with only specified characters', () => {
        expect(JStr.trim('////', '/')).toBe("");
    });


});







