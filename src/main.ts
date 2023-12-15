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

	after(search: string): JStr {
		const index = this.str.indexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(index + search.length);
		return this;
	}

	before(search: string): JStr {
		const index = this.str.indexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(0, index);
		return this;
	}

	camel(): JStr {
		this.str = this.str.replace(/[-_\s]+(.)?/g, (_match, chr) => chr ? chr.toUpperCase() : '');
		this.str = this.str.substr(0, 1).toLowerCase() + this.str.substr(1);
		return this;
	}

	contains(substring: string): boolean {
		return this.str.includes(substring);
	}

	startsWith(substring: string): boolean {
		return this.str.startsWith(substring);
	}

	endsWith(substring: string): boolean {
		return this.str.endsWith(substring);
	}

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

	studly(): JStr {
		this.str = this.str.toLowerCase().replace(/(?:^|\s|-)+(.)/g, (_, char) => char.toUpperCase());
		return this;
	}

	replaceArray(search: string, replace: string[]): JStr {
		let result = this.str;
		replace.forEach((value) => {
			result = result.replace(search, value);
		});
		this.str = result;
		return this;
	}

	replaceFirst(search: string, replace: string): JStr {
		const index = this.str.indexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(0, index) + replace + this.str.substring(index + search.length);
		return this;
	}

	replaceLast(search: string, replace: string): JStr {
		const index = this.str.lastIndexOf(search);
		if (index === -1) return this;
		this.str = this.str.substring(0, index) + replace + this.str.substring(index + search.length);
		return this;
	}

	substr(start: number, length?: number): JStr {
		this.str = this.str.substr(start, length);
		return this;
	}

	padBoth(length: number, padString: string): JStr {
		this.str = this.str.padStart((this.str.length + length) / 2, padString).padEnd(length, padString);
		return this;
	}

	padLeft(length: number, padString: string): JStr {
		this.str = this.str.padStart(length, padString);
		return this;
	}

	padRight(length: number, padString: string): JStr {
		this.str = this.str.padEnd(length, padString);
		return this;
	}

	limit(limit: number, end: string = ''): JStr {
		if (this.str.length > limit) {
			this.str = this.str.substring(0, limit) + end;
		}
		return this;
	}

	length(): number {
		return this.str.length;
	}

	match(pattern: RegExp | string): string[] {
		return this.str.match(pattern) || [];
	}

	// Note: Pluralization and Singularization in JS can be quite complex and might require a library.
	plural(): JStr {
		// Example implementation; consider using a library for accurate pluralization.
		if (!this.str.endsWith('s')) {
			this.str += 's';
		}
		return this;
	}

	singular(): JStr {
		// Example implementation; consider using a library for accurate singularization.
		if (this.str.endsWith('s')) {
			this.str = this.str.slice(0, -1);
		}
		return this;
	}

	title(): JStr {
		this.str = this.str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
		return this;
	}

	static random(length: number = 16): JStr {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let randomStr = '';
		for (let i = 0; i < length; i++) {
			randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return new JStr(randomStr);
	}

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

	startsWithAny(substrings: string[]): boolean {
		return substrings.some(substring => this.str.startsWith(substring));
	}

	endsWithAny(substrings: string[]): boolean {
		return substrings.some(substring => this.str.endsWith(substring));
	}

	ascii(): JStr {
		// This is a basic implementation. For a complete ASCII conversion, consider a library.
		this.str = this.str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		return this;
	}

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

	trimStart(): JStr {
		this.str = this.str.trimStart();
		return this;
	}

	trimEnd(): JStr {
		this.str = this.str.trimEnd();
		return this;
	}

	is(pattern: string | RegExp): boolean {
		if (pattern instanceof RegExp) {
			return pattern.test(this.str);
		}
		return new RegExp(pattern).test(this.str);
	}

	containsAll(values: string[]): boolean {
		return values.every(value => this.str.includes(value));
	}

	static uuid(): JStr {
		// Simple UUID v4 generator; for more robust UUID generation, consider using a library.
		return new JStr('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		}));
	}

	when(condition: boolean, callback: (str: JStr) => void): JStr {
		if (condition) {
			callback(this);
		}
		return this;
	}

	whenEmpty(callback: (str: JStr) => void): JStr {
		if (!this.str) {
			callback(this);
		}
		return this;
	}

	append(appendStr: string): JStr {
		this.str += appendStr;
		return this;
	}

	prepend(prependStr: string): JStr {
		this.str = prependStr + this.str;
		return this;
	}

	finish(value: string): JStr {
		if (!this.str.endsWith(value)) {
			this.str += value;
		}
		return this;
	}

	start(value: string): JStr {
		if (!this.str.startsWith(value)) {
			this.str = value + this.str;
		}
		return this;
	}

	wordCount(): number {
		return this.str.split(/\s+/).filter(Boolean).length;
	}

	isAscii(): boolean {
		return /^[\x00-\x7F]*$/.test(this.str);
	}

	isNumeric(): boolean {
		return /^[0-9]+$/.test(this.str);
	}

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
