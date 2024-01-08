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

    // test('JStr.replace() - should replace multiple occurrences of search with replace', () => {
    //     const search = 'o';
    //     const replaceValue = 'O';
    //     const subject = 'Hello, world!';
    //     expect(JStr.replace(search, replaceValue, subject)).toBe("HellO, wOrld!");
    // });

    // test('JStr.replace() - should replace using arrays for search and replace', () => {
    //     const search = ['o', 'l'];
    //     const replaceValue = ['O', 'L'];
    //     const subject = 'Hello, world!';


    //     expect(JStr.replace(search, replaceValue, subject)).toBe("HeLLo, WOrLd!");
    // });


});


