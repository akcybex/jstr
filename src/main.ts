import { v4 as uuid4, validate as uuidValidate } from 'uuid';
import Pluralize from 'pluralize';
import Stringable from './stringable.ts';
/**
 * JStr class for chainable string manipulations.
 */
class JStr {

    /**
     * Returns a new JStr instance containing the substring after the specified search string.
     * If the search string is not found, the original string is returned.
     * @param {string} subject - The input string.
     * @param {string} search - The search string.
     * @returns {string} A new string containing the substring after the search string, or the original string if the search string is not found.
     * @example
     * const result = JStr.after("hello world", "hello");
     * // result: " world"
     */
    static after(subject: string, search: string): string {
        const index = subject.indexOf(search);
        if (index === -1) return subject;
        return subject.substring(index + search.length);
    }

    /**
     * Returns everything after the last occurrence of the given value in a string.
     * The entire string will be returned if the value does not exist within the string.
     * @param {string} subject
     * @param {string} search - The delimiter to search for.
     * @returns {string} The substring after the last occurrence of the delimiter.
     * @example
     * const result = new JStr("App\\Http\\Controllers\\Controller").afterLast("\\");
     * // result: Controller
     */
    static afterLast(subject: string, search: string): string {
        const lastIndex = subject.lastIndexOf(search);

        if (lastIndex !== -1) {
            return subject.substring(lastIndex + search.length);
        } else {
            return subject;
        }
    }

    /**
     * Removes diacritics from the string, converting it to ASCII.
     * @returns {JStr} JStr instance for method chaining.
     * @example
     * const result = new JStr("héllô wórld").ascii().toString();
     * // result: "hello world"
     */
    static ascii(value: string): string {
        // This is a basic implementation. For a complete ASCII conversion, consider a library.
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    /**
     * Returns a new JStr instance containing the substring before the specified search string.
     * If the search string is not found, the original string is returned.
     * @param subject
     * @param {string} search - The search string.
     * @returns {JStr} A new JStr instance with the substring before the search string.
     * @example
     * const result = new JStr("hello world").before("world").toString();
     * // result: "hello "
     */
    static before(subject: string, search: string): string {
        const index = subject.indexOf(search);
        if (index === -1) return subject;
        return subject.substring(0, index);
    }

    /**
     * Returns everything before the last occurrence of the given value in a string.
     * The entire string will be returned if the value does not exist within the string.
     * @param subject
     * @param {string} search - The delimiter to search for.
     * @returns {string} The substring after the last occurrence of the delimiter.
     * @example
     * const result = new JStr("App\\Http\\Controllers\\Controller").beforeLast("\\");
     * // result: App\\Http\\Controllers
     */
    static beforeLast(subject: string, search: string): string {
        const lastIndex = subject.lastIndexOf(search);

        if (lastIndex !== -1) {
            return subject.substring(0, lastIndex);
        }

        return subject;
    }

    /**
     * Between the string to a specified words.
     * @param subject
     * @param from - The start of the string.
     * @param to - The end of the string.
     * @returns JStr instance for method chaining.
     * @example
     * // Returns 'brown'
     *  JStr.between('The quick brown fox jumps over the lazy dog', "quick", "fox");
     */
    static between(subject: string, from: string, to: string): string {
        if (from === '' || from === null || to === '' || to === null) {
            return subject;
        }

        return JStr.beforeLast(JStr.after(subject, from), to);
    }

    /**
     * Between the string to a specified words.
     * @param subject
     * @param from - The start of the string.
     * @param to - The end of the string.
     * @returns string
     */
    static betweenFirst(subject: string, from: string, to: string): string {
        if (from === '' || from === null || to === '' || to === null) {
            return subject;
        }

        return JStr.before(JStr.after(subject, from), to);
    }

    /**
     * Converts the string to camelCase.
     * @returns {string}
     * @example
     * const result = new JStr("hello world").camel().toString();
     * // result: "helloWorld"
     */
    static camel(value: string): string {
        return JStr.lcfirst(JStr.studly(value));
    }

    /**
     * Returns the character at the specified position in the string.
     * @param {string} subject - The string to retrieve the character from.
     * @param {number} index - The position of the character to retrieve. Negative values count from the end of the string.
     * @returns {string|boolean} The character at the specified position or `false` if the index is out of bounds.
     * @example
     * const result = JStr.chatAt("Hello World", 6);
     * // result: "W"
     */
    static chatAt(subject: string, index: number): any {
        const length = subject.length;

        if (index < 0 ? index < -length : index > length - 1) {
            return false;
        }

        return subject.charAt(index);
    }

    /**
     * Checks if the string contains the specified substring.
     * @param subject
     * @param {string} substring - The substring to check for.
     * @param ignoreCase
     * @returns {boolean} `true` if the substring is found, otherwise `false`.
     * @example
     * const result = new JStr("hello world").contains("lo");
     * // result: true
     */
    static contains(subject: string, substring: string | string[], ignoreCase: boolean = false): boolean {

        if (ignoreCase) {
            subject = subject.toLowerCase();
        }

        if (typeof substring === 'string') {
            // If searchTerms is a string, convert it to an array
            substring = [substring];
        }

        return substring.some((term) => subject.includes(term));
    }

    /**
     * Checks if the string contains all specified substrings.
     * @param subject
     * @param {string[]} values - An array of substrings to check for.
     * @param ignoreCase
     * @returns {boolean} `true` if the string contains all substrings, otherwise `false`.
     * @example
     * const result = new JStr("hello world").containsAll(["hello", "world"]);
     * // result: true
     */
    static containsAll(subject: string, values: string[], ignoreCase: boolean = false): boolean {
        for (let i = 0; i < values.length; i++) {
            if (!JStr.contains(subject, values[i], ignoreCase)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if the string ends with the specified substring.
     * @param subject
     * @param {string} substring - The substring to check for.
     * @returns {boolean} `true` if the string ends with the substring, otherwise `false`.
     * @example
     * const result = new JStr("hello world").endsWith("world");
     * // result: true
     */
    static endsWith(subject: string, substring: string | string[]): boolean {
        if (typeof substring === 'string') {
            substring = [substring];
        }

        for (let i = 0; i < substring.length; i++) {
            if (substring[i] !== '' && subject.endsWith(substring[i])) {
                return true;
            }
        }

        return false;
    }

    /**
     * Extracts an excerpt from text that matches the first instance of a phrase.
     * @param text - The input text.
     * @param phrase - The phrase to search for in the text.
     * @param options - Optional parameters including 'radius' and 'omission'.
     * @returns The excerpt containing the phrase, or null if not found.
     * @example
     * const excerpt = JStr.excerpt('Hello world, this is a test', 'world', {radius: 5, omission: '...'});
     * // excerpt: '...world, this...'
     */
    public static excerpt(text: string, phrase: string = '', options: { radius?: number, omission?: string } = {}): string | null {
        const radius = options.radius ?? 100;
        const omission = options.omission ?? '...';

        const regex = new RegExp(`^(.*?)(${phrase.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')})(.*)$`, 'iu');
        const matches = text.match(regex);

        if (!matches) {
            return null;
        }

        let start = matches[1];
        start = start.substring(Math.max(start.length - radius, 0));
        if (start.length > radius) {
            start = omission + start;
        }

        let end = matches[3];
        end = end.substring(0, radius);
        if (end.length > radius) {
            end += omission;
        }

        return start + matches[2] + end;
    }

    /**
     * Cap a string with a single instance of a given value.
     * @param value - The input string.
     * @param cap - The substring to ensure at the end of the input string.
     * @returns The modified string capped with the given substring.
     * @example
     * const result = JStr.finish('hello', 'world');
     * // result: 'helloworld'
     */
    public static finish(value: string, cap: string): string {
        const quoted = cap.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'); // Escape special regex characters
        const regex = new RegExp(`(?:${quoted})+$`, 'u'); // Pattern to match the 'cap' at the end of the string

        return value.replace(regex, '') + cap; // Replace multiple instances of 'cap' at the end with a single instance
    }
    /**
     * Wraps the string with the given strings.
     * @param value
     * @param {string} before - The string to be prepended to the input.
     * @param {string | null} after - The string to be appended to the input.
     * @returns {string} The wrapped string.
     * @example
     * const result = JStr.wrap("example", "[", "]");
     * // result: "[example]"
     */
    static wrap(value: string, before: string, after: string | null = null): string {
        after ||= before;
        return before + value + (after);
    }

    /**
     * Convert the given string to title case for each word.
     * @returns JStr instance for method chaining.
     * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
     */
    static headline(value: string): string {
        return value
            .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space between camelCase parts
            .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
            .replace(/\s+/g, ' ') // Replace multiple consecutive spaces with a single space
            .trim() // Trim leading and trailing spaces
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    /**
     * Convert the given string to capital case for each word first letter.
     * @returns JStr instance for method chaining.
     * @example jstr('hello world').capitalize().toString(); // Returns 'Hello World!'
     */
    static capitalize(value: string): string {
        return value
            .toLowerCase()
            .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    }

    /**
     * Determine if a given string matches a given pattern.
     * @param {string | Iterable<string>} pattern - The pattern or patterns to match against.
     * @param {string} value - The string to check against the pattern(s).
     * @returns {boolean} `true` if the string matches any of the patterns, `false` otherwise.
     * @example
     * const result = JStr.is(["pattern1", "pattern2"], "pattern1");
     * // result: true
     */
    static is(pattern: any | any[], value: string): boolean {
        if (!Array.isArray(pattern)) {
            pattern = [pattern];
        }

        for (const pat of pattern) {
            const currentPattern = pat.toString();

            if (currentPattern === value) {
                return true;
            }

            const escapedPattern = currentPattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const wildcardPattern = escapedPattern.replace(/\\\*/g, '.*');

            if (new RegExp('^' + wildcardPattern + '\\z', 'u').test(value)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Checks if the string contains only ASCII characters.
     * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
     * @example
     * const result = new JStr("hello").isAscii();
     * // result: true
     */
    static isAscii(value: string): boolean {
        return /^[\x00-\x7F]*$/.test(value);
    }

    /**
     * Checks if the string is a valid JSON format.
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid JSON format, `false` otherwise.
     * @example
     * const result = JStr.isJson('{"name": "John", "age": 30}');
     * // result: true
     */
    static isJson(value: string): boolean {
        try {
            JSON.parse(value);
        } catch (error) {
            return false;
        }

        return true;
    }

    /**
     * Checks if the string is a valid UUID.
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid UUID, `false` otherwise.
     * @example
     * const result = JStr.isUuid('550e8400-e29b-41d4-a716-446655440000');
     * // result: true
     */
    static isUuid(value: string): boolean {
        return uuidValidate(value);
    }

    /**
     * Determine if a given value is a valid ULID.
     * @param value - The value to check.
     * @returns True if the value is a valid ULID, false otherwise.
     * @example
     * const isValid = JStr.isUlid('01F3Z46YKPAWZVJMXTHWCKQWDT');
     * // isValid: true
     */
    public static isUlid(value: any): boolean {
        if (typeof value !== 'string') {
            return false;
        }

        return /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/.test(value);
    }

    /**
     * Checks if the string is a valid URL.
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid URL, `false` otherwise.
     * @example
     * const result = JStr.isUrl('https://www.example.com');
     * // result: true
     */
    static isUrl(value: string): boolean {
        try {
            new URL(value);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Converts the string to kebab-case.
     * @returns JStr instance for method chaining.
     * @example
     * // Returns 'hello-world'
     * jstr('Hello World').kebab().toString();
     * @param value
     */
    static kebab(value: string): string {
        return JStr.snake(value, '-');
    }

    /**
     * Converts the string to snake case.
     * @returns JStr instance for method chaining.
     * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
     * @param value
     * @param delimiter
     */
    static snake(value: string, delimiter: string = '_'): string {
        let snake = value
            .replace(/[\s-]+/g, delimiter)
            .replace(/([A-Z])/g, (_, char) => delimiter + char.toLowerCase());
        if (snake.startsWith(delimiter)) {
            snake = snake.substring(1);
        }
        return snake;
    }

    /**
     * Make a string's first character lowercase.
     * @returns {string}
     * @example
     * const result = new JStr("Hello World").lcfirst();
     * // result: JStr instance with value "hello World"
     */
    static lcfirst(value: string): string {
        return value.charAt(0).toLowerCase() + value.slice(1);
    }

    /**
     * Converts the first character of the string to uppercase.
     * @param {string} value - The string to convert.
     * @returns {string} The string with the first character in uppercase.
     * @example
     * const result = JStr.ucfirst('hello');
     * // result: 'Hello'
     */
    static ucfirst(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    /**
     * Splits the string into an array of words by uppercase characters.
     * @param {string} value - The string to split.
     * @returns {string[]} An array of words.
     * @example
     * const result = JStr.ucsplit('helloWorld');
     * // result: ['hello', 'World']
     */
    static ucsplit(value: string): string[] {
        return value.split(/(?=\p{Lu})/u).filter(Boolean);
    }


    /**
     * Returns the length of the string.
     * @returns {number} The length of the string.
     * @example
     * const result = new JStr("hello world").length();
     * // result: 11
     */
    static length(value: string, _encoding: string | null): number {
        return value.length;
    }

    /**
     * Limits the length of the string and appends an optional ending string.
     * @param value
     * @param {number} limit - The maximum length of the string.
     * @param {string} [end=''] - The optional ending string to append if the limit is exceeded.
     * @returns {JStr} JStr instance for method chaining.
     * @example
     * const result = new JStr("Lorem ipsum dolor sit amet").limit(10, '...').toString();
     * // result: "Lorem ipsu..."
     */
    static limit(value: string, limit: number = 100, end: string = '...'): string {
        if (value.length > limit) {
            return value.substring(0, limit) + end;
        }
        return value;
    }

    /**
     * Converts the string to lowercase.
     * @returns JStr instance for method chaining.
     */
    static lower(value: string): string {
        return value.toLowerCase();
    }

    /**
     * Converts the string to uppercase.
     * @returns JStr instance for method chaining.
     */
    static upper(value: string): string {
        return value.toUpperCase();
    }

    /**
     * Removes whitespace from the beginning of the string.
     * @param {string} value - The string to remove whitespace from.
     * @param characters
     * @returns {string} The string with leading whitespace removed.
     * @example
     * const result = JStr.ltrim('   hello');
     * // result: 'hello'
     */
    static ltrim(value: string, characters: string = '\r\n\t\v\0'): string {
        return value.replace(/^\s+/u, characters);
    }

    /**
     * Removes specified characters or whitespace from the beginning and end of the string.
     * @param value - The string to trim.
     * @param characters - The characters to remove from the start and end of the string. Defaults to whitespace.
     * @returns The string with specified characters or leading and trailing whitespace removed.
     * @example
     * const result = JStr.trim('---hello---', '-');
     * // result: 'hello'
     */
    static trim(value: string, characters: string = '\\s'): string {
        const escapedCharacters = characters.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
        const regex = new RegExp(`^${escapedCharacters}+|${escapedCharacters}+$`, 'g');
        return value.replace(regex, '');
    }
    /**
     * Removes whitespace from the end of the string.
     * @param {string} value - The string to remove whitespace from.
     * @param characters
     * @returns {string} The string with trailing whitespace removed.
     * @example
     * const result = JStr.rtrim('hello   ');
     * // result: 'hello'
     */
    static rtrim(value: string, characters: string = '\r\n\t\v\0'): string {
        return value.replace(/\s+$/u, characters);
    }

    /**
     * Masks a portion of a string with a repeated character.
     * @param {string} value - The string to mask.
     * @param {string} character - The character to use for masking.
     * @param {number} index - The starting index to apply the mask.
     * @param {number | null} length - The length of the substring to mask. If null, masks from the index to the end of the string.
     * @param _encoding
     * @returns {string} The masked string.
     * @example
     * const result = JStr.mask('password123', '*', 4, 3);
     * // result: 'pass***123'
     */
    static mask(value: string, character: string, index: number, length: number | null = null, _encoding: string = 'UTF-8'): string {
        if (character === '') {
            return value;
        }

        const segment = length !== null ? value.substr(index, length) : value.substr(index);

        if (segment === '') {
            return value;
        }

        const startIndex = index < 0 ? (index < -value.length ? 0 : value.length + index) : index;
        const start = value.substr(0, startIndex);
        const segmentLen = segment.length;
        const end = value.substr(startIndex + segmentLen);

        return start + character.charAt(0).repeat(segmentLen) + end;
    }

    /**
     * Get the string matching the given pattern.
     * @param {string} pattern - The regular expression pattern.
     * @param {string} subject - The subject string.
     * @returns {string} The string matching the pattern.
     * @example
     * const result = JStr.match(/\d+/, 'abc123def');
     * // result: '123'
     */
    static match(pattern: RegExp, subject: string): string {
        const matches = subject.match(pattern);
        return matches ? (matches[1] ?? matches[0]) : '';
    }

    /**
     * Determine if a given string matches a given pattern.
     * @param {string | RegExp | Iterable<string | RegExp>} pattern - The pattern or patterns to match against.
     * @param {string} value - The value to check for a match.
     * @returns {boolean} True if the value matches any of the patterns, false otherwise.
     * @example
     * const result = JStr.isMatch(/\d+/, 'abc123def');
     * // result: true
     */
    static isMatch(pattern: string | RegExp | Iterable<string | RegExp>, value: string): boolean {
        const stringValue = value.toString();

        if (Symbol.iterator in Object(pattern)) {
            pattern = Array.from(pattern as Iterable<string | RegExp>);
        } else {
            pattern = [pattern] as Iterable<string | RegExp>;
        }

        for (const p of pattern) {
            const regex = p instanceof RegExp ? p : new RegExp(p);
            if (regex.test(stringValue)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get the strings matching the given pattern.
     * @param {string} pattern - The regular expression pattern.
     * @param {string} subject - The subject string.
     * @returns {Array<string>} An array of strings matching the pattern.
     * @example
     * const result = JStr.matchAll(/\d+/, 'abc123def456');
     * // result: ['123', '456']
     */
    static matchAll(pattern: RegExp, subject: string): Array<string> {
        const matches = subject.matchAll(pattern);
        return matches ? Array.from(matches).map(match => match[1] ?? match[0]) : [];
    }

    /**
     * Generates a random, secure password.
     * @param {number} length - The length of the password.
     * @param {boolean} letters - Include letters in the password.
     * @param {boolean} numbers - Include numbers in the password.
     * @param {boolean} symbols - Include symbols in the password.
     * @param {boolean} spaces - Include spaces in the password.
     * @returns {string} A random password based on the specified criteria.
     * @example
     * const result = JStr.password(12, true, true, true, false);
     * // result: Random secure password with length 12 containing letters, numbers, and symbols.
     */
    static password(length: number = 32, letters: boolean = true, numbers: boolean = true, symbols: boolean = true, spaces: boolean = false): string {
        const characters: string[] = [];

        if (letters) {
            characters.push(...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        }

        if (numbers) {
            characters.push(...'0123456789');
        }

        if (symbols) {
            characters.push(...'~!#$%^&*()-_.,<>?/\\{}[]|:;');
        }

        if (spaces) {
            characters.push(' ');
        }

        const password = Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]);

        return password.join('');
    }

    /**
     * Converts the string to studly case, capitalizing each word and removing separators.
     * @returns {JStr} JStr instance for method chaining.
     * @example
     * const result = new JStr("hello_world").studly().toString();
     * // result: "HelloWorld"
     */
    static studly(value: string): string {
        return value
            .toLowerCase()
            .replace(/(?:^|\s|-|_)+(.)/g, (_, char) => char.toUpperCase());
    }

    /**
     * Pluralize the last word of an English, studly caps case string.
     *
     * @return string
     * @param value
     */
    static pluralStudly(value: string): string {
        const parts = value.split(/(?=[A-Z])/);
        const lastWord = parts.pop() || "";

        return parts.join('') + this.plural(lastWord);
    }

    /**
     * Returns the portion of the string specified by the start and length parameters.
     * @param {string} input - The input string or array of strings.
     * @param {number} start - The starting position of the substring.
     * @param {number | null} length - The length of the substring. If null, returns the substring from start to the end of the string.
     * @param _encoding
     * @returns {string | string[]} The substring or array of substrings.
     * @example
     * const result = JStr.substr("Hello, World", 7, 5);
     * // result: "World"
     */
    static substr(input: string, start: number, length: number | null = null, _encoding: string = 'UTF-8'): string {
        return input.substring(start, length !== null ? start + length : undefined);
    }

    /**
     * Returns the number of substring occurrences.
     * @param {string} haystack - The input string.
     * @param {string} needle - The substring to search for.
     * @param {number} offset - The starting position of the search.
     * @param {number | null} length - The length of the search. If null, searches to the end of the string.
     * @returns {number} The number of occurrences.
     * @example
     * const result = JStr.substrCount("ababab", "ab");
     * // result: 3
     */
    static substrCount(haystack: string, needle: string, offset: number = 0, length: number | null = null): number {
        if (length !== null) {
            return haystack.substring(offset, offset + length).split(needle).length - 1;
        }
        return haystack.substring(offset).split(needle).length - 1;
    }

    /**
     * Replace text within a portion of a string.
     * @param {string | string[]} input - The input string or array of strings.
     * @param {string | string[]} replace - The replacement string.
     * @param {number | number[]} offset - The starting position of the replacement.
     * @param {number | number[] | null} length - The length of the substring to replace. If null, replaces to the end of the string.
     * @returns {string | string[]} The resulting string or array of strings.
     * @example
     * const result = JStr.substrReplace("Hello, World", "Universe", 7, 5);
     * // result: "Hello, Universe"
     */
    static substrReplace(input: string | string[], replace: string | string[], offset: number | number[], length?: number | number[]): string | string[] {
        // Check if the input is a single string or an array of strings
        const isSingleString = typeof input === 'string';
        const isSingleReplace = typeof replace === 'string';
        const isSingleOffset = typeof offset === 'number';
        const isSingleLength = typeof length === 'number' || length === undefined;

        if (isSingleString && isSingleReplace && isSingleOffset && isSingleLength) {
            // Handle single string replacement
            const before = input.substring(0, offset);
            const after = input.substring(offset + (length ?? input.length));
            return `${before}${replace}${after}`;
        } else if (Array.isArray(input) && Array.isArray(replace) && Array.isArray(offset) && (Array.isArray(length) || length === undefined)) {
            // Handle array of strings replacement
            return input.map((str, index) => {
                const currentOffset = offset[index] ?? offset[0];
                const currentLength = length ? (length[index] ?? length[0]) : str.length;
                const before = str.substring(0, currentOffset);
                const after = str.substring(currentOffset + currentLength);
                return `${before}${replace[index] ?? replace[0]}${after}`;
            });
        }

        throw new Error('Invalid input type. Expected string or array of strings with corresponding types for replace, offset, and length.');
    }

    /**
     * Swap multiple keywords in a string with other keywords.
     * @param {Record<string, string>} map - An object representing the mapping of keywords to their replacements.
     * @param {string} subject - The input string.
     * @returns {string} The resulting string after swapping keywords.
     * @example
     * const result = JStr.swap({ 'foo': 'bar', 'hello': 'world' }, 'foo hello');
     * // result: "bar world"
     */
    static swap(map: Record<string, string>, subject: string): string {
        return subject.replace(
            new RegExp(Object.keys(map).map(key => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'g'),
            matched => map[matched],
        );
    }

    /**
     * Pad both sides of a string with another.
     * @param {string} value - The input string.
     * @param {number} length - The total length of the resulting padded string.
     * @param {string} pad - The string used for padding. Default is a space.
     * @returns {string} The resulting string after padding.
     * @example
     * const result = JStr.padBoth("Hello", 10, "-");
     * // result: "--Hello---"
     */
    static padBoth(value: string, length: number, pad: string = ' '): string {
        const short = Math.max(0, length - value.length);
        const shortLeft = Math.floor(short / 2);
        const shortRight = Math.ceil(short / 2);

        return `${pad.repeat(shortLeft)}${value}${pad.repeat(shortRight)}`;
    }

    /**
     * Pad the left side of a string with another.
     * @param {string} value - The input string.
     * @param {number} length - The total length of the resulting padded string.
     * @param {string} pad - The string used for padding. Default is a space.
     * @returns {string} The resulting string after padding.
     * @example
     * const result = JStr.padLeft("Hello", 10, "-");
     * // result: "-----Hello"
     */
    static padLeft(value: string, length: number, pad: string = ' '): string {
        const short = Math.max(0, length - value.length);
        return `${pad.repeat(short)}${value}`;
    }

    /**
     * Pad the right side of a string with another.
     * @param {string} value - The input string.
     * @param {number} length - The total length of the resulting padded string.
     * @param {string} pad - The string used for padding. Default is a space.
     * @returns {string} The resulting string after padding.
     * @example
     * const result = JStr.padRight("Hello", 10, "-");
     * // result: "Hello-----"
     */
    static padRight(value: string, length: number, pad: string = ' '): string {
        const short = Math.max(0, length - value.length);
        return `${value}${pad.repeat(short)}`;
    }


    /**
     * Repeat the given string.
     * @param {string} string - The input string.
     * @param {number} times - The number of times to repeat the string.
     * @returns {string} The resulting string after repetition.
     * @example
     * const result = JStr.repeat("Hello", 3);
     * // result: "HelloHelloHello"
     */
    static repeat(string: string, times: number): string {
        return string.repeat(times);
    }

    /**
     * Replace a given value in the string sequentially with an array.
     * @param {string} search - The value to search for.
     * @param {string[]} replace - An array of replacement values.
     * @param {string} subject - The input string.
     * @returns {string} The resulting string after replacement.
     * @example
     * const result = JStr.replaceArray(" ", ["Hello", "World"], "Goodbye Universe");
     * // result: "GoodbyeHelloWorldUniverse"
     */
    static replaceArray(search: string, replace: string[], subject: string): string {
        const segments = subject.split(search);
        let result = segments.shift();

        for (const segment of segments) {
            result += (replace.shift() ?? search) + segment;
        }

        return result as string;
    }

    /**
     * Replace the given value in the given string.
     * @param {string | string[]} search - The value or array of values to search for.
     * @param {string | string[]} replace - The value or array of values for replacement.
     * @param {string} subject - The input string.
     * @param {boolean} caseSensitive - Whether the replacement should be case-sensitive. Default is true.
     * @returns {string} The resulting string after replacement.
     * @example
     * const result = JStr.replace(["apple", "orange"], ["fruit1", "fruit2"], "An apple and an orange.");
     * // result: "An fruit1 and an fruit2."
     */
    static replace(
        search: string | string[],
        replace: string | string[],
        subject: string,
        caseSensitive: boolean = true,
    ): string {
        const searchArray = Array.isArray(search) ? search : [search];
        const replaceArray = Array.isArray(replace) ? replace : [replace];

        const regexFlags = caseSensitive ? '' : 'i';
        const regex = new RegExp(searchArray.map(s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), regexFlags);

        return subject.replace(regex, match => replaceArray.shift() ?? match);
    }

    /**
     * Replace the first occurrence of a given value in the string.
     * @param {string} search - The value to search for.
     * @param {string} replace - The replacement value.
     * @param {string} subject - The input string.
     * @returns {string} The resulting string after replacement.
     * @example
     * const result = JStr.replaceFirst("apple", "fruit", "An apple and an apple.");
     * // result: "An fruit and an apple."
     */
    static replaceFirst(search: string, replace: string, subject: string): string {
        const position = subject.indexOf(search);
        if (position !== -1) {
            return subject.substring(0, position) + replace + subject.substring(position + search.length);
        }
        return subject;
    }

    /**
     * Replace the last occurrence of a given value in the string.
     * @param {string} search - The value to search for.
     * @param {string} replace - The replacement value.
     * @param {string} subject - The input string.
     * @returns {string} The resulting string after replacement.
     * @example
     * const result = JStr.replaceLast("apple", "fruit", "An apple and an apple.");
     * // result: "An apple and an fruit."
     */
    static replaceLast(search: string, replace: string, subject: string): string {
        const position = subject.lastIndexOf(search);
        if (position !== -1) {
            return subject.substring(0, position) + replace + subject.substring(position + search.length);
        }
        return subject;
    }

    /**
     * Get the number of words a string contains.
     * @param string - The input string.
     * @param characters - Additional characters to be considered as words.
     * @returns The number of words in the string.
     * @example
     * const count = JStr.wordCount("Hello World");
     * // count: 2
     */
    static wordCount(string: string, characters: string | null = null): number {
        // Create a regular expression for splitting the string into words.
        // It includes any whitespace character (\s) and any character provided in the 'characters' parameter.
        const regexPattern = `[\\s${characters ? characters.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') : ''}]+`;
        const regex = new RegExp(regexPattern, 'u');

        return string.split(regex).filter(word => word.length > 0).length;
    }

    /**
     * Limit the number of words in a string.
     * @param {string} value - The input string.
     * @param {number} words - The maximum number of words to keep.
     * @param {string} end - The string to append at the end if the limit is reached.
     * @returns {string} The modified string with a limited number of words.
     * @example
     * const result = JStr.words("Lorem ipsum dolor sit amet", 3, '...');
     * // result: "Lorem ipsum dolor..."
     */
    static words(value: string, words: number = 100, end: string = '...'): string {
        const regexPattern = '^\\s*+(?:\\S++\\s*+){1,' + words + '}';
        const regex = new RegExp(regexPattern, 'u');
        const matches = value.match(regex);

        if (!matches || matches[0].length === value.length) {
            return value;
        }

        return matches[0].trimEnd() + end;
    }

    /**
     * Wrap a string to a given number of characters.
     * @param {string} string - The input string.
     * @param {number} characters - The number of characters at which the string will be wrapped.
     * @param {string} breakStr - The string to insert at the end of each line.
     * @param {boolean} cutLongWords - If true, long words will be cut instead of wrapped.
     * @returns {string} The wrapped string.
     * @example
     * const wrappedString = JStr.wordWrap("Lorem ipsum dolor sit amet", 20, "\n", true);
     * // wrappedString: "Lorem ipsum dolor\nsit amet"
     */
    static wordWrap(string: string, characters: number = 75, breakStr: string = '\n', cutLongWords: boolean = false): string {
        return string.replace(
            new RegExp(`.{1,${characters}}`, 'g'),
            (match, offset) => (cutLongWords && offset % characters !== 0) ? match : match + breakStr,
        );
    }

    /**
     * Find the multibyte safe position of the first occurrence of a given substring in a string.
     * @param {string} haystack - The string to search in.
     * @param {string} needle - The substring to search for.
     * @param {number} offset - The position to start the search from.
     * @param _encoding
     * @returns {number | false} The position of the first occurrence or false if not found.
     * @example
     * const result = JStr.position("Hello, World", "World", 0, "UTF-8");
     * // result: 7
     */
    static position(haystack: string, needle: string, offset: number = 0, _encoding: string | null = null): number | false {
        return haystack.indexOf(needle, offset);
    }

    /**
     * Begin a string with a single instance of a given value.
     * @param {string} value - The original string.
     * @param {string} prefix - The substring to add at the beginning.
     * @returns {string} The resulting string.
     * @example
     * const result = JStr.start("World", "Hello, ");
     * // result: "Hello, World"
     */
    static start(value: string, prefix: string): string {
        const quoted = prefix.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
        return prefix + value.replace(new RegExp(`^(?:${quoted})+`, 'u'), '');
    }

    /**
     * Determine if a given string starts with a given substring.
     * @param {string} haystack - The string to check.
     * @param {string | string[]} needles - The substring(s) to check for.
     * @returns {boolean} True if the string starts with any of the specified substrings, false otherwise.
     * @example
     * const result = JStr.startsWith("Hello, World", ["Hello", "Hi"]);
     * // result: true
     */
    static startsWith(haystack: string, needles: string | string[]): boolean {
        if (!Array.isArray(needles)) {
            needles = [needles];
        }

        return needles.some(needle => needle !== '' && haystack.startsWith(needle));
    }

    /**
     * Take the first or last {limit} characters of a string.
     * @param {string} value - The original string.
     * @param {number} limit - The number of characters to take. If negative, take from the end.
     * @returns {string} The resulting string.
     * @example
     * const result = JStr.take("Hello, World", 5);
     * // result: "Hello"
     */
    static take(value: string, limit: number): string {
        if (limit < 0) {
            return JStr.substr(value, limit);
        }

        return JStr.substr(value, 0, limit);
    }

    /**
     * Convert the given string to title case.
     * @param {string} value - The original string.
     * @returns {string} The resulting string in title case.
     * @example
     * const result = JStr.title("hello world");
     * // result: "Hello World"
     */
    static title(value: string): string {
        return value.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    /**
     * Generate a URL-friendly "slug" from a given string.
     * @param {string} title - The original string.
     * @param {string} separator - The separator for the slug.
     * @param {string | null} language - The language of the string (not used in this implementation).
     * @param {Record<string, string>} dictionary - A dictionary for replacing specific words.
     * @returns {string} The resulting slug.
     * @example
     * const result = JStr.slug("Hello World", "-", "en", {'@': 'at'});
     * // result: "hello-world"
     */
    static slug(title: string, separator: string = '-', language: string | null = null, dictionary: Record<string, string> = { '@': 'at' }): string {
        // Todo: Language
        title = language ? JStr.ascii(title) : title;
        // Convert to lowercase and replace spaces with the separator
        let slug = title.toLowerCase().replace(/\s+/gu, separator);

        // Replace dictionary words
        for (const [key, value] of Object.entries(dictionary)) {
            slug = slug.replace(new RegExp(key, 'gu'), separator + value + separator);
        }

        // Remove characters that are not the separator, letters, numbers, or whitespace
        slug = slug.replace(/[^a-z0-9-_\s]+/gu, '');

        // Replace consecutive separator characters and whitespace with a single separator
        slug = slug.replace(new RegExp(`[${separator}\\s]+`, 'gu'), separator);

        // Trim leading and trailing separators
        slug = slug.replace(new RegExp(`^${separator}+|${separator}+$`, 'gu'), '');

        return slug;
    }

    /**
     * Generate a UUID (version 4).
     *
     * @return string
     */
    static uuid(): string {
        return uuid4();
    }

    /**
     * Get the singular form of an English word.
     *
     * @return string
     * @param value
     */
    static singular(value: string): string {
        return Pluralize.singular(value);
    }

    /**
     * Get the plural form of an English word.
     *
     * @return string
     * @param value
     */
    static plural(value: string): string {
        return Pluralize.plural(value);
    }

    /**
     * Remove all "extra" blank space from the given string.
     *
     * @param value - The string to be processed.
     * @return The processed string with extra spaces removed.
     */
    static squish(value: string): string {
        // Trim whitespace and Byte Order Mark (BOM) from start and end of the string
        let result = value.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');

        // Replace sequences of whitespace characters (including Hangul Filler and Hangul Jungseong Ae) within the string with a single space
        result = result.replace(/(\s|\u3164|\u1160)+/g, ' ');

        return result;
    }

    /**
     * Reverse the given string.
     *
     * @param value - The string to be reversed.
     * @return The reversed string.
     */
    static reverse(value: string): string {
        // Split the string into an array of characters, reverse it, and then join it back into a string
        return Array.from(value).reverse().join('');
    }

    /**
     * Generate a more truly "random" alpha-numeric string.
     *
     * @param length - The length of the generated string.
     * @return The random alpha-numeric string.
     */
    static random(length: number = 16): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }

        return result;
    }

    /**
     * Remove any occurrence of the given string in the subject.
     *
     * @param search - The string to be removed.
     * @param subject - The string from which to remove.
     * @param caseSensitive - Whether the removal is case sensitive.
     * @return The string with the specified value removed.
     */
    static remove(search: string | string[], subject: string, caseSensitive: boolean = true): string {
        if (!Array.isArray(search)) {
            search = [search];
        }

        for (let s of search) {
            const pattern = RegExp(s, caseSensitive ? 'g' : 'gi');
            subject = subject.replace(pattern, '');
        }

        return subject;
    }

    /**
     * Creates a new JStr instance from the provided string.
     * @param {string} str - The input string to be encapsulated in a JStr instance.
     * @returns {Stringable} - A new JStr instance containing the provided string.
     * @example
     * // Returns a JStr instance representing 'Hello, JStr!'
     * JStr.of('Hello, JStr!').toString();
     */
    static of(str: string): Stringable {
        return new Stringable(str);
    }
}

// Exporting JStr as the default export
export default JStr;
