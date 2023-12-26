import JStr from './main.ts';

/**
 * Stringable class for chainable string manipulations.
 */
class Stringable {

	private str: string;
	private static delay = 10; // milliseconds for delay
	/**
	 * Initializes a new instance of JStr with the given string.
	 * @param str - The initial string.
	 */
	constructor(str: string | string[]) {
		if (Array.isArray(str)) {
			str = str.join(' ');
		}

		this.str = str;

		interface StringableProxyHandler extends ProxyHandler<Stringable> {
			endOfChain: boolean;
		}

		const proxyHandler: StringableProxyHandler = {
			endOfChain: false,
			get: (target, prop, receiver) => {
				if (typeof target[prop as keyof JStr] === 'function') {
					return (...args: any[]) => {
						if (proxyHandler.endOfChain) {
							proxyHandler.endOfChain = false; // Reset for subsequent calls
							return target.toString();
						}

						const result = (target[prop as keyof Stringable] as Function).apply(target, args);

						setTimeout(() => {
							proxyHandler.endOfChain = true;
						}, Stringable.delay);

						return result instanceof Stringable ? new Proxy(result, proxyHandler) : result;
					};
				} else if (prop === 'valueOf' && proxyHandler.endOfChain) {
					proxyHandler.endOfChain = false;
					return () => target.toString();
				}

				return Reflect.get(target, prop, receiver);
			}
		};

		return new Proxy(this, proxyHandler);
	}

	/**
	 * Returns a new JStr instance containing the substring after the specified search string.
	 * If the search string is not found, the original string is returned.
	 * @param {string} search - The search string.
	 * @returns {Stringable} A new Stringable instance with the substring after the search string.
	 * @example
	 * const result = JStr.of("hello world").after("hello").toString();
	 * // result: " world"
	 */
	after(search: string): Stringable {
		return new Stringable(JStr.after(this.str, search));
	}

	/**
	 * Returns everything after the last occurrence of the given value in a string.
	 * The entire string will be returned if the value does not exist within the string.
	 * @param {string} search - The delimiter to search for.
	 * @returns {string} The substring after the last occurrence of the delimiter.
	 * @example
	 * const result = JStr.of("App\\Http\\Controllers\\Controller").afterLast("\\").toString();
	 * // result: Controller
	 */
	afterLast(search: string): Stringable {
		return new Stringable(JStr.afterLast(this.str, search));
	}

	/**
	 * Removes diacritics from the string, converting it to ASCII.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("héllô wórld").ascii().toString();
	 * // result: "hello world"
	 */
	ascii(): Stringable {
		return new Stringable(JStr.ascii(this.str));
	}

	/**
	 * Returns a new JStr instance containing the substring before the specified search string.
	 * If the search string is not found, the original string is returned.
	 * @param {string} search - The search string.
	 * @returns {JStr} A new JStr instance with the substring before the search string.
	 * @example
	 * const result = new JStr("hello world").before("world").toString();
	 * // result: "hello "
	 */
	before(search: string): Stringable {
		return new Stringable(JStr.before(this.str, search));
	}

	/**
	 * Returns everything before the last occurrence of the given value in a string.
	 * The entire string will be returned if the value does not exist within the string.
	 * @param {string} search - The delimiter to search for.
	 * @returns {string} The substring after the last occurrence of the delimiter.
	 * @example
	 * const result = new JStr("App\\Http\\Controllers\\Controller").beforeLast("\\");
	 * // result: App\\Http\\Controllers
	 */
	beforeLast(search: string): Stringable {
		return new Stringable(JStr.beforeLast(this.str, search));
	}

	/**
	 * Between the string to a specified words.
	 * @param start - The start of the string.
	 * @param end - The end of the string.
	 * @returns {Stringable}
	 * @example
	 * // Returns 'brown'
	 * JStr.of('The quick brown fox jumps over the lazy dog').between("quick", "fox").toString();
	 */
	between(start: string, end: string): Stringable {
		return new Stringable(JStr.between(this.str, start, end));
	}

	/**
	 * Between the string to a specified words.
	 * @param start - The start of the string.
	 * @param end - The end of the string.
	 * @returns {Stringable}
	 */
	betweenFirst(start: string, end: string): Stringable {
		return new Stringable(JStr.betweenFirst(this.str, start, end));
	}

	/**
	 * Converts the string to camelCase.
	 * @returns {Stringable} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").camel().toString();
	 * // result: "helloWorld"
	 */
	camel(): Stringable {
		return new Stringable(JStr.camel(this.str));
	}

	/**
	 * Returns the character at the specified position in the string.
	 * @param {number} index - The position of the character to retrieve. Negative values count from the end of the string.
	 * @returns {string|boolean} The character at the specified position or `false` if the index is out of bounds.
	 * @example
	 * const result = JStr.chatAt("Hello World", 6);
	 * // result: "W"
	 */
	chatAt(index: number): any {
		return new Stringable(JStr.chatAt(this.str, index));
	}

	/**
	 * Checks if the string contains the specified substring.
	 * @param {string} substring - The substring to check for.
	 * @param ignoreCase
	 * @returns {boolean} `true` if the substring is found, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").contains("lo");
	 * // result: true
	 */
	contains(substring: string | string[], ignoreCase: boolean = false): boolean {
		return JStr.contains(this.str, substring, ignoreCase);
	}

	/**
	 * Checks if the string contains all specified substrings.
	 * @param {string[]} values - An array of substrings to check for.
	 * @param ignoreCase
	 * @returns {boolean} `true` if the string contains all substrings, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").containsAll(["hello", "world"]);
	 * // result: true
	 */
	containsAll(values: string[], ignoreCase: boolean = false): boolean {
		return JStr.containsAll(this.str, values, ignoreCase);
	}

	/**
	 * Checks if the string ends with the specified substring.
	 * @param {string} substring - The substring to check for.
	 * @returns {boolean} `true` if the string ends with the substring, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").endsWith("world");
	 * // result: true
	 */
	endsWith(substring: string): boolean {
		return JStr.endsWith(this.str, substring);
	}

	/**
	 * Truncates the string to a specified length, appending a specified ending if needed.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'Hello...'
	 * jstr('Hello World').excerpt(5).toString();
	 * @param phrase
	 * @param options
	 */
	excerpt(phrase: string = '', options: { radius?: number; omission?: string } = {}): string | null {
		return JStr.excerpt(this.str, phrase, options);
	}

	/**
	 * Appends the specified value to the end of the string if it's not already present.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").finish(" world").toString();
	 * // result: "hello world"
	 * @param cap
	 */
	finish(cap: string): string {
		return JStr.finish(this.str, cap);
	}

	/**
	 * Wraps the string with the given strings.
	 * @param {string} before - The string to be prepended to the input.
	 * @param {string | null} after - The string to be appended to the input.
	 * @returns {JStr} A new JStr instance with the wrapped string.
	 * @example
	 * const result = JStr.of("example").wrap("[", "]");
	 * // result: JStr instance with value "[example]"
	 */
	wrap(before: string, after: string | null = null): Stringable {
		return new Stringable(JStr.wrap(this.str, before, after));
	}

	/**
	 * Convert the given string to title case for each word.
	 * @returns JStr instance for method chaining.
	 * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
	 */
	headline() {
		return new Stringable(JStr.headline(this.str));
	}

	/**
	 * Checks if the string matches the specified pattern.
	 * @param {string | RegExp} pattern - The pattern to match against. Can be a string or a RegExp.
	 * @returns {boolean} `true` if the string matches the pattern, otherwise `false`.
	 * @example
	 * const result = new JStr("hello").is("hello");
	 * // result: true
	 *
	 * const regex = /^[A-Za-z]+$/;
	 * const resultRegex = new JStr("hello").is(regex);
	 * // resultRegex: true
	 */
	is(pattern: any | any[]): boolean {
		return JStr.is(pattern, this.str);
	}

	/**
	 * Checks if the string contains only ASCII characters.
	 * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
	 * @example
	 * const result = new JStr("hello").isAscii();
	 * // result: true
	 */
	isAscii(): boolean {
		return JStr.isAscii(this.str);
	}

	/**
	 * Determine if the string is empty.
	 * @returns {boolean} `true` if the string is empty, `false` otherwise.
	 * @example
	 * const result = JStr.of("").isEmpty();
	 * // result: true
	 */
	isEmpty(): boolean {
		return this.str === '';
	}

	/**
	 * Determine if the string is not empty.
	 * @returns {boolean} `true` if the string is not empty, `false` otherwise.
	 * @example
	 * const result = JStr.of("Hello").isNotEmpty();
	 * // result: true
	 */
	isNotEmpty(): boolean {
		return !this.isEmpty();
	}

	/**
	 * Checks if the string is a valid JSON format.
	 * @returns {boolean} `true` if the string is a valid JSON format, `false` otherwise.
	 * @example
	 * const result = JStr.of('{"name": "John", "age": 30}').isJson();
	 * // result: true
	 */
	isJson(): boolean {
		return JStr.isJson(this.str);
	}

	/**
	 * Checks if the string is a valid UUID.
	 * @returns {boolean} `true` if the string is a valid UUID, `false` otherwise.
	 * @example
	 * const result = JStr.of('550e8400-e29b-41d4-a716-446655440000').isUuid();
	 * // result: true
	 */
	isUuid(): boolean {
		return JStr.isUuid(this.str);
	}

	/**
	 * Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).
	 * @returns {boolean} `true` if the string is a valid ULID, `false` otherwise.
	 * @example
	 * const result = JStr.of('01E8PMKMZDM1M79ZVBJK1SGGKV').isUlid();
	 * // result: true
	 */
	isUlid(): boolean {
		return JStr.isUlid(this.str);
	}

	/**
	 * Checks if the string is a valid URL.
	 * @returns {boolean} `true` if the string is a valid URL, `false` otherwise.
	 * @example
	 * const result = JStr.of('https://www.example.com').isUrl();
	 * // result: true
	 */
	isUrl(): boolean {
		return JStr.isUrl(this.str);
	}

	/**
	 * Converts the string to kebab-case.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'hello-world'
	 * jstr('Hello World').kebab().toString();
	 */
	kebab(): Stringable {
		return new Stringable(JStr.kebab(this.str));
	}

	/**
	 * Converts the string to snake case.
	 * @returns JStr instance for method chaining.
	 * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
	 * @param delimiter
	 */
	snake(delimiter: string = '_'): Stringable {
		return new Stringable(JStr.snake(this.str, delimiter));
	}

	/**
	 * Make a string's first character lowercase.
	 * @returns {string}
	 * @example
	 * const result = new JStr("Hello World").lcfirst();
	 * // result: JStr instance with value "hello World"
	 */
	lcfirst(): Stringable {
		return new Stringable(JStr.lcfirst(this.str));
	}

	/**
	 * Converts the first character of the string to uppercase.
	 * @param {string} value - The string to convert.
	 * @returns {string} The string with the first character in uppercase.
	 * @example
	 * const result = JStr.ucfirst('hello');
	 * // result: 'Hello'
	 */
	ucfirst(): Stringable {
		return new Stringable(JStr.ucfirst(this.str));
	}

	/**
	 * Splits the string into an array of words by uppercase characters.
	 * @param {string} value - The string to split.
	 * @returns {string[]} An array of words.
	 * @example
	 * const result = JStr.ucsplit('helloWorld');
	 * // result: ['hello', 'World']
	 */
	ucsplit(): string[] {
		return JStr.ucsplit(this.str);
	}

	/**
	 * Returns the length of the string.
	 * @returns {number} The length of the string.
	 * @example
	 * const result = new JStr("hello world").length();
	 * // result: 11
	 */
	length(encoding: string | null): number {
		return JStr.length(this.str, encoding);
	}

	/**
	 * Limits the length of the string and appends an optional ending string.
	 * @param {number} limit - The maximum length of the string.
	 * @param {string} [end=''] - The optional ending string to append if the limit is exceeded.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("Lorem ipsum dolor sit amet").limit(10, '...').toString();
	 * // result: "Lorem ipsu..."
	 */
	limit(limit: number = 100, end: string = '...'): Stringable {
		return new Stringable(JStr.limit(this.str, limit, end));
	}

	/**
	 * Converts the string to lowercase.
	 * @returns JStr instance for method chaining.
	 */
	lower(): Stringable {
		return new Stringable(JStr.lower(this.str));
	}

	/**
	 * Converts the string to uppercase.
	 * @returns JStr instance for method chaining.
	 */
	upper(): Stringable {
		return new Stringable(JStr.upper(this.str));
	}

	/**
	 * Removes whitespace from the beginning of the string.
	 * @param characters
	 * @returns {string} The string with leading whitespace removed.
	 * @example
	 * const result = JStr.ltrim('   hello');
	 * // result: 'hello'
	 */
	ltrim(characters: string = '\r\n\t\v\0'): Stringable {
		return new Stringable(JStr.ltrim(this.str, characters));
	}

	/**
	 * Removes whitespace from the beginning and end of the string.
	 * @returns {string} The string with leading and trailing whitespace removed.
	 * @example
	 * const result = JStr.trim('   hello   ');
	 * // result: 'hello'
	 */
	trim(): Stringable {
		return new Stringable(JStr.trim(this.str));
	}

	/**
	 * Removes whitespace from the end of the string.
	 * @param characters
	 * @returns {string} The string with trailing whitespace removed.
	 * @example
	 * const result = JStr.rtrim('hello   ');
	 * // result: 'hello'
	 */
	rtrim(characters: string = '\r\n\t\v\0'): Stringable {
		return new Stringable(JStr.rtrim(this.str, characters));
	}

	/**
	 * Masks a portion of a string with a repeated character.
	 * @param {string} value - The string to mask.
	 * @param {string} character - The character to use for masking.
	 * @param {number} index - The starting index to apply the mask.
	 * @param {number | null} length - The length of the substring to mask. If null, masks from the index to the end of the string.
	 * @param {string} encoding - The character encoding (default is 'UTF-8').
	 * @returns {string} The masked string.
	 * @example
	 * const result = JStr.mask('password123', '*', 4, 3);
	 * // result: 'pass***123'
	 */
	mask(character: string, index: number, length: number | null = null, encoding: string = 'UTF-8'): Stringable {
		return new Stringable(JStr.mask(this.str, character, index, length, encoding));
	}

	/**
	 * Get the string matching the given pattern.
	 * @param {string} pattern - The regular expression pattern.
	 * @returns {string} The string matching the pattern.
	 * @example
	 * const result = JStr.match(/\d+/, 'abc123def');
	 * // result: '123'
	 */
	match(pattern: RegExp): Stringable {
		return new Stringable(JStr.match(pattern, this.str));
	}

	/**
	 * Determine if a given string matches a given pattern.
	 * @param {string | RegExp | Iterable<string | RegExp>} pattern - The pattern or patterns to match against.
	 * @returns {boolean} True if the value matches any of the patterns, false otherwise.
	 * @example
	 * const result = JStr.isMatch(/\d+/, 'abc123def');
	 * // result: true
	 */
	isMatch(pattern: string | RegExp | Iterable<string | RegExp>): boolean {
		return JStr.isMatch(pattern, this.str);
	}

	/**
	 * Get the strings matching the given pattern.
	 * @param {string} pattern - The regular expression pattern.
	 * @returns {Array<string>} An array of strings matching the pattern.
	 * @example
	 * const result = JStr.matchAll(/\d+/, 'abc123def456');
	 * // result: ['123', '456']
	 */
	matchAll(pattern: RegExp): Array<string> {
		return JStr.matchAll(pattern, this.str);
	}

	/**
	 * Appends a new line to the string.
	 * @param {number} count - The number of new lines to append. Default is 1.
	 * @returns {JStr} A new JStr instance with the appended new lines.
	 * @example
	 * const result = new JStr("Hello").newLine(2);
	 * // result: JStr instance with value "Hello\n\n"
	 */
	newLine(count: number = 1): Stringable {
		return this.append('\n'.repeat(count));
	}

	/**
	 * Appends the given values to the string.
	 * @param {...(string | number | boolean | symbol)[]} values - The values to append to the string.
	 * @returns {JStr} A new JStr instance with the appended values.
	 * @example
	 * const result = new JStr("Hello").append(" World", 42, true);
	 * // result: JStr instance with value "Hello World42true"
	 */
	append(...values: (string | number | boolean | symbol)[]): Stringable {
		return new Stringable(this.str + values.join(''));
	}

	/**
	 * Prepends the given values to the string.
	 * @param {...string} values - The values to prepend to the string.
	 * @returns {JStr} A new JStr instance with the given values prepended.
	 * @example
	 * const result = new JStr("World").prepend("Hello, ");
	 * // result: JStr instance with value "Hello, World"
	 */
	prepend(...values: string[]): Stringable {
		return new Stringable(values.join('') + this.str);
	}

	/**
	 * Converts the string to studly case, capitalizing each word and removing separators.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello_world").studly().toString();
	 * // result: "HelloWorld"
	 */
	studly(): Stringable {
		return new Stringable(JStr.studly(this.str));
	}

	/**
	 * Pluralize the last word of an English, studly caps case string.
	 *
	 * @return string
	 */
	pluralStudly(): Stringable {
		return new Stringable(JStr.pluralStudly(this.str));
	}

	/**
	 * Returns the portion of the string specified by the start and length parameters.
	 * @param {number} start - The starting position of the substring.
	 * @param {number | null} length - The length of the substring. If null, returns the substring from start to the end of the string.
	 * @param encoding
	 * @returns {string | string[]} The substring or array of substrings.
	 * @example
	 * const result = JStr.substr("Hello, World", 7, 5);
	 * // result: "World"
	 */
	substr(start: number, length: number | null = null, encoding: string = 'UTF-8'): Stringable {
		return new Stringable(JStr.substr(this.str, start, length, encoding));
	}

	/**
	 * Returns the number of substring occurrences.
	 * @param {string} needle - The substring to search for.
	 * @param {number} offset - The starting position of the search.
	 * @param {number | null} length - The length of the search. If null, searches to the end of the string.
	 * @returns {number} The number of occurrences.
	 * @example
	 * const result = JStr.substrCount("ababab", "ab");
	 * // result: 3
	 */
	substrCount(needle: string, offset: number = 0, length: number | null = null): number {
		return JStr.substrCount(this.str, needle, offset, length);
	}

	/**
	 * Replace text within a portion of a string.
	 * @param {string | string[]} replace - The replacement string.
	 * @param {number | number[]} offset - The starting position of the replacement.
	 * @param {number | number[] | null} length - The length of the substring to replace. If null, replaces to the end of the string.
	 * @returns {string | string[]} The resulting string or array of strings.
	 * @example
	 * const result = JStr.substrReplace("Hello, World", "Universe", 7, 5);
	 * // result: "Hello, Universe"
	 */
	substrReplace(replace: string | string[], offset: number | number[], length?: number | number[]): Stringable {
		return new Stringable(JStr.substrReplace(this.str, replace, offset, length));
	}

	/**
	 * Swap multiple keywords in a string with other keywords.
	 * @param {Record<string, string>} map - An object representing the mapping of keywords to their replacements.
	 * @returns {string} The resulting string after swapping keywords.
	 * @example
	 * const result = JStr.swap({ 'foo': 'bar', 'hello': 'world' }, 'foo hello');
	 * // result: "bar world"
	 */
	swap(map: Record<string, string>): Stringable {
		return new Stringable(JStr.swap(map, this.str));
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
	padBoth(length: number, pad: string = ' '): Stringable {
		return new Stringable(JStr.padBoth(this.str, length, pad));
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
	padLeft(length: number, pad: string = ' '): Stringable {
		return new Stringable(JStr.padLeft(this.str, length, pad));
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
	padRight(length: number, pad: string = ' '): Stringable {
		return new Stringable(JStr.padRight(this.str, length, pad));
	}

	/**
	 * Repeat the given string.
	 * @param {number} times - The number of times to repeat the string.
	 * @returns {string} The resulting string after repetition.
	 * @example
	 * const result = JStr.repeat("Hello", 3);
	 * // result: "HelloHelloHello"
	 */
	repeat(times: number): Stringable {
		return new Stringable(JStr.repeat(this.str, times));
	}

	/**
	 * Replace a given value in the string sequentially with an array.
	 * @param {string} search - The value to search for.
	 * @param {string[]} replace - An array of replacement values.
	 * @returns {string} The resulting string after replacement.
	 * @example
	 * const result = JStr.replaceArray(" ", ["Hello", "World"], "Goodbye Universe");
	 * // result: "GoodbyeHelloWorldUniverse"
	 */
	replaceArray(search: string, replace: string[]): Stringable {
		return new Stringable(JStr.replaceArray(search, replace, this.str));
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
	replace(
		search: string | string[],
		replace: string | string[],
		caseSensitive: boolean = true,
	): Stringable {
		return new Stringable(JStr.replace(search, replace, this.str, caseSensitive));
	}

	/**
	 * Replace the first occurrence of a given value in the string.
	 * @param {string} search - The value to search for.
	 * @param {string} replace - The replacement value.
	 * @returns {string} The resulting string after replacement.
	 * @example
	 * const result = JStr.replaceFirst("apple", "fruit", "An apple and an apple.");
	 * // result: "An fruit and an apple."
	 */
	replaceFirst(search: string, replace: string): Stringable {
		return new Stringable(JStr.replaceFirst(search, replace, this.str));
	}

	/**
	 * Replace the last occurrence of a given value in the string.
	 * @param {string} search - The value to search for.
	 * @param {string} replace - The replacement value.
	 * @returns {string} The resulting string after replacement.
	 * @example
	 * const result = JStr.replaceLast("apple", "fruit", "An apple and an apple.");
	 * // result: "An apple and an fruit."
	 */
	replaceLast(search: string, replace: string): Stringable {
		return new Stringable(JStr.replaceFirst(search, replace, this.str));
	}

	/**
	 * Replace the patterns matching the given regular expression.
	 * @param {string | RegExp} pattern - The regular expression pattern to match.
	 * @param {((match: string, ...groups: any[]) => string) | string} replace - The replacement function or string.
	 * @param _limit
	 * @returns {JStr} A new JStr instance after replacements.
	 * @example
	 * const result = new JStr("Hello 123 World").replaceMatches(/\d+/, match => `[${match}]`, 1);
	 * // result: JStr instance with value "Hello [123] World"
	 */
	replaceMatches(pattern: string | RegExp, replace: ((match: string, ...groups: any[]) => string) | string, _limit: number = -1): Stringable {
		const input = this.str;
		const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, 'g');

		if (typeof replace === 'function') {
			const replaced = input.replace(regex, (...args) => replace(args[0], ...args.slice(1)));
			return new Stringable(replaced);
		} else {
			const replaced = input.replace(regex, replace);
			return new Stringable(replaced);
		}
	}

	/**
	 * Get the number of words a string contains.
	 * @param {string | null} characters - Additional characters to be considered as words.
	 * @returns {number} The number of words in the string.
	 * @example
	 * const count = JStr.wordCount("Hello World");
	 * // count: 2
	 */
	wordCount(characters: string | null = null): number {
		return JStr.wordCount(this.str, characters);
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
	words(words: number = 100, end: string = '...'): Stringable {
		return new Stringable(JStr.words(this.str, words, end));
	}

	/**
	 * Wrap a string to a given number of characters.
	 * @param {number} characters - The number of characters at which the string will be wrapped.
	 * @param {string} breakStr - The string to insert at the end of each line.
	 * @param {boolean} cutLongWords - If true, long words will be cut instead of wrapped.
	 * @returns {string} The wrapped string.
	 * @example
	 * const wrappedString = JStr.wordWrap("Lorem ipsum dolor sit amet", 20, "\n", true);
	 * // wrappedString: "Lorem ipsum dolor\nsit amet"
	 */
	wordWrap(characters: number = 75, breakStr: string = '\n', cutLongWords: boolean = false): Stringable {
		return new Stringable(JStr.wordWrap(this.str, characters, breakStr, cutLongWords));
	}

	/**
	 * Determine if the string is an exact match with the given value.
	 * @param {string | JStr} value - The value to compare with the current string.
	 * @returns {boolean} True if the strings are an exact match, false otherwise.
	 * @example
	 * const isMatch = new JStr("Hello, World").exactly("Hello, World");
	 * // isMatch: true
	 */
	exactly(value: string | Stringable): boolean {
		const targetValue = value instanceof Stringable ? value.toString() : value;
		return this.str === targetValue;
	}

	/**
	 * Explode the string into an array.
	 * @param {string} delimiter - The delimiter string used to split the original string.
	 * @param {number} limit - Maximum number of elements to return.
	 * @returns {string[]} An array containing the substrings.
	 * @example
	 * const result = new JStr("apple,orange,banana").explode(",");
	 * // result: ["apple", "orange", "banana"]
	 */
	explode(delimiter: string, limit: number = Number.MAX_SAFE_INTEGER): string[] {
		return this.str.split(delimiter, limit);
	}

	/**
	 * Call the given callback and return a new string.
	 * @param {Function} callback - The callback function to apply to the string.
	 * @returns {JStr} A new JStr instance resulting from the callback.
	 * @example
	 * const result = new JStr("Hello, World").pipe((str) => str.toUpperCase());
	 * // result: JStr instance with value "HELLO, WORLD"
	 */
	pipe(callback: (str: string) => string): Stringable {
		return new Stringable(callback(this.str));
	}

	/**
	 * Find the multibyte safe position of the first occurrence of a given substring in a string.
	 * @param {string} needle - The substring to search for.
	 * @param {number} offset - The position to start the search from.
	 * @param encoding
	 * @returns {number | false} The position of the first occurrence or false if not found.
	 * @example
	 * const result = JStr.position("Hello, World", "World", 0, "UTF-8");
	 * // result: 7
	 */
	position(needle: string, offset: number = 0, encoding: string | null = null): number | false {
		return JStr.position(this.str, needle, offset, encoding);
	}

	/**
	 * Begin a string with a single instance of a given value.
	 * @param {string} prefix - The substring to add at the beginning.
	 * @returns {string} The resulting string.
	 * @example
	 * const result = JStr.start("World", "Hello, ");
	 * // result: "Hello, World"
	 */
	start(prefix: string): Stringable {
		return new Stringable(JStr.start(this.str, prefix));
	}

	/**
	 * Determine if a given string starts with a given substring.
	 * @param {string | string[]} needles - The substring(s) to check for.
	 * @returns {boolean} True if the string starts with any of the specified substrings, false otherwise.
	 * @example
	 * const result = JStr.startsWith("Hello, World", ["Hello", "Hi"]);
	 * // result: true
	 */
	startsWith(needles: string | string[]): boolean {
		return JStr.startsWith(this.str, needles);
	}

	/**
	 * Take the first or last {limit} characters.
	 * @param {number} limit - The number of characters to take. If negative, take from the end.
	 * @returns {string} The resulting string.
	 * @example
	 * const result = JStr.take(5);
	 * // result: "Hello"
	 */
	take(limit: number): Stringable {
		if (limit < 0) {
			return this.substr(limit);
		}

		return this.substr(0, limit);
	}

	/**
	 * Convert the given string to title case.
	 * @returns {string} The resulting string in title case.
	 * @example
	 * const result = JStr.title("hello world");
	 * // result: "Hello World"
	 */
	title(): Stringable {
		return new Stringable(JStr.title(this.str));
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
	slug(separator: string = '-', language: string | null = null, dictionary: Record<string, string> = {'@' : 'at'}): Stringable {
		return new Stringable(JStr.slug(this.str, separator, language, dictionary));
	}

	/**
	 * Call the given callback function with this instance then return the instance.
	 * @param callback - The callback function to execute.
	 * @returns The current instance after executing the callback.
	 * @example
	 * const jstr = new JStr('hello world');
	 * const modified = jstr.tap(instance => instance.toUpperCase()).getValue();
	 * // modified: 'HELLO WORLD'
	 */
	public tap(callback?: (instance: this) => void): this {
		if (callback) {
			callback(this);
		}
		return this;
	}

	/**
	 * Get the singular form of an English word.
	 *
	 * @return string
	 */
	singular(): Stringable {
		return new Stringable(JStr.singular(this.str));
	}

	/**
	 * Get the plural form of an English word.
	 *
	 * @return string
	 */
	plural(): Stringable {
		return new Stringable(JStr.plural(this.str));
	}

	/**
	 * Remove all "extra" blank space from the given string.
	 *
	 * @return The processed string with extra spaces removed.
	 */
	squish(): Stringable {
		return new Stringable(JStr.squish(this.str));
	}

	/**
	 * Reverse the given string.
	 *
	 * @return The reversed string.
	 */
	reverse(): Stringable {
		return new Stringable(JStr.reverse(this.str));
	}

	/**
	 * Remove any occurrence of the given string in the subject.
	 *
	 * @param search - The string to be removed.
	 * @param caseSensitive - Whether the removal is case-sensitive.
	 * @return The string with the specified value removed.
	 */
	remove(search: string | string[], caseSensitive: boolean = true): Stringable {
		return new Stringable(JStr.remove(search, this.str, caseSensitive));
	}

	/**
	 * Parse input from a string to an array, according to a format.
	 *
	 * @param format - The format string.
	 * @return An array of parsed elements.
	 */
	scan(format: string): any[] {
		// This is a simple implementation. Complex format parsing like sscanf in PHP is not straightforward in JavaScript.
		const regex = new RegExp(format);
		const matches = regex.exec(this.str);
		return matches ? matches.slice(1) : [];
	}

	/**
	 * Split a string using a regular expression or by length.
	 *
	 * @param pattern - The pattern or length to split by.
	 * @param limit - The maximum number of splits.
	 * @return An array of string segments.
	 */
	split(pattern: string | number, limit: number = -1): string[] {
		if (typeof pattern === 'number') {
			return this.str.match(new RegExp(`.{1,${pattern}}`, 'g')) || [];
		} else {
			return this.str.split(new RegExp(pattern), limit);
		}
	}

	/**
	 * Determine if the string matches the given pattern.
	 *
	 * @param pattern - The pattern to test against.
	 * @return True if the string matches the pattern, false otherwise.
	 */
	public test(pattern: string): boolean {
		return this.isMatch(pattern)
	}

	/**
	 * Apply the callback if the given "value" is truthy.
	 * @param value - The value to evaluate or a function returning the value.
	 * @param callback - The callback to execute if the value is truthy.
	 * @param defaultCallback - The callback to execute if the value is falsy.
	 * @returns The result of the callback or the instance itself.
	 */
	public when<T>(
		value: boolean | (() => boolean),
		callback?: (instance: this) => T,
		defaultCallback?: (instance: this) => T
	): this | T {
		let evaluatedValue = typeof value === 'function' ? value() : value;

		if (evaluatedValue && callback) {
			return callback(this);
		} else if (!evaluatedValue && defaultCallback) {
			return defaultCallback(this);
		}

		return this;
	}

	/**
	 * Apply the callback if the given "value" is falsy.
	 * @param value - The value to evaluate or a function returning the value.
	 * @param callback - The callback to execute if the value is falsy.
	 * @param defaultCallback - The callback to execute if the value is truthy.
	 * @returns The result of the callback or the instance itself.
	 */
	public unless<T>(
		value: boolean | (() => boolean),
		callback?: (instance: this) => T,
		defaultCallback?: (instance: this) => T
	): this | T {
		let evaluatedValue = typeof value === 'function' ? value() : value;

		if (!evaluatedValue && callback) {
			return callback(this);
		} else if (evaluatedValue && defaultCallback) {
			return defaultCallback(this);
		}

		return this;
	}

	/**
	 * Get the underlying string value as an integer.
	 * @returns The integer representation of the string.
	 */
	public toInteger(): number {
		return parseInt(this.str, 10);
	}

	/**
	 * Get the underlying string value as a float.
	 * @returns The float representation of the string.
	 */
	public toFloat(): number {
		return parseFloat(this.str);
	}

	/**
	 * Get the underlying string value as a boolean.
	 * Returns true when value is "1", "true", "on", and "yes". Otherwise, returns false.
	 * @returns The boolean representation of the string.
	 */
	public toBoolean(): boolean {
		const truthyValues = ['1', 'true', 'on', 'yes'];
		return truthyValues.includes(this.str.toLowerCase());
	}

	/**
	 * Get the underlying string value as a Date instance.
	 * Attempts to parse the date according to the provided format.
	 * @param format - The date format (optional).
	 * @returns The Date representation of the string.
	 */
	public toDate(format?: string): Date | null {
		if (!format) {
			return new Date(this.str);
		}

		// Simple format replacement - this can be expanded to support more formats
		const formatMap: { [key: string]: string } = {
			'YYYY': '(\\d{4})',
			'MM': '(\\d{2})',
			'DD': '(\\d{2})',
			// Add more format specifiers as needed
		};

		let regexPattern = format;
		for (const key in formatMap) {
			regexPattern = regexPattern.replace(key, formatMap[key]);
		}

		const match = new RegExp(regexPattern).exec(this.str);
		if (!match) {
			return null;
		}

		// Construct a date object from the extracted parts.
		// This assumes the format is always in the order of year, month, and day.
		const yearIndex = format.indexOf('YYYY') !== -1 ? format.split('YYYY')[0].length : -1;
		const monthIndex = format.indexOf('MM') !== -1 ? format.split('MM')[0].length : -1;
		const dayIndex = format.indexOf('DD') !== -1 ? format.split('DD')[0].length : -1;

		const year = yearIndex !== -1 ? parseInt(match[yearIndex + 1]) : 0;
		const month = monthIndex !== -1 ? parseInt(match[monthIndex + 1]) - 1 : 0; // month is 0-indexed
		const day = dayIndex !== -1 ? parseInt(match[dayIndex + 1]) : 1;

		return new Date(year, month, day);
	}

	/**
	 * Returns the final string after all chained manipulations.
	 * @returns The manipulated string.
	 * @example JStr.of('Hello World').upper().toString(); // Returns 'HELLO WORLD'
	 */
	toString(): string {
		return this.str;
	}
}

export default Stringable;
