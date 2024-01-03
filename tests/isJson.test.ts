import JStr from '../src/main.ts';

/**
 * The isJson method determines if the given string is valid JSON
 */
describe('JStr isJson static method', () => {
    test('valid JSON string should return true', () => {
        const validJsonString = '{"key": "value"}';
        expect(JStr.isJson(validJsonString)).toBe(true);
    });

    test('invalid JSON string should return false', () => {
        const invalidJsonString = '{key: "value"}'; // Note: keys must be in double quotes for valid JSON
        expect(JStr.isJson(invalidJsonString)).toBe(false);
    });

    test('empty string should return false', () => {
        const emptyString = '';
        expect(JStr.isJson(emptyString)).toBe(false);
    });

    test('valid JSON object should return true', () => {
        const validJsonObject = { key: 'value' };
        expect(JStr.isJson(JSON.stringify(validJsonObject))).toBe(true);
    });

    test('error during JSON parsing should return false', () => {
        const invalidJsonString = '{"key": "value",}'; // Note the trailing comma causing a parsing error
        expect(JStr.isJson(invalidJsonString)).toBe(false);
    });
});


describe('JStr isJson dynamic method', () => {
    test('valid JSON string should return true', () => {
        const validJsonString = '{"key": "value"}';
        expect(JStr.of(validJsonString).isJson()).toBe(true);
    });

    test('invalid JSON string should return false', () => {
        const invalidJsonString = '{key: "value"}'; // Note: keys must be in double quotes for valid JSON
        expect(JStr.of(invalidJsonString).isJson()).toBe(false);
    });

    test('empty string should return false', () => {
        const emptyString = '';
        expect(JStr.of(emptyString).isJson()).toBe(false);
    });

    test('valid JSON object should return true', () => {
        const validJsonObject = { key: 'value' };
        expect(JStr.of(JSON.stringify(validJsonObject)).isJson()).toBe(true);
    });

    test('error during JSON parsing should return false', () => {
        const invalidJsonString = '{"key": "value",}'; // Note the trailing comma causing a parsing error
        expect(JStr.of(invalidJsonString).isJson()).toBe(false);
    });
});