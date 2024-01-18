import JStr from '../src/main.ts';

/**
 * The after method returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:
 */

describe('JStr static mask function', () => {
    test('should return the original value if character is an empty string', () => {
        const result = JStr.mask('example', '', 2, 3);
        expect(result).toBe('example');
    });

    test('should return the original value if the segment is empty', () => {
        const result = JStr.mask('example', 'X', 10, 3);
        expect(result).toBe('example');
    });

    test('should mask the specified segment with the given character', () => {
        const result = JStr.mask('1234567890', 'X', 2, 6);
        expect(result).toBe('12XXXXXX90');
    });

    test('should handle negative index correctly', () => {
        const result = JStr.mask('abcdefgh', 'X', 2, 2);
        expect(result).toBe('abXXefgh');
    });

    test('should handle negative index that is out of bounds correctly', () => {
        const result = JStr.mask('abcdefgh', 'X', 0, 3);
        expect(result).toBe('XXXdefgh');
    });

});

describe('JStr dynamic mask function', () => {
    test('should return the original value if character is an empty string', () => {
        const result = JStr.of('example').mask('', 2, 3).toString();
        expect(result).toBe('example');
    });

    test('should return the original value if the segment is empty', () => {
        const result = JStr.of('example').mask('X', 10, 3).toString();
        expect(result).toBe('example');
    });

    test('should mask the specified segment with the given character', () => {
        const result = JStr.of('1234567890').mask('X', 2, 6).toString();
        expect(result).toBe('12XXXXXX90');
    });

    test('should handle negative index correctly', () => {
        const result = JStr.of('abcdefgh').mask('X', 2, 2).toString();
        expect(result).toBe('abXXefgh');
    });

    test('should handle negative index that is out of bounds correctly', () => {
        const result = JStr.of('abcdefgh').mask('X', 0, 3).toString();
        expect(result).toBe('XXXdefgh');
    });


});
