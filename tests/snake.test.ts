import JStr from '../src/main.ts';

/**
 * The snake method converts the given string to snake_case
 */

describe('JStr snake static function', () => {
    test('should convert a camelCase string to snake_case', () => {
        const result = JStr.snake('camelCaseString');
        expect(result).toBe('camel_case_string');
    });

    test('should convert a PascalCase string to snake_case', () => {
        const result = JStr.snake('PascalCaseString');
        expect(result).toBe('pascal_case_string');
    });

    test('should convert a string with spaces to snake_case', () => {
        const result = JStr.snake('snake case string');
        expect(result).toBe('snake_case_string');
    });

    test('should convert a string with hyphens to snake_case', () => {
        const result = JStr.snake('snake-case-string');
        expect(result).toBe('snake_case_string');
    });

    test('should handle an empty string', () => {
        const result = JStr.snake('');
        expect(result).toBe('');
    });

    test('should handle a string with only one word', () => {
        const result = JStr.snake('word');
        expect(result).toBe('word');
    });

    test('should allow custom delimiter', () => {
        const result = JStr.snake('customDelimiterString', '-');
        expect(result).toBe('custom-delimiter-string');
    });
});


describe('JStr snake dynamic function', () => {
    test('should convert a camelCase string to snake_case', () => {
        const result = JStr.of('camelCaseString').snake().toString();
        expect(result).toBe('camel_case_string');
    });

    test('should convert a PascalCase string to snake_case', () => {
        const result = JStr.of('PascalCaseString').snake().toString();
        expect(result).toBe('pascal_case_string');
    });

    test('should convert a string with spaces to snake_case', () => {
        const result = JStr.of('snake case string').snake().toString();
        expect(result).toBe('snake_case_string');
    });

    test('should convert a string with hyphens to snake_case', () => {
        const result = JStr.of('snake-case-string').snake().toString();
        expect(result).toBe('snake_case_string');
    });

    test('should convert a string with mixed case and spaces to snake_case', () => {
        const result = JStr.of('Mixed Case String').lower().snake().toString();
        expect(result).toBe('mixed_case_string');
    });

    test('should handle an empty string', () => {
        const result = JStr.of('').snake().toString();
        expect(result).toBe('');
    });

    test('should handle a string with only one word', () => {
        const result = JStr.of('word').snake().toString();
        expect(result).toBe('word');
    });

    test('should allow custom delimiter', () => {
        const result = JStr.of('customDelimiterString').snake('-').toString();
        expect(result).toBe('custom-delimiter-string');
    });
});



