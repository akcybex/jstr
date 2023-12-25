import JStr from '../src/main.ts';

describe('JStr afterLast method', () => {
    test('should return the substring after the last occurrence of the delimiter', () => {
        expect(JStr.of('App\\Http\\Controllers\\Controller').afterLast('\\')).toBe(
            'Controller',
        );
    });

    test('should return the entire string if the delimiter is not found', () => {
        expect(JStr.of('HelloWorld').afterLast('\\')).toBe('HelloWorld');
    });

    test('should handle an empty string correctly', () => {
        expect(JStr.of('').afterLast('\\')).toBe('');
    });

    test('should handle a delimiter at the beginning of the string', () => {
        expect(JStr.of('\\App\\Http\\Controllers\\Controller').afterLast('\\')).toBe('Controller');
    });

    test('should handle a multi-character delimiter', () => {
        expect(JStr.of('abc123abc456abc789').afterLast('abc')).toBe('789');
    });
});
