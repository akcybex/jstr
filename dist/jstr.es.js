var u = Object.defineProperty;
var l = (e, t, s) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var n = (e, t, s) => (l(e, typeof t != "symbol" ? t + "" : t, s), s);
class h {
  /**
   * Initializes a new instance of JStr with the given string.
   * @param str - The initial string.
   */
  constructor(t) {
    n(this, "str");
    this.str = t;
  }
  /**
   * Repeats the string a specified number of times.
   * @param times - The number of times to repeat the string.
   * @returns JStr instance for method chaining.
   * @example jstr('a').repeat(3).toString(); // Returns 'aaa'
   */
  repeat(t) {
    return this.str = this.str.repeat(t), this;
  }
  /**
   * Converts the string to lowercase.
   * @returns JStr instance for method chaining.
   */
  lower() {
    return this.str = this.str.toLowerCase(), this;
  }
  /**
   * Converts the string to uppercase.
   * @returns JStr instance for method chaining.
   */
  upper() {
    return this.str = this.str.toUpperCase(), this;
  }
  /**
   * Capitalizes the first letter of each word in the string.
   * @returns JStr instance for method chaining.
   */
  capitalize() {
    return this.str = this.str.toLowerCase(), this.str = this.str.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (t) => t.toUpperCase()
    ), this;
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
  after(t) {
    const s = this.str.indexOf(t);
    return s === -1 ? this : (this.str = this.str.substring(s + t.length), this);
  }
  /**
   * Returns everything after the last occurrence of the given value in a string.
   * The entire string will be returned if the value does not exist within the string.
   * @param {string} search - The delimiter to search for.
   * @returns {string} The substring after the last occurrence of the delimiter.
   * @example
   * const result = new JStr("App\\Http\\Controllers\\Controller").afterLast("\\");
   * // result: Controller
   */
  afterLast(t) {
    const s = this.str.lastIndexOf(t);
    return s !== -1 ? this.str.substring(s + t.length) : this.str;
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
  before(t) {
    const s = this.str.indexOf(t);
    return s === -1 ? this : (this.str = this.str.substring(0, s), this);
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
  beforeLast(t) {
    const s = this.str.lastIndexOf(t);
    return s !== -1 && (this.str = this.str.substring(0, s)), this;
  }
  /**
   * Converts the string to camelCase.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello world").camel().toString();
   * // result: "helloWorld"
   */
  camel() {
    return this.str = this.str.replace(
      /[-_\s]+(.)?/g,
      (t, s) => s ? s.toUpperCase() : ""
    ), this.str = this.str.substr(0, 1).toLowerCase() + this.str.substr(1), this;
  }
  /**
   * Checks if the string contains the specified substring.
   * @param {string} substring - The substring to check for.
   * @returns {boolean} `true` if the substring is found, otherwise `false`.
   * @example
   * const result = new JStr("hello world").contains("lo");
   * // result: true
   */
  contains(t) {
    return typeof t == "string" && (t = [t]), t.some((s) => this.str.includes(s));
  }
  /**
   * Checks if the string starts with the specified substring.
   * @param {string} substring - The substring to check for.
   * @returns {boolean} `true` if the string starts with the substring, otherwise `false`.
   * @example
   * const result = new JStr("hello world").startsWith("hello");
   * // result: true
   */
  startsWith(t) {
    return this.str.startsWith(t);
  }
  /**
   * Checks if the string ends with the specified substring.
   * @param {string} substring - The substring to check for.
   * @returns {boolean} `true` if the string ends with the substring, otherwise `false`.
   * @example
   * const result = new JStr("hello world").endsWith("world");
   * // result: true
   */
  endsWith(t) {
    return this.str.endsWith(t);
  }
  /**
   * Converts the string to a slug by replacing spaces and special characters.
   * @param {string} [separator='-'] - The separator for the slug. Defaults to '-'.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("Hello World!").slug();
   * // result: "hello-world"
   */
  slug(t = "-") {
    return this.str = this.str.toLowerCase().replace(/[\s_]+/g, t).replace(/[^\w-]+/g, ""), this;
  }
  /**
   * Converts the string to snake case.
   * @param separator - The separator to use between words, defaults to '_'.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
   */
  snake(t = "_") {
    let s = this.str.replace(/[\s-]+/g, t).replace(/([A-Z])/g, (r, i) => t + i.toLowerCase());
    return s.startsWith(t) && (s = s.substring(1)), this.str = s, this;
  }
  /**
   * Converts the string to studly case, capitalizing each word and removing separators.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello_world").studly().toString();
   * // result: "HelloWorld"
   */
  studly() {
    return this.str = this.str.toLowerCase().replace(/(?:^|\s|-)+(.)/g, (t, s) => s.toUpperCase()), this;
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
  replaceArray(t, s) {
    let r = this.str;
    return s.forEach((i) => {
      r = r.replace(t, i);
    }), this.str = r, this;
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
  replaceFirst(t, s) {
    const r = this.str.indexOf(t);
    return r === -1 ? this : (this.str = this.str.substring(0, r) + s + this.str.substring(r + t.length), this);
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
  replaceLast(t, s) {
    const r = this.str.lastIndexOf(t);
    return r === -1 ? this : (this.str = this.str.substring(0, r) + s + this.str.substring(r + t.length), this);
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
  substr(t, s) {
    return this.str = this.str.substr(t, s), this;
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
  padBoth(t, s) {
    return this.str = this.str.padStart((this.str.length + t) / 2, s).padEnd(t, s), this;
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
  padLeft(t, s) {
    return this.str = this.str.padStart(t, s), this;
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
  padRight(t, s) {
    return this.str = this.str.padEnd(t, s), this;
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
  limit(t, s = "") {
    return this.str.length > t && (this.str = this.str.substring(0, t) + s), this;
  }
  /**
   * Returns the length of the string.
   * @returns {number} The length of the string.
   * @example
   * const result = new JStr("hello world").length();
   * // result: 11
   */
  length() {
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
  match(t) {
    return this.str.match(t) || [];
  }
  /**
   * Attempts to pluralize the string.
   * Note: Pluralization in natural language can be complex and may not be accurate for all cases.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("study").plural().toString();
   * // result: "studies"
   */
  plural() {
    return this.str.endsWith("s") || (this.str.endsWith("y") && this.str.length > 1 && !"aeiou".includes(this.str[this.str.length - 2]) ? this.str = this.str.slice(0, -1) + "ies" : this.str += "s"), this;
  }
  /**
   * Singularizes the string.
   * @returns JStr instance for method chaining.
   * @example jstr('children').singular().toString(); // Returns 'child'
   */
  singular() {
    const t = {
      children: "child",
      mice: "mouse",
      geese: "goose",
      oxen: "ox",
      deer: "deer",
      alumni: "alumnus",
      data: "datum",
      criteria: "criterion",
      phenomenon: "phenomenon",
      medium: "medium",
      bacteria: "bacterium",
      fungi: "fungus",
      cacti: "cactus",
      radius: "radius",
      status: "status",
      syllabus: "syllabus",
      women: "woman",
      men: "man"
      // Add more irregulars as needed
    };
    return t.hasOwnProperty(this.str) ? this.str = t[this.str] : (/(?:s|x|z|sh|ch)$/.test(this.str) && (this.str = this.str.replace(/(?:s|x|z|sh|ch)s$/, "$1")), this.str.endsWith("ies") && (this.str = this.str.replace(/ies$/, "y"))), this;
  }
  /**
   * Converts the string to title case, capitalizing the first letter of each word.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello world").title().toString();
   * // result: "Hello World"
   */
  title() {
    return this.str = this.str.replace(
      /\w\S*/g,
      (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
    ), this;
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
  static random(t = 16) {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let r = "";
    for (let i = 0; i < t; i++)
      r += s.charAt(Math.floor(Math.random() * s.length));
    return new h(r);
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
  substring(t, s) {
    return this.str = this.str.substring(t, s), this;
  }
  /**
   * Splits the string by a string separator and returns an array of strings.
   * @param separator - The separator to use for splitting the string.
   * @param limit - A limit on the number of splits to be found.
   * @returns An array of strings.
   * @example jstr('apple,orange,banana').split(','); // Returns ['apple', 'orange', 'banana']
   */
  split(t, s) {
    return this.str.split(t, s);
  }
  /**
   * Checks if the string starts with any of the specified substrings.
   * @param {string[]} substrings - An array of substrings to check.
   * @returns {boolean} `true` if the string starts with any of the substrings, otherwise `false`.
   * @example
   * const result = new JStr("hello world").startsWithAny(["hello", "hi"]);
   * // result: true
   */
  startsWithAny(t) {
    return t.some((s) => this.str.startsWith(s));
  }
  /**
   * Checks if the string ends with any of the specified substrings.
   * @param {string[]} substrings - An array of substrings to check.
   * @returns {boolean} `true` if the string ends with any of the substrings, otherwise `false`.
   * @example
   * const result = new JStr("hello world").endsWithAny(["world", "earth"]);
   * // result: true
   */
  endsWithAny(t) {
    return t.some((s) => this.str.endsWith(s));
  }
  /**
   * Removes diacritics from the string, converting it to ASCII.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("héllô wórld").ascii().toString();
   * // result: "hello world"
   */
  ascii() {
    return this.str = this.str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), this;
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
  replace(t, s) {
    return this.str = this.str.replace(new RegExp(t, "g"), s), this;
  }
  /**
   * Reverses the string.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello').reverse().toString(); // Returns 'olleH'
   */
  reverse() {
    return this.str = this.str.split("").reverse().join(""), this;
  }
  /**
   * Trims whitespace from both ends of the string.
   * @returns JStr instance for method chaining.
   * @example jstr('  Hello World  ').trim().toString(); // Returns 'Hello World'
   */
  trim() {
    return this.str = this.str.trim(), this;
  }
  /**
   * Removes leading whitespace from the string.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("   hello").trimStart().toString();
   * // result: "hello"
   */
  trimStart() {
    return this.str = this.str.trimStart(), this;
  }
  /**
   * Removes trailing whitespace from the string.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello   ").trimEnd().toString();
   * // result: "hello"
   */
  trimEnd() {
    return this.str = this.str.trimEnd(), this;
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
  is(t) {
    return t instanceof RegExp ? t.test(this.str) : new RegExp(t).test(this.str);
  }
  /**
   * Checks if the string contains all specified substrings.
   * @param {string[]} values - An array of substrings to check for.
   * @returns {boolean} `true` if the string contains all substrings, otherwise `false`.
   * @example
   * const result = new JStr("hello world").containsAll(["hello", "world"]);
   * // result: true
   */
  containsAll(t) {
    return t.every((s) => this.str.includes(s));
  }
  /**
   * Generates a simple UUID v4 using a basic algorithm.
   * For more robust UUID generation, consider using a dedicated library.
   * @returns {JStr} A new JStr instance containing the generated UUID.
   * @example
   * const result = JStr.uuid().toString();
   * // result: "3e2d7b0d-16da-43b4-a2f5-99e91781ccbb"
   */
  static uuid() {
    return new h(
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const s = Math.random() * 16 | 0;
        return (t == "x" ? s : s & 3 | 8).toString(16);
      })
    );
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
  when(t, s) {
    return t && s(this), this;
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
  whenEmpty(t) {
    return this.str || t(this), this;
  }
  /**
   * Appends the specified string to the end of the current string.
   * @param {string} appendStr - The string to append.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello").append(" world").toString();
   * // result: "hello world"
   */
  append(t) {
    return this.str += t, this;
  }
  /**
   * Prepends the specified string to the start of the current string.
   * @param {string} prependStr - The string to prepend.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("world").prepend("hello ").toString();
   * // result: "hello world"
   */
  prepend(t) {
    return this.str = t + this.str, this;
  }
  /**
   * Appends the specified value to the end of the string if it's not already present.
   * @param {string} value - The value to append.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello").finish(" world").toString();
   * // result: "hello world"
   */
  finish(t) {
    return this.str.endsWith(t) || (this.str += t), this;
  }
  /**
   * Prepends the specified value to the start of the string if it's not already present.
   * @param {string} value - The value to prepend.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("world").start("hello ").toString();
   * // result: "hello world"
   */
  start(t) {
    return this.str.startsWith(t) || (this.str = t + this.str), this;
  }
  /**
   * Returns the word count of the string.
   * @returns {number} The word count.
   * @example
   * const result = new JStr("hello world").wordCount();
   * // result: 2
   */
  wordCount() {
    return this.str.split(/\s+/).filter(Boolean).length;
  }
  /**
   * Checks if the string contains only ASCII characters.
   * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
   * @example
   * const result = new JStr("hello").isAscii();
   * // result: true
   */
  isAscii() {
    return /^[\x00-\x7F]*$/.test(this.str);
  }
  /**
   * Checks if the string is numeric.
   * @returns {boolean} `true` if the string is numeric, otherwise `false`.
   * @example
   * const result = new JStr("123").isNumeric();
   * // result: true
   */
  isNumeric() {
    return /^[0-9]+$/.test(this.str);
  }
  /**
   * Checks if the string contains only alphabetic characters.
   * @returns {boolean} `true` if the string is alphabetic, otherwise `false`.
   * @example
   * const result = new JStr("hello").isAlpha();
   * // result: true
   */
  isAlpha() {
    return /^[A-Za-z]+$/.test(this.str);
  }
  /**
   * Checks if the string contains only alphanumeric characters.
   * @returns Boolean indicating whether the string is alphanumeric.
   * @example
   * // Returns true
   * jstr('Hello123').isAlphanumeric();
   */
  isAlphanumeric() {
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
  kebab(t = "-") {
    return this.str = this.str.replace(/([a-z])([A-Z])/g, "$1" + t + "$2").replace(/\s+/g, t).toLowerCase(), this;
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
  slice(t, s) {
    return this.str = this.str.slice(t, s), this;
  }
  /**
   * Removes HTML and XML tags from the string.
   * @returns JStr instance for method chaining.
   * @example
   * // Returns 'Hello World'
   * jstr('<p>Hello World</p>').stripTags().toString();
   */
  stripTags() {
    return this.str = this.str.replace(/<\/?[^>]+(>|$)/g, ""), this;
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
  excerpt(t, s = "...") {
    return this.str.length > t && (this.str = this.str.substring(0, t) + s), this;
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
  pad(t, s, r = "right") {
    switch (r) {
      case "left":
        this.str = this.str.padStart(t, s);
        break;
      case "right":
        this.str = this.str.padEnd(t, s);
        break;
      case "both":
        const i = t - this.str.length, a = Math.floor(i / 2) + this.str.length;
        this.str = this.str.padStart(a, s).padEnd(t, s);
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
  words(t, s = "...") {
    const r = this.str.split(/\s+/);
    return r.length > t && (this.str = r.slice(0, t).join(" ") + s), this;
  }
  /**
   * Counts the occurrences of a substring in the string.
   * @param substring - The substring to count.
   * @returns The number of occurrences.
   * @example
   * // Returns 2
   * jstr('Hello World Hello').count('Hello');
   */
  count(t) {
    return (this.str.match(new RegExp(t, "g")) || []).length;
  }
  /**
   * Swaps the case of each character in the string.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello World').swapCase().toString(); // Returns 'hELLO wORLD'
   */
  swapCase() {
    return this.str = this.str.split("").map(
      (t) => t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()
    ).join(""), this;
  }
  /**
   * Converts the string to a headline format.
   * @returns JStr instance for method chaining.
   * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
   */
  headline() {
    return this.str = this.str.replace(/[_-]/g, " ").split(" ").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" "), this;
  }
  /**
   * Reverses the order of words in the string.
   * @returns JStr instance for method chaining.
   * @example
   * // Returns 'World Hello'
   * jstr('Hello World').reverseWords().toString();
   */
  reverseWords() {
    return this.str = this.str.split(" ").reverse().join(" "), this;
  }
  /**
   * Converts the string to a boolean.
   * Considers 'true', '1', 'yes', and 'on' as truthy values.
   * @returns Boolean value representing the string.
   * @example
   * // Returns true
   * jstr('yes').toBoolean();
   */
  toBoolean() {
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
  truncate(t, s = "...") {
    return this.str.length <= t ? this : new h(this.str.substring(0, t - s.length) + s);
  }
  /**
   * Between the string to a specified words.
   * @param start - The start of the string.
   * @param end - The end of the string.
   * @returns JStr instance for method chaining.
   * @example
   * // Returns 'brown'
   * jstr.of('The quick brown fox jumps over the lazy dog').between("quick", "fox").toString();
   */
  between(t, s) {
    const r = this.str.indexOf(t), i = this.str.indexOf(s, r + t.length);
    return r !== -1 && i !== -1 && r < i ? this.str.substring(r + t.length, i) : "";
  }
  /**
   * Creates a new JStr instance from the provided string.
   * @param {string} str - The input string to be encapsulated in a JStr instance.
   * @returns {JStr} - A new JStr instance containing the provided string.
   * @example
   * // Returns a JStr instance representing 'Hello, JStr!'
   * JStr.of('Hello, JStr!').toString();
   */
  static of(t) {
    return new h(t);
  }
  /**
   * Returns the final string after all chained manipulations.
   * @returns The manipulated string.
   * @example jstr('Hello World').upper().toString(); // Returns 'HELLO WORLD'
   */
  toString() {
    return this.str;
  }
}
export {
  h as default
};
