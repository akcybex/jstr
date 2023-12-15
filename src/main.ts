/**
 * JStr class for chainable string manipulations.
 */
class JStr {
	private str: string;

	/**
	 * Initializes a new instance of FluentString with the given string.
	 * @param str - The initial string.
	 */
	constructor(str: string) {
		this.str = str;
	}

	/**
	 * Repeats the string a specified number of times.
	 * @param times - The number of times to repeat the string.
	 * @returns JStr instance for method chaining.
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
	 * Returns the final string after all chained manipulations.
	 * @returns The manipulated string.
	 */
	toString(): string {
		return this.str;
	}
}

/**
 * Factory function for creating an instance of FluentString.
 * @param str - The initial string to be manipulated.
 * @returns An instance of FluentString, allowing for fluent string manipulation.
 */
export const jstr = (str: string): JStr => new JStr(str);



