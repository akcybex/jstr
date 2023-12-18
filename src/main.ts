/**
 * JStr class for chainable string manipulations.
 */
class JStr {
	private str: string;

	/**
	 * Initializes a new instance of JStr with the given string.
	 * @param str - The initial string.
	 */
	constructor(str: string) {
		this.str = str;
	}

	/**
	 * Repeats the string a specified number of times.
	 * @param times - The number of times to repeat the string.
	 * @returns JStr instance for method chaining.
	 * @example jstr('a').repeat(3).toString(); // Returns 'aaa'
	 */
	repeat(times: number): JStr {
		this.str = this.str.repeat(times);
		return this;
	}

	/**
	 * Converts the string to lowercase.
	 * @returns JStr instance for method chaining.
	 */
	lower(): JStr {
		this.str = this.str.toLowerCase();
		return this;
	}

	/**
	 * Converts the string to uppercase.
	 * @returns JStr instance for method chaining.
	 */
	upper(): JStr {
		this.str = this.str.toUpperCase();
		return this;
	}

	/**
	 * Capitalizes the first letter of each word in the string.
	 * @returns JStr instance for method chaining.
	 */
	capitalize(): JStr {
		this.str = this.str.replace(/(^\w{1})|(\s+\w{1})/g, (chr) => chr.toUpperCase());
		return this;
	}

	/**
	 * Returns a new JStr instance containing the substring after the specified search string.
	 * If the search string is not found, the original string is returned.
	 * @param {string} search - The search string.
	 * @returns {JStr} A new JStr instance with the substring after the search string.
	 * @example
	 * const result = new JStr("hello world").after("hello").toString();
	 * // result: " world"
	 */
	after(search: string): JStr {
		const index = this.str.indexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(index + search.length);
		return this;
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
	before(search: string): JStr {
		const index = this.str.indexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(0, index);
		return this;
	}

	/**
	 * Converts the string to camelCase.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").camel().toString();
	 * // result: "helloWorld"
	 */
	camel(): JStr {
		this.str = this.str.replace(/[-_\s]+(.)?/g, (_match, chr) => chr ? chr.toUpperCase() : '');
		this.str = this.str.substr(0, 1).toLowerCase() + this.str.substr(1);
		return this;
	}

	/**
	 * Checks if the string contains the specified substring.
	 * @param {string} substring - The substring to check for.
	 * @returns {boolean} `true` if the substring is found, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").contains("lo");
	 * // result: true
	 */
	contains(substring: string): boolean {
		return this.str.includes(substring);
	}

	/**
	 * Checks if the string starts with the specified substring.
	 * @param {string} substring - The substring to check for.
	 * @returns {boolean} `true` if the string starts with the substring, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").startsWith("hello");
	 * // result: true
	 */
	startsWith(substring: string): boolean {
		return this.str.startsWith(substring);
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
		return this.str.endsWith(substring);
	}

	/**
	 * Converts the string to a slug by replacing spaces and special characters.
	 * @param {string} [separator='-'] - The separator for the slug. Defaults to '-'.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("Hello World!").slug();
	 * // result: "hello-world"
	 */
	slug(separator: string = '-'): JStr {
		this.str = this.str
			.toLowerCase()
			.replace(/[\s_]+/g, separator)
			.replace(/[^\w-]+/g, '');
		return this;
	}

	/**
	 * Converts the string to snake case.
	 * @param separator - The separator to use between words, defaults to '_'.
	 * @returns JStr instance for method chaining.
	 * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
	 */
	snake(separator: string = '_'): JStr {
		let snake = this.str.replace(/[\s-]+/g, separator)
			.replace(/([A-Z])/g, (_, char) => separator + char.toLowerCase());
		if (snake.startsWith(separator)) {
			snake = snake.substring(1);
		}
		this.str = snake;
		return this;
	}

	/**
	 * Converts the string to studly case, capitalizing each word and removing separators.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello_world").studly().toString();
	 * // result: "HelloWorld"
	 */
	studly(): JStr {
		this.str = this.str.toLowerCase().replace(/(?:^|\s|-)+(.)/g, (_, char) => char.toUpperCase());
		return this;
	}

	/**
	 * Replaces occurrences of a search string with an array of replacement strings.
	 * @param {string} search - The search string to replace.
	 * @param {string[]} replace - An array of replacement strings.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").replaceArray("o", ["a", "i"]).toString();
	 * // result: "helli wird"
	 */
	replaceArray(search: string, replace: string[]): JStr {
		let result = this.str;
		replace.forEach((value) => {
			result = result.replace(search, value);
		});
		this.str = result;
		return this;
	}

	/**
	 * Replaces the first occurrence of a search string with a replacement string.
	 * @param {string} search - The search string to replace.
	 * @param {string} replace - The replacement string.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").replaceFirst("o", "a").toString();
	 * // result: "hella world"
	 */
	replaceFirst(search: string, replace: string): JStr {
		const index = this.str.indexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(0, index) + replace + this.str.substring(index + search.length);
		return this;
	}

	/**
	 * Replaces the last occurrence of a search string with a replacement string.
	 * @param {string} search - The search string to replace.
	 * @param {string} replace - The replacement string.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").replaceLast("o", "a").toString();
	 * // result: "hellu ward"
	 */
	replaceLast(search: string, replace: string): JStr {
		const index = this.str.lastIndexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(0, index) + replace + this.str.substring(index + search.length);
		return this;
	}

	/**
	 * Returns a new JStr instance containing a substring of the original string.
	 * @param {number} start - The starting index of the substring.
	 * @param {number} [length] - The length of the substring. If omitted, the substring extends to the end of the string.
	 * @returns {JStr} A new JStr instance with the specified substring.
	 * @example
	 * const result = new JStr("hello world").substr(6, 5).toString();
	 * // result: "world"
	 */
	substr(start: number, length?: number): JStr {
		this.str = this.str.substr(start, length);
		return this;
	}

	/**
	 * Pads the string with a specified pad string on both sides to achieve the desired length.
	 * @param {number} length - The target length of the padded string.
	 * @param {string} padString - The string to use for padding.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").padBoth(10, "-").toString();
	 * // result: "--hello---"
	 */
	padBoth(length: number, padString: string): JStr {
		this.str = this.str.padStart((this.str.length + length) / 2, padString).padEnd(length, padString);
		return this;
	}

	/**
	 * Pads the string with a specified pad string on the left to achieve the desired length.
	 * @param {number} length - The target length of the padded string.
	 * @param {string} padString - The string to use for padding.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").padLeft(8, "-").toString();
	 * // result: "---hello"
	 */
	padLeft(length: number, padString: string): JStr {
		this.str = this.str.padStart(length, padString);
		return this;
	}

	/**
	 * Pads the string with a specified pad string on the right to achieve the desired length.
	 * @param {number} length - The target length of the padded string.
	 * @param {string} padString - The string to use for padding.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").padRight(8, "-").toString();
	 * // result: "hello---"
	 */
	padRight(length: number, padString: string): JStr {
		this.str = this.str.padEnd(length, padString);
		return this;
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
	limit(limit: number, end: string = ''): JStr {
		if (this.str.length > limit) {
			this.str = this.str.substring(0, limit) + end;
		}
		return this;
	}

	/**
	 * Returns the length of the string.
	 * @returns {number} The length of the string.
	 * @example
	 * const result = new JStr("hello world").length();
	 * // result: 11
	 */
	length(): number {
		return this.str.length;
	}

	/**
	 * Matches the string against a regular expression or string pattern and returns an array of matches.
	 * @param {RegExp | string} pattern - The pattern to match against. Can be a regular expression or a string.
	 * @returns {string[]} An array of matches.
	 * @example
	 * const result = new JStr("hello 123").match(/\d+/g);
	 * // result: ["123"]
	 */
	match(pattern: RegExp | string): string[] {
		return this.str.match(pattern) || [];
	}

	/**
	 * Attempts to pluralize the string.
	 * Note: Pluralization in natural language can be complex and may not be accurate for all cases.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("study").plural().toString();
	 * // result: "studies"
	 */
	plural(): JStr {
		if (!this.str.endsWith('s')) {
			if (this.str.endsWith('y') && this.str.length > 1 && !'aeiou'.includes(this.str[this.str.length - 2])) {
				// Change 'y' to 'ies' for words like 'study'.
				this.str = this.str.slice(0, -1) + 'ies';
			} else {
				// Add 's' for a basic pluralization.
				this.str += 's';
			}
		}
		return this;
	}

	/**
	 * Attempts to singularize the string.
	 * Note: Singularization in natural language can be complex and may not be accurate for all cases.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("studies").singular().toString();
	 * // result: "study"
	 */
	singular(): JStr {
		if (this.str.endsWith('s')) {
			if (this.str.endsWith('ies')) {
				// Change 'ies' to 'y' for words like 'studies'.
				this.str = this.str.slice(0, -3) + 'y';
			} else {
				// Remove 's' for a basic singularization.
				this.str = this.str.slice(0, -1);
			}
		}
		return this;
	}

	/**
	 * Converts the string to title case, capitalizing the first letter of each word.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").title().toString();
	 * // result: "Hello World"
	 */
	title(): JStr {
		this.str = this.str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
		return this;
	}

	/**
	 * Generates a random string of the specified length.
	 * If no length is provided, the default length is 16.
	 * @param {number} [length=16] - The length of the random string.
	 * @returns {JStr} A new JStr instance containing the generated random string.
	 * @example
	 * const result = JStr.random(8).toString();
	 * // result: "aB3kL7fR"
	 */
	static random(length: number = 16): JStr {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let randomStr = '';
		for (let i = 0; i < length; i++) {
			randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return new JStr(randomStr);
	}

	/**
	 * Returns a new JStr instance containing a substring of the original string.
	 * @param {number} start - The starting index of the substring.
	 * @param {number} [end] - The ending index of the substring. If omitted, the substring extends to the end of the string.
	 * @returns {JStr} A new JStr instance with the specified substring.
	 * @example
	 * const result = new JStr("hello world").substring(6, 11).toString();
	 * // result: "world"
	 */
	substring(start: number, end?: number): JStr {
		this.str = this.str.substring(start, end);
		return this;
	}

	/**
	 * Splits the string by a string separator and returns an array of strings.
	 * @param separator - The separator to use for splitting the string.
	 * @param limit - A limit on the number of splits to be found.
	 * @returns An array of strings.
	 * @example jstr('apple,orange,banana').split(','); // Returns ['apple', 'orange', 'banana']
	 */
	split(separator: string, limit?: number): string[] {
		return this.str.split(separator, limit);
	}

	/**
	 * Checks if the string starts with any of the specified substrings.
	 * @param {string[]} substrings - An array of substrings to check.
	 * @returns {boolean} `true` if the string starts with any of the substrings, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").startsWithAny(["hello", "hi"]);
	 * // result: true
	 */
	startsWithAny(substrings: string[]): boolean {
		return substrings.some(substring => this.str.startsWith(substring));
	}

	/**
	 * Checks if the string ends with any of the specified substrings.
	 * @param {string[]} substrings - An array of substrings to check.
	 * @returns {boolean} `true` if the string ends with any of the substrings, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").endsWithAny(["world", "earth"]);
	 * // result: true
	 */
	endsWithAny(substrings: string[]): boolean {
		return substrings.some(substring => this.str.endsWith(substring));
	}

	/**
	 * Removes diacritics from the string, converting it to ASCII.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("héllô wórld").ascii().toString();
	 * // result: "hello world"
	 */
	ascii(): JStr {
		// This is a basic implementation. For a complete ASCII conversion, consider a library.
		this.str = this.str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		return this;
	}

	/**
	 * Replaces all occurrences of a substring with another string.
	 * @param {string} search - The substring to search for.
	 * @param {string} replace - The string to replace occurrences with.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello world").replace("world", "universe").toString();
	 * // result: "hello universe"
	 */
	replace(search: string, replace: string): JStr {
		this.str = this.str.replace(new RegExp(search, 'g'), replace);
		return this;
	}

	/**
	 * Reverses the string.
	 * @returns JStr instance for method chaining.
	 * @example jstr('Hello').reverse().toString(); // Returns 'olleH'
	 */
	reverse(): JStr {
		this.str = this.str.split('').reverse().join('');
		return this;
	}

	/**
	 * Trims whitespace from both ends of the string.
	 * @returns JStr instance for method chaining.
	 * @example jstr('  Hello World  ').trim().toString(); // Returns 'Hello World'
	 */
	trim(): JStr {
		this.str = this.str.trim();
		return this;
	}

	/**
	 * Removes leading whitespace from the string.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("   hello").trimStart().toString();
	 * // result: "hello"
	 */
	trimStart(): JStr {
		this.str = this.str.trimStart();
		return this;
	}

	/**
	 * Removes trailing whitespace from the string.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello   ").trimEnd().toString();
	 * // result: "hello"
	 */
	trimEnd(): JStr {
		this.str = this.str.trimEnd();
		return this;
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
	is(pattern: string | RegExp): boolean {
		if (pattern instanceof RegExp) {
			return pattern.test(this.str);
		}
		return new RegExp(pattern).test(this.str);
	}

	/**
	 * Checks if the string contains all specified substrings.
	 * @param {string[]} values - An array of substrings to check for.
	 * @returns {boolean} `true` if the string contains all substrings, otherwise `false`.
	 * @example
	 * const result = new JStr("hello world").containsAll(["hello", "world"]);
	 * // result: true
	 */
	containsAll(values: string[]): boolean {
		return values.every(value => this.str.includes(value));
	}

	/**
	 * Generates a simple UUID v4 using a basic algorithm.
	 * For more robust UUID generation, consider using a dedicated library.
	 * @returns {JStr} A new JStr instance containing the generated UUID.
	 * @example
	 * const result = JStr.uuid().toString();
	 * // result: "3e2d7b0d-16da-43b4-a2f5-99e91781ccbb"
	 */
	static uuid(): JStr {
		// Simple UUID v4 generator; for more robust UUID generation, consider using a library.
		return new JStr('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		}));
	}

	/**
	 * Executes a callback on the JStr instance when a specified condition is met.
	 * @param {boolean} condition - The condition to check.
	 * @param {(str: JStr) => void} callback - The callback function to execute when the condition is true.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").when(true, (str) => {
	 *   str.append(" world");
	 * }).toString();
	 * // result: "hello world"
	 */
	when(condition: boolean, callback: (str: JStr) => void): JStr {
		if (condition) {
			callback(this);
		}
		return this;
	}

	/**
	 * Executes a callback on the JStr instance when the string is empty.
	 * @param {(str: JStr) => void} callback - The callback function to execute when the string is empty.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("").whenEmpty((str) => {
	 *   str.append("default");
	 * }).toString();
	 * // result: "default"
	 */
	whenEmpty(callback: (str: JStr) => void): JStr {
		if (!this.str) {
			callback(this);
		}
		return this;
	}

	/**
	 * Appends the specified string to the end of the current string.
	 * @param {string} appendStr - The string to append.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").append(" world").toString();
	 * // result: "hello world"
	 */
	append(appendStr: string): JStr {
		this.str += appendStr;
		return this;
	}

	/**
	 * Prepends the specified string to the start of the current string.
	 * @param {string} prependStr - The string to prepend.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("world").prepend("hello ").toString();
	 * // result: "hello world"
	 */
	prepend(prependStr: string): JStr {
		this.str = prependStr + this.str;
		return this;
	}

	/**
	 * Appends the specified value to the end of the string if it's not already present.
	 * @param {string} value - The value to append.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("hello").finish(" world").toString();
	 * // result: "hello world"
	 */
	finish(value: string): JStr {
		if (!this.str.endsWith(value)) {
			this.str += value;
		}
		return this;
	}

	/**
	 * Prepends the specified value to the start of the string if it's not already present.
	 * @param {string} value - The value to prepend.
	 * @returns {JStr} JStr instance for method chaining.
	 * @example
	 * const result = new JStr("world").start("hello ").toString();
	 * // result: "hello world"
	 */
	start(value: string): JStr {
		if (!this.str.startsWith(value)) {
			this.str = value + this.str;
		}
		return this;
	}

	/**
	 * Returns the word count of the string.
	 * @returns {number} The word count.
	 * @example
	 * const result = new JStr("hello world").wordCount();
	 * // result: 2
	 */
	wordCount(): number {
		return this.str.split(/\s+/).filter(Boolean).length;
	}

	/**
	 * Checks if the string contains only ASCII characters.
	 * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
	 * @example
	 * const result = new JStr("hello").isAscii();
	 * // result: true
	 */
	isAscii(): boolean {
		return /^[\x00-\x7F]*$/.test(this.str);
	}

	/**
	 * Checks if the string is numeric.
	 * @returns {boolean} `true` if the string is numeric, otherwise `false`.
	 * @example
	 * const result = new JStr("123").isNumeric();
	 * // result: true
	 */
	isNumeric(): boolean {
		return /^[0-9]+$/.test(this.str);
	}

	/**
	 * Checks if the string contains only alphabetic characters.
	 * @returns {boolean} `true` if the string is alphabetic, otherwise `false`.
	 * @example
	 * const result = new JStr("hello").isAlpha();
	 * // result: true
	 */
	isAlpha(): boolean {
		return /^[A-Za-z]+$/.test(this.str);
	}

	/**
	 * Checks if the string contains only alphanumeric characters.
	 * @returns Boolean indicating whether the string is alphanumeric.
	 * @example
	 * // Returns true
	 * jstr('Hello123').isAlphanumeric();
	 */
	isAlphanumeric(): boolean {
		return /^[A-Za-z0-9]+$/.test(this.str);
	}

	/**
	 * Converts the string to kebab-case.
	 * @param separator - The separator to use, default is '-'.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'hello-world'
	 * jstr('Hello World').kebab().toString();
	 */
	kebab(separator: string = '-'): JStr {
		this.str = this.str
			.replace(/([a-z])([A-Z])/g, '$1' + separator + '$2')
			.replace(/\s+/g, separator)
			.toLowerCase();
		return this;
	}

	/**
	 * Extracts a section of the string.
	 * @param start - The start index.
	 * @param end - The end index, optional.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'llo'
	 * jstr('Hello').slice(2, 5).toString();
	 */
	slice(start: number, end?: number): JStr {
		this.str = this.str.slice(start, end);
		return this;
	}


	/**
	 * Removes HTML and XML tags from the string.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'Hello World'
	 * jstr('<p>Hello World</p>').stripTags().toString();
	 */
	stripTags(): JStr {
		this.str = this.str.replace(/<\/?[^>]+(>|$)/g, "");
		return this;
	}

	/**
	 * Truncates the string to a specified length, appending a specified ending if needed.
	 * @param length - The maximum length of the string.
	 * @param end - The string to append at the end if truncation occurs, default is '...'.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'Hello...'
	 * jstr('Hello World').excerpt(5).toString();
	 */
	excerpt(length: number, end: string = '...'): JStr {
		if (this.str.length > length) {
			this.str = this.str.substring(0, length) + end;
		}
		return this;
	}

	/**
	 * Pads the string to a certain length with another string.
	 * @param length - The target length.
	 * @param padString - The string to pad with.
	 * @param padType - The padding type: 'left', 'right', or 'both'. Default is 'right'.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'Hello     '
	 * jstr('Hello').pad(10).toString();
	 */
	pad(length: number, padString: string, padType: 'left' | 'right' | 'both' = 'right'): JStr {
		switch(padType) {
			case 'left':
				this.str = this.str.padStart(length, padString);
				break;
			case 'right':
				this.str = this.str.padEnd(length, padString);
				break;
			case 'both':
				const padLen = length - this.str.length;
				const padLeft = Math.floor(padLen / 2) + this.str.length;
				this.str = this.str.padStart(padLeft, padString).padEnd(length, padString);
				break;
		}
		return this;
	}

	/**
	 * Limits the number of words in the string.
	 * @param limit - The maximum number of words to include.
	 * @param end - The string to append if the limit is reached, default is '...'.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'Hello...'
	 * jstr('Hello World').words(1).toString();
	 */
	words(limit: number, end: string = '...'): JStr {
		const words = this.str.split(/\s+/);
		if (words.length > limit) {
			this.str = words.slice(0, limit).join(' ') + end;
		}
		return this;
	}

	/**
	 * Counts the occurrences of a substring in the string.
	 * @param substring - The substring to count.
	 * @returns The number of occurrences.
	 * @example
	 * // Returns 2
	 * jstr('Hello World Hello').count('Hello');
	 */
	count(substring: string): number {
		return (this.str.match(new RegExp(substring, "g")) || []).length;
	}

	/**
	 * Swaps the case of each character in the string.
	 * @returns JStr instance for method chaining.
	 * @example jstr('Hello World').swapCase().toString(); // Returns 'hELLO wORLD'
	 */
	swapCase(): JStr {
		this.str = this.str.split('').map(char =>
			char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
		).join('');
		return this;
	}

	/**
	 * Converts the string to a headline format.
	 * @returns JStr instance for method chaining.
	 * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
	 */
	headline() {
		this.str = this.str.replace(/[_-]/g, ' ').split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
		return this;
	}
	/**
	 * Reverses the order of words in the string.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'World Hello'
	 * jstr('Hello World').reverseWords().toString();
	 */
	reverseWords(): JStr {
		this.str = this.str.split(' ').reverse().join(' ');
		return this;
	}

	/**
	 * Converts the string to a boolean.
	 * Considers 'true', '1', 'yes', and 'on' as truthy values.
	 * @returns Boolean value representing the string.
	 * @example
	 * // Returns true
	 * jstr('yes').toBoolean();
	 */
	toBoolean(): boolean {
		return /^(true|1|yes|on)$/i.test(this.str.trim());
	}

	/**
	 * Truncates the string to a specified length.
	 * @param length - The maximum length of the string.
	 * @param end - The string to append at the end if truncation occurs, default is '...'.
	 * @returns JStr instance for method chaining.
	 * @example
	 * // Returns 'Hello...'
	 * jstr('Hello World').truncate(5).toString();
	 */
	truncate(length: number, end: string = '...'): JStr {
		if (this.str.length <= length) return this;
		return new JStr(this.str.substring(0, length - end.length) + end);
	}

	/**
	 * Returns the final string after all chained manipulations.
	 * @returns The manipulated string.
	 * @example jstr('Hello World').upper().toString(); // Returns 'HELLO WORLD'
	 */
	toString(): string {
		return this.str;
	}
}

/**
 * Factory function for creating an instance of JStr.
 * This function is a convenient way to create a new JStr instance.
 *
 * @param str - The initial string to be manipulated.
 * @returns An instance of JStr, allowing for fluent string manipulation.
 * @example
 * // Using the factory function to create a new instance and chain methods
 * const myString = jstr('Hello').append(' World').toString(); // Returns 'Hello World'
 */
export const jstr = (str: string): JStr => new JStr(str);

// Exporting JStr as the default export
export default JStr;
