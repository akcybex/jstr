import JStr from '../src/main.ts';

/**
 * The replace method replaces a given string within the string and also accepts a caseSensitive argument. By default, the replace method is case sensitive
 */

describe('JStr static replace method', () => {

    test('JStr.replace() - should replace a single occurrence of search with replace', () => {
        const search = 'world';
        const replaceValue = 'planet';
        const subject = 'Hello, world!';
        expect(JStr.replace(search, replaceValue, subject)).toBe("Hello, planet!");
    });

    test('JStr.replace() - should replace multiple occurrences of search with replace', () => {
        const search = 'o';
        const replaceValue = 'O';
        const subject = 'Hello, world!';
        expect(JStr.replace(search, replaceValue, subject)).toBe("HellO, wOrld!");
    });

    test('JStr.replace() - should replace using arrays for search and replace', () => {
        const search = ['o', 'l'];
        const replaceValue = ['O', 'L'];
        const subject = 'Hello, world!';


        expect(JStr.replace(search, replaceValue, subject)).toBe("HeLLO, wOrLd!");
    });
    
    test('should handle array input for search and replace', () => {
        const search = ['apple', 'orange'];
        const replaceValue = ['banana', 'grape'];
        const subject = 'I like apple and orange';
        const result = JStr.replace(search, replaceValue, subject);
        expect(result).toBe('I like banana and grape');
    });

});

describe('JStr dynamic replace method', () => {

    test('JStr.replace() - should replace a single occurrence of search with replace', () => {
        const search = 'world';
        const replaceValue = 'planet';
        const subject = 'Hello, world!';
        expect(JStr.of(subject).replace(search, replaceValue).toString()).toBe("Hello, planet!");
    });

    test('JStr.replace() - should replace multiple occurrences of search with replace', () => {
        const search = 'o';
        const replaceValue = 'O';
        const subject = 'Hello, world!';
        expect(JStr.of(subject).replace(search, replaceValue).toString()).toBe("HellO, wOrld!");
    });

    test('JStr.replace() - should replace using arrays for search and replace', () => {
        const search = ['o', 'l'];
        const replaceValue = ['O', 'L'];
        const subject = 'Hello, world!';


        expect(JStr.of(subject).replace(search, replaceValue).toString()).toBe("HeLLO, wOrLd!");
    });


});


