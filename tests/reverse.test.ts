import JStr from '../src/main.ts';

/**
 *The reverse method reverses the given string:
**/

describe('JStr reverse static function', () => {
    test('should reverse a non-empty string', () => {
        const result = JStr.reverse('hello');
        expect(result).toBe('olleh');
    });

    test('should reverse an empty string', () => {
        const result = JStr.reverse('');
        expect(result).toBe('');
    });

    test('should reverse a string with special characters', () => {
        const result = JStr.reverse('!@#$%^&*');
        expect(result).toBe('*&^%$#@!');
    });

    test('should reverse a string with numbers', () => {
        const result = JStr.reverse('12345');
        expect(result).toBe('54321');
    });

    test('should reverse a string with spaces', () => {
        const result = JStr.reverse('   Hello World   ');
        expect(result).toBe('   dlroW olleH   ');
    });

    test('should handle Unicode characters', () => {
        const result = JStr.reverse('😊🌟');
        expect(result).toBe('🌟😊');
    });
});

describe('JStr reverse dynamic function', () => {
    test('should reverse a non-empty string', () => {
        const result = JStr.of('hello').reverse().toString();
        expect(result).toBe('olleh');
    });

    test('should reverse an empty string', () => {
        const result = JStr.of('').reverse().toString();
        expect(result).toBe('');
    });

    test('should reverse a string with special characters', () => {
        const result = JStr.of('!@#$%^&*').reverse().toString();
        expect(result).toBe('*&^%$#@!');
    });

    test('should reverse a string with numbers', () => {
        const result = JStr.of('12345').reverse().toString();
        expect(result).toBe('54321');
    });

    test('should reverse a string with spaces', () => {
        const result = JStr.of('   Hello World   ').reverse().toString();
        expect(result).toBe('   dlroW olleH   ');
    });

    test('should handle Unicode characters', () => {
        const result = JStr.of('😊🌟').reverse().toString();
        expect(result).toBe('🌟😊');
    });
});