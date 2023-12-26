import JStr from '../src/main.ts';

describe('JStr static afterLast method', () => {
    test('should return the substring after the last occurrence of the delimiter', () => {
        expect(JStr.afterLast('App\\Http\\Controllers\\Controller', '\\')).toBe(
            'Controller',
        );
    });

    test('should return the entire string if the delimiter is not found', () => {
        expect(JStr.afterLast('HelloWorld', '\\')).toBe('HelloWorld');
    });

    test('should handle an empty string correctly', () => {
        expect(JStr.afterLast('', '\\')).toBe('');
    });

    test('should handle a delimiter at the beginning of the string', () => {
        expect(JStr.afterLast('\\App\\Http\\Controllers\\Controller', '\\')).toBe('Controller');
    });

    test('should handle a multi-character delimiter', () => {
        expect(JStr.afterLast('abc123abc456abc789', 'abc')).toBe('789');
    });
});

describe('JStr dynamic afterLast method', () => {
    test('should return the substring after the last occurrence of the delimiter', () => {
        expect(JStr.of('App\\Http\\Controllers\\Controller').afterLast('\\').toString()).toBe(
            'Controller',
        );
    });

    test('should return the entire string if the delimiter is not found', () => {
        expect(JStr.of('HelloWorld').afterLast('\\').toString()).toBe('HelloWorld');
    });

    test('should handle an empty string correctly', () => {
        expect(JStr.of('').afterLast('\\').toString()).toBe('');
    });

    test('should handle a delimiter at the beginning of the string', () => {
        expect(JStr.of('\\App\\Http\\Controllers\\Controller').afterLast('\\').toString()).toBe('Controller');
    });

    test('should handle a multi-character delimiter', () => {
        expect(JStr.of('abc123abc456abc789').afterLast('abc').toString()).toBe('789');
    });
});