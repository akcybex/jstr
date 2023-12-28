var I = Object.defineProperty;
var M = (o, e, t) => e in o ? I(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var C = (o, e, t) => (M(o, typeof e != "symbol" ? e + "" : e, t), t);
let L;
const O = new Uint8Array(16);
function z() {
  if (!L && (L = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !L))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return L(O);
}
const k = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function P(o) {
  return typeof o == "string" && k.test(o);
}
const g = [];
for (let o = 0; o < 256; ++o)
  g.push((o + 256).toString(16).slice(1));
function q(o, e = 0) {
  return g[o[e + 0]] + g[o[e + 1]] + g[o[e + 2]] + g[o[e + 3]] + "-" + g[o[e + 4]] + g[o[e + 5]] + "-" + g[o[e + 6]] + g[o[e + 7]] + "-" + g[o[e + 8]] + g[o[e + 9]] + "-" + g[o[e + 10]] + g[o[e + 11]] + g[o[e + 12]] + g[o[e + 13]] + g[o[e + 14]] + g[o[e + 15]];
}
const D = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), U = {
  randomUUID: D
};
function W(o, e, t) {
  if (U.randomUUID && !e && !o)
    return U.randomUUID();
  o = o || {};
  const r = o.random || (o.rng || z)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (let s = 0; s < 16; ++s)
      e[t + s] = r[s];
    return e;
  }
  return q(r);
}
var Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function V(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function T(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var F = { exports: {} };
(function(o, e) {
  (function(t, r) {
    typeof T == "function" ? o.exports = r() : t.pluralize = r();
  })(Y, function() {
    var t = [], r = [], s = {}, a = {}, l = {};
    function h(u) {
      return typeof u == "string" ? new RegExp("^" + u + "$", "i") : u;
    }
    function f(u, c) {
      return u === c ? c : u === u.toLowerCase() ? c.toLowerCase() : u === u.toUpperCase() ? c.toUpperCase() : u[0] === u[0].toUpperCase() ? c.charAt(0).toUpperCase() + c.substr(1).toLowerCase() : c.toLowerCase();
    }
    function p(u, c) {
      return u.replace(/\$(\d{1,2})/g, function(y, m) {
        return c[m] || "";
      });
    }
    function v(u, c) {
      return u.replace(c[0], function(y, m) {
        var w = p(c[1], arguments);
        return f(y === "" ? u[m - 1] : y, w);
      });
    }
    function x(u, c, y) {
      if (!u.length || s.hasOwnProperty(u))
        return c;
      for (var m = y.length; m--; ) {
        var w = y[m];
        if (w[0].test(c))
          return v(c, w);
      }
      return c;
    }
    function R(u, c, y) {
      return function(m) {
        var w = m.toLowerCase();
        return c.hasOwnProperty(w) ? f(m, w) : u.hasOwnProperty(w) ? f(m, u[w]) : x(w, m, y);
      };
    }
    function E(u, c, y, m) {
      return function(w) {
        var A = w.toLowerCase();
        return c.hasOwnProperty(A) ? !0 : u.hasOwnProperty(A) ? !1 : x(A, A, y) === A;
      };
    }
    function d(u, c, y) {
      var m = c === 1 ? d.singular(u) : d.plural(u);
      return (y ? c + " " : "") + m;
    }
    return d.plural = R(
      l,
      a,
      t
    ), d.isPlural = E(
      l,
      a,
      t
    ), d.singular = R(
      a,
      l,
      r
    ), d.isSingular = E(
      a,
      l,
      r
    ), d.addPluralRule = function(u, c) {
      t.push([h(u), c]);
    }, d.addSingularRule = function(u, c) {
      r.push([h(u), c]);
    }, d.addUncountableRule = function(u) {
      if (typeof u == "string") {
        s[u.toLowerCase()] = !0;
        return;
      }
      d.addPluralRule(u, "$0"), d.addSingularRule(u, "$0");
    }, d.addIrregularRule = function(u, c) {
      c = c.toLowerCase(), u = u.toLowerCase(), l[u] = c, a[c] = u;
    }, [
      // Pronouns.
      ["I", "we"],
      ["me", "us"],
      ["he", "they"],
      ["she", "they"],
      ["them", "them"],
      ["myself", "ourselves"],
      ["yourself", "yourselves"],
      ["itself", "themselves"],
      ["herself", "themselves"],
      ["himself", "themselves"],
      ["themself", "themselves"],
      ["is", "are"],
      ["was", "were"],
      ["has", "have"],
      ["this", "these"],
      ["that", "those"],
      // Words ending in with a consonant and `o`.
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      // Ends with `us`.
      ["genus", "genera"],
      ["viscus", "viscera"],
      // Ends with `ma`.
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
      // Other irregular rules.
      ["ox", "oxen"],
      ["axe", "axes"],
      ["die", "dice"],
      ["yes", "yeses"],
      ["foot", "feet"],
      ["eave", "eaves"],
      ["goose", "geese"],
      ["tooth", "teeth"],
      ["quiz", "quizzes"],
      ["human", "humans"],
      ["proof", "proofs"],
      ["carve", "carves"],
      ["valve", "valves"],
      ["looey", "looies"],
      ["thief", "thieves"],
      ["groove", "grooves"],
      ["pickaxe", "pickaxes"],
      ["passerby", "passersby"]
    ].forEach(function(u) {
      return d.addIrregularRule(u[0], u[1]);
    }), [
      [/s?$/i, "s"],
      [/[^\u0000-\u007F]$/i, "$0"],
      [/([^aeiou]ese)$/i, "$1"],
      [/(ax|test)is$/i, "$1es"],
      [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
      [/(e[mn]u)s?$/i, "$1s"],
      [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
      [/(seraph|cherub)(?:im)?$/i, "$1im"],
      [/(her|at|gr)o$/i, "$1oes"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
      [/sis$/i, "ses"],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
      [/([^aeiouy]|qu)y$/i, "$1ies"],
      [/([^ch][ieo][ln])ey$/i, "$1ies"],
      [/(x|ch|ss|sh|zz)$/i, "$1es"],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
      [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
      [/(pe)(?:rson|ople)$/i, "$1ople"],
      [/(child)(?:ren)?$/i, "$1ren"],
      [/eaux$/i, "$0"],
      [/m[ae]n$/i, "men"],
      ["thou", "you"]
    ].forEach(function(u) {
      return d.addPluralRule(u[0], u[1]);
    }), [
      [/s$/i, ""],
      [/(ss)$/i, "$1"],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
      [/ies$/i, "y"],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
      [/\b(mon|smil)ies$/i, "$1ey"],
      [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
      [/(seraph|cherub)im$/i, "$1"],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
      [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
      [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
      [/(test)(?:is|es)$/i, "$1is"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
      [/(alumn|alg|vertebr)ae$/i, "$1a"],
      [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
      [/(matr|append)ices$/i, "$1ix"],
      [/(pe)(rson|ople)$/i, "$1rson"],
      [/(child)ren$/i, "$1"],
      [/(eau)x?$/i, "$1"],
      [/men$/i, "man"]
    ].forEach(function(u) {
      return d.addSingularRule(u[0], u[1]);
    }), [
      // Singular words with no plurals.
      "adulthood",
      "advice",
      "agenda",
      "aid",
      "aircraft",
      "alcohol",
      "ammo",
      "analytics",
      "anime",
      "athletics",
      "audio",
      "bison",
      "blood",
      "bream",
      "buffalo",
      "butter",
      "carp",
      "cash",
      "chassis",
      "chess",
      "clothing",
      "cod",
      "commerce",
      "cooperation",
      "corps",
      "debris",
      "diabetes",
      "digestion",
      "elk",
      "energy",
      "equipment",
      "excretion",
      "expertise",
      "firmware",
      "flounder",
      "fun",
      "gallows",
      "garbage",
      "graffiti",
      "hardware",
      "headquarters",
      "health",
      "herpes",
      "highjinks",
      "homework",
      "housework",
      "information",
      "jeans",
      "justice",
      "kudos",
      "labour",
      "literature",
      "machinery",
      "mackerel",
      "mail",
      "media",
      "mews",
      "moose",
      "music",
      "mud",
      "manga",
      "news",
      "only",
      "personnel",
      "pike",
      "plankton",
      "pliers",
      "police",
      "pollution",
      "premises",
      "rain",
      "research",
      "rice",
      "salmon",
      "scissors",
      "series",
      "sewage",
      "shambles",
      "shrimp",
      "software",
      "species",
      "staff",
      "swine",
      "tennis",
      "traffic",
      "transportation",
      "trout",
      "tuna",
      "wealth",
      "welfare",
      "whiting",
      "wildebeest",
      "wildlife",
      "you",
      /pok[eé]mon$/i,
      // Regexes.
      /[^aeiou]ese$/i,
      // "chinese", "japanese"
      /deer$/i,
      // "deer", "reindeer"
      /fish$/i,
      // "fish", "blowfish", "angelfish"
      /measles$/i,
      /o[iu]s$/i,
      // "carnivorous"
      /pox$/i,
      // "chickpox", "smallpox"
      /sheep$/i
    ].forEach(d.addUncountableRule), d;
  });
})(F);
var N = F.exports;
const b = /* @__PURE__ */ V(N);
class i {
  /**
   * Initializes a new instance of JStr with the given string.
   * @param value - The initial string.
   */
  constructor(e) {
    C(this, "value");
    Array.isArray(e) && (e = e.join(" ")), this.value = e;
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
  after(e) {
    return new i(n.after(this.value, e));
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
  afterLast(e) {
    return new i(n.afterLast(this.value, e));
  }
  /**
   * Removes diacritics from the string, converting it to ASCII.
   * @returns {Stringable} JStr instance for method chaining.
   * @example
   * const result = new JStr("héllô wórld").ascii().toString();
   * // result: "hello world"
   */
  ascii() {
    return new i(n.ascii(this.value));
  }
  /**
   * Returns a new JStr instance containing the substring before the specified search string.
   * If the search string is not found, the original string is returned.
   * @param {string} search - The search string.
   * @returns {Stringable} A new JStr instance with the substring before the search string.
   * @example
   * const result = new JStr("hello world").before("world").toString();
   * // result: "hello "
   */
  before(e) {
    return new i(n.before(this.value, e));
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
  beforeLast(e) {
    return new i(n.beforeLast(this.value, e));
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
  between(e, t) {
    return new i(n.between(this.value, e, t));
  }
  /**
   * Between the string to a specified words.
   * @param start - The start of the string.
   * @param end - The end of the string.
   * @returns {Stringable}
   */
  betweenFirst(e, t) {
    return new i(n.betweenFirst(this.value, e, t));
  }
  /**
   * Converts the string to camelCase.
   * @returns {Stringable} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello world").camel().toString();
   * // result: "helloWorld"
   */
  camel() {
    return new i(n.camel(this.value));
  }
  /**
   * Returns the character at the specified position in the string.
   * @param {number} index - The position of the character to retrieve. Negative values count from the end of the string.
   * @returns {string|boolean} The character at the specified position or `false` if the index is out of bounds.
   * @example
   * const result = JStr.chatAt("Hello World", 6);
   * // result: "W"
   */
  chatAt(e) {
    return new i(n.chatAt(this.value, e));
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
  contains(e, t = !1) {
    return n.contains(this.value, e, t);
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
  containsAll(e, t = !1) {
    return n.containsAll(this.value, e, t);
  }
  /**
   * Checks if the string ends with the specified substring.
   * @param {string} substring - The substring to check for.
   * @returns {boolean} `true` if the string ends with the substring, otherwise `false`.
   * @example
   * const result = new JStr("hello world").endsWith("world");
   * // result: true
   */
  endsWith(e) {
    return n.endsWith(this.value, e);
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
  excerpt(e = "", t = {}) {
    return n.excerpt(this.value, e, t);
  }
  /**
   * Appends the specified value to the end of the string if it's not already present.
   * @returns {Stringable} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello").finish(" world").toString();
   * // result: "hello world"
   * @param cap
   */
  finish(e) {
    return n.finish(this.value, e);
  }
  /**
   * Wraps the string with the given strings.
   * @param {string} before - The string to be prepended to the input.
   * @param {string | null} after - The string to be appended to the input.
   * @returns {Stringable} A new JStr instance with the wrapped string.
   * @example
   * const result = JStr.of("example").wrap("[", "]");
   * // result: JStr instance with value "[example]"
   */
  wrap(e, t = null) {
    return new i(n.wrap(this.value, e, t));
  }
  /**
   * Convert the given string to title case for each word.
   * @returns JStr instance for method chaining.
   * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
   */
  headline() {
    return new i(n.headline(this.value));
  }
  /**
  * Convert the given string to capital case for each word first letter.
  * @returns JStr instance for method chaining.
  * @example jstr('hello world').capitalize().toString(); // Returns 'Hello World!'
  */
  capitalize() {
    return new i(n.capitalize(this.value));
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
  is(e) {
    return n.is(e, this.value);
  }
  /**
   * Checks if the string contains only ASCII characters.
   * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
   * @example
   * const result = new JStr("hello").isAscii();
   * // result: true
   */
  isAscii() {
    return n.isAscii(this.value);
  }
  /**
   * Determine if the string is empty.
   * @returns {boolean} `true` if the string is empty, `false` otherwise.
   * @example
   * const result = JStr.of("").isEmpty();
   * // result: true
   */
  isEmpty() {
    return this.value === "";
  }
  /**
   * Determine if the string is not empty.
   * @returns {boolean} `true` if the string is not empty, `false` otherwise.
   * @example
   * const result = JStr.of("Hello").isNotEmpty();
   * // result: true
   */
  isNotEmpty() {
    return !this.isEmpty();
  }
  /**
   * Checks if the string is a valid JSON format.
   * @returns {boolean} `true` if the string is a valid JSON format, `false` otherwise.
   * @example
   * const result = JStr.of('{"name": "John", "age": 30}').isJson();
   * // result: true
   */
  isJson() {
    return n.isJson(this.value);
  }
  /**
   * Checks if the string is a valid UUID.
   * @returns {boolean} `true` if the string is a valid UUID, `false` otherwise.
   * @example
   * const result = JStr.of('550e8400-e29b-41d4-a716-446655440000').isUuid();
   * // result: true
   */
  isUuid() {
    return n.isUuid(this.value);
  }
  /**
   * Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).
   * @returns {boolean} `true` if the string is a valid ULID, `false` otherwise.
   * @example
   * const result = JStr.of('01E8PMKMZDM1M79ZVBJK1SGGKV').isUlid();
   * // result: true
   */
  isUlid() {
    return n.isUlid(this.value);
  }
  /**
   * Checks if the string is a valid URL.
   * @returns {boolean} `true` if the string is a valid URL, `false` otherwise.
   * @example
   * const result = JStr.of('https://www.example.com').isUrl();
   * // result: true
   */
  isUrl() {
    return n.isUrl(this.value);
  }
  /**
   * Converts the string to kebab-case.
   * @returns JStr instance for method chaining.
   * @example
   * // Returns 'hello-world'
   * jstr('Hello World').kebab().toString();
   */
  kebab() {
    return new i(n.kebab(this.value));
  }
  /**
   * Converts the string to snake case.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
   * @param delimiter
   */
  snake(e = "_") {
    return new i(n.snake(this.value, e));
  }
  /**
   * Make a string's first character lowercase.
   * @returns {string}
   * @example
   * const result = new JStr("Hello World").lcfirst();
   * // result: JStr instance with value "hello World"
   */
  lcfirst() {
    return new i(n.lcfirst(this.value));
  }
  /**
   * Converts the first character of the string to uppercase.
   * @param {string} value - The string to convert.
   * @returns {string} The string with the first character in uppercase.
   * @example
   * const result = JStr.ucfirst('hello');
   * // result: 'Hello'
   */
  ucfirst() {
    return new i(n.ucfirst(this.value));
  }
  /**
   * Splits the string into an array of words by uppercase characters.
   * @param {string} value - The string to split.
   * @returns {string[]} An array of words.
   * @example
   * const result = JStr.ucsplit('helloWorld');
   * // result: ['hello', 'World']
   */
  ucsplit() {
    return n.ucsplit(this.value);
  }
  /**
   * Returns the length of the string.
   * @returns {number} The length of the string.
   * @example
   * const result = new JStr("hello world").length();
   * // result: 11
   */
  length(e) {
    return n.length(this.value, e);
  }
  /**
   * Limits the length of the string and appends an optional ending string.
   * @param {number} limit - The maximum length of the string.
   * @param {string} [end=''] - The optional ending string to append if the limit is exceeded.
   * @returns {Stringable} JStr instance for method chaining.
   * @example
   * const result = new JStr("Lorem ipsum dolor sit amet").limit(10, '...').toString();
   * // result: "Lorem ipsu..."
   */
  limit(e = 100, t = "...") {
    return new i(n.limit(this.value, e, t));
  }
  /**
   * Converts the string to lowercase.
   * @returns JStr instance for method chaining.
   */
  lower() {
    return new i(n.lower(this.value));
  }
  /**
   * Converts the string to uppercase.
   * @returns JStr instance for method chaining.
   */
  upper() {
    return new i(n.upper(this.value));
  }
  /**
   * Removes whitespace from the beginning of the string.
   * @param characters
   * @returns {string} The string with leading whitespace removed.
   * @example
   * const result = JStr.ltrim('   hello');
   * // result: 'hello'
   */
  ltrim(e = `\r
	\v\0`) {
    return new i(n.ltrim(this.value, e));
  }
  /**
   * Removes whitespace from the beginning and end of the string.
   * @returns {string} The string with leading and trailing whitespace removed.
   * @example
   * const result = JStr.trim('   hello   ');
   * // result: 'hello'
   */
  trim() {
    return new i(n.trim(this.value));
  }
  /**
   * Removes whitespace from the end of the string.
   * @param characters
   * @returns {string} The string with trailing whitespace removed.
   * @example
   * const result = JStr.rtrim('hello   ');
   * // result: 'hello'
   */
  rtrim(e = `\r
	\v\0`) {
    return new i(n.rtrim(this.value, e));
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
  mask(e, t, r = null, s = "UTF-8") {
    return new i(n.mask(this.value, e, t, r, s));
  }
  /**
   * Get the string matching the given pattern.
   * @param {string} pattern - The regular expression pattern.
   * @returns {string} The string matching the pattern.
   * @example
   * const result = JStr.match(/\d+/, 'abc123def');
   * // result: '123'
   */
  match(e) {
    return new i(n.match(e, this.value));
  }
  /**
   * Determine if a given string matches a given pattern.
   * @param {string | RegExp | Iterable<string | RegExp>} pattern - The pattern or patterns to match against.
   * @returns {boolean} True if the value matches any of the patterns, false otherwise.
   * @example
   * const result = JStr.isMatch(/\d+/, 'abc123def');
   * // result: true
   */
  isMatch(e) {
    return n.isMatch(e, this.value);
  }
  /**
   * Get the strings matching the given pattern.
   * @param {string} pattern - The regular expression pattern.
   * @returns {Array<string>} An array of strings matching the pattern.
   * @example
   * const result = JStr.matchAll(/\d+/, 'abc123def456');
   * // result: ['123', '456']
   */
  matchAll(e) {
    return n.matchAll(e, this.value);
  }
  /**
   * Appends a new line to the string.
   * @param {number} count - The number of new lines to append. Default is 1.
   * @returns {Stringable} A new JStr instance with the appended new lines.
   * @example
   * const result = new JStr("Hello").newLine(2);
   * // result: JStr instance with value "Hello\n\n"
   */
  newLine(e = 1) {
    return this.append(`
`.repeat(e));
  }
  /**
   * Appends the given values to the string.
   * @param {...(string | number | boolean | symbol)[]} values - The values to append to the string.
   * @returns {Stringable} A new JStr instance with the appended values.
   * @example
   * const result = new JStr("Hello").append(" World", 42, true);
   * // result: JStr instance with value "Hello World42true"
   */
  append(...e) {
    return new i(this.value + e.join(""));
  }
  /**
   * Prepends the given values to the string.
   * @param {...string} values - The values to prepend to the string.
   * @returns {Stringable} A new JStr instance with the given values prepended.
   * @example
   * const result = new JStr("World").prepend("Hello, ");
   * // result: JStr instance with value "Hello, World"
   */
  prepend(...e) {
    return new i(e.join("") + this.value);
  }
  /**
   * Converts the string to studly case, capitalizing each word and removing separators.
   * @returns {Stringable} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello_world").studly().toString();
   * // result: "HelloWorld"
   */
  studly() {
    return new i(n.studly(this.value));
  }
  /**
   * Pluralize the last word of an English, studly caps case string.
   *
   * @return string
   */
  pluralStudly() {
    return new i(n.pluralStudly(this.value));
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
  substr(e, t = null, r = "UTF-8") {
    return new i(n.substr(this.value, e, t, r));
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
  substrCount(e, t = 0, r = null) {
    return n.substrCount(this.value, e, t, r);
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
  substrReplace(e, t, r) {
    return new i(n.substrReplace(this.value, e, t, r));
  }
  /**
   * Swap multiple keywords in a string with other keywords.
   * @param {Record<string, string>} map - An object representing the mapping of keywords to their replacements.
   * @returns {string} The resulting string after swapping keywords.
   * @example
   * const result = JStr.swap({ 'foo': 'bar', 'hello': 'world' }, 'foo hello');
   * // result: "bar world"
   */
  swap(e) {
    return new i(n.swap(e, this.value));
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
  padBoth(e, t = " ") {
    return new i(n.padBoth(this.value, e, t));
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
  padLeft(e, t = " ") {
    return new i(n.padLeft(this.value, e, t));
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
  padRight(e, t = " ") {
    return new i(n.padRight(this.value, e, t));
  }
  /**
   * Repeat the given string.
   * @param {number} times - The number of times to repeat the string.
   * @returns {string} The resulting string after repetition.
   * @example
   * const result = JStr.repeat("Hello", 3);
   * // result: "HelloHelloHello"
   */
  repeat(e) {
    return new i(n.repeat(this.value, e));
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
  replaceArray(e, t) {
    return new i(n.replaceArray(e, t, this.value));
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
  replace(e, t, r = !0) {
    return new i(n.replace(e, t, this.value, r));
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
  replaceFirst(e, t) {
    return new i(n.replaceFirst(e, t, this.value));
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
  replaceLast(e, t) {
    return new i(n.replaceFirst(e, t, this.value));
  }
  /**
   * Replace the patterns matching the given regular expression.
   * @param {string | RegExp} pattern - The regular expression pattern to match.
   * @param {((match: string, ...groups: any[]) => string) | string} replace - The replacement function or string.
   * @param _limit
   * @returns {Stringable} A new JStr instance after replacements.
   * @example
   * const result = new JStr("Hello 123 World").replaceMatches(/\d+/, match => `[${match}]`, 1);
   * // result: JStr instance with value "Hello [123] World"
   */
  replaceMatches(e, t, r = -1) {
    const s = this.value, a = e instanceof RegExp ? e : new RegExp(e, "g");
    if (typeof t == "function") {
      const l = s.replace(a, (...h) => t(h[0], ...h.slice(1)));
      return new i(l);
    } else {
      const l = s.replace(a, t);
      return new i(l);
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
  wordCount(e = null) {
    return n.wordCount(this.value, e);
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
  words(e = 100, t = "...") {
    return new i(n.words(this.value, e, t));
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
  wordWrap(e = 75, t = `
`, r = !1) {
    return new i(n.wordWrap(this.value, e, t, r));
  }
  /**
   * Determine if the string is an exact match with the given value.
   * @param {string | JStr} value - The value to compare with the current string.
   * @returns {boolean} True if the strings are an exact match, false otherwise.
   * @example
   * const isMatch = new JStr("Hello, World").exactly("Hello, World");
   * // isMatch: true
   */
  exactly(e) {
    const t = e instanceof i ? e.toString() : e;
    return this.value === t;
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
  explode(e, t = Number.MAX_SAFE_INTEGER) {
    return this.value.split(e, t);
  }
  /**
   * Call the given callback and return a new string.
   * @param {Function} callback - The callback function to apply to the string.
   * @returns {Stringable} A new JStr instance resulting from the callback.
   * @example
   * const result = new JStr("Hello, World").pipe((str) => str.toUpperCase());
   * // result: JStr instance with value "HELLO, WORLD"
   */
  pipe(e) {
    return new i(e(this.value));
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
  position(e, t = 0, r = null) {
    return n.position(this.value, e, t, r);
  }
  /**
   * Begin a string with a single instance of a given value.
   * @param {string} prefix - The substring to add at the beginning.
   * @returns {string} The resulting string.
   * @example
   * const result = JStr.start("World", "Hello, ");
   * // result: "Hello, World"
   */
  start(e) {
    return new i(n.start(this.value, e));
  }
  /**
   * Determine if a given string starts with a given substring.
   * @param {string | string[]} needles - The substring(s) to check for.
   * @returns {boolean} True if the string starts with any of the specified substrings, false otherwise.
   * @example
   * const result = JStr.startsWith("Hello, World", ["Hello", "Hi"]);
   * // result: true
   */
  startsWith(e) {
    return n.startsWith(this.value, e);
  }
  /**
   * Take the first or last {limit} characters.
   * @param {number} limit - The number of characters to take. If negative, take from the end.
   * @returns {string} The resulting string.
   * @example
   * const result = JStr.take(5);
   * // result: "Hello"
   */
  take(e) {
    return e < 0 ? this.substr(e) : this.substr(0, e);
  }
  /**
   * Convert the given string to title case.
   * @returns {string} The resulting string in title case.
   * @example
   * const result = JStr.title("hello world");
   * // result: "Hello World"
   */
  title() {
    return new i(n.title(this.value));
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
  slug(e = "-", t = null, r = { "@": "at" }) {
    return new i(n.slug(this.value, e, t, r));
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
  tap(e) {
    return e && e(this), this;
  }
  /**
   * Get the singular form of an English word.
   *
   * @return string
   */
  singular() {
    return new i(n.singular(this.value));
  }
  /**
   * Get the plural form of an English word.
   *
   * @return string
   */
  plural() {
    return new i(n.plural(this.value));
  }
  /**
   * Remove all "extra" blank space from the given string.
   *
   * @return The processed string with extra spaces removed.
   */
  squish() {
    return new i(n.squish(this.value));
  }
  /**
   * Reverse the given string.
   *
   * @return The reversed string.
   */
  reverse() {
    return new i(n.reverse(this.value));
  }
  /**
   * Remove any occurrence of the given string in the subject.
   *
   * @param search - The string to be removed.
   * @param caseSensitive - Whether the removal is case-sensitive.
   * @return The string with the specified value removed.
   */
  remove(e, t = !0) {
    return new i(n.remove(e, this.value, t));
  }
  /**
   * Parse input from a string to an array, according to a format.
   *
   * @param format - The format string.
   * @return An array of parsed elements.
   */
  scan(e) {
    const r = new RegExp(e).exec(this.value);
    return r ? r.slice(1) : [];
  }
  /**
   * Split a string using a regular expression or by length.
   *
   * @param pattern - The pattern or length to split by.
   * @param limit - The maximum number of splits.
   * @return An array of string segments.
   */
  split(e, t = -1) {
    return typeof e == "number" ? this.value.match(new RegExp(`.{1,${e}}`, "g")) || [] : this.value.split(new RegExp(e), t);
  }
  /**
   * Determine if the string matches the given pattern.
   *
   * @param pattern - The pattern to test against.
   * @return True if the string matches the pattern, false otherwise.
   */
  test(e) {
    return this.isMatch(e);
  }
  /**
   * Apply the callback if the given "value" is truthy.
   * @param value - The value to evaluate or a function returning the value.
   * @param callback - The callback to execute if the value is truthy.
   * @param defaultCallback - The callback to execute if the value is falsy.
   * @returns The result of the callback or the instance itself.
   */
  when(e, t, r) {
    let s = typeof e == "function" ? e() : e;
    return s && t ? t(this) : !s && r ? r(this) : this;
  }
  /**
   * Apply the callback if the given "value" is falsy.
   * @param value - The value to evaluate or a function returning the value.
   * @param callback - The callback to execute if the value is falsy.
   * @param defaultCallback - The callback to execute if the value is truthy.
   * @returns The result of the callback or the instance itself.
   */
  unless(e, t, r) {
    let s = typeof e == "function" ? e() : e;
    return !s && t ? t(this) : s && r ? r(this) : this;
  }
  /**
   * Get the underlying string value as an integer.
   * @returns The integer representation of the string.
   */
  toInteger() {
    return parseInt(this.value, 10);
  }
  /**
   * Get the underlying string value as a float.
   * @returns The float representation of the string.
   */
  toFloat() {
    return parseFloat(this.value);
  }
  /**
   * Get the underlying string value as a boolean.
   * Returns true when value is "1", "true", "on", and "yes". Otherwise, returns false.
   * @returns The boolean representation of the string.
   */
  toBoolean() {
    return ["1", "true", "on", "yes"].includes(this.value.toLowerCase());
  }
  /**
   * Get the underlying string value as a Date instance.
   * Attempts to parse the date according to the provided format.
   * @param format - The date format (optional).
   * @returns The Date representation of the string.
   */
  toDate(e) {
    if (!e)
      return new Date(this.value);
    const t = {
      YYYY: "(\\d{4})",
      MM: "(\\d{2})",
      DD: "(\\d{2})"
      // Add more format specifiers as needed
    };
    let r = e;
    for (const x in t)
      r = r.replace(x, t[x]);
    const s = new RegExp(r).exec(this.value);
    if (!s)
      return null;
    const a = e.indexOf("YYYY") !== -1 ? e.split("YYYY")[0].length : -1, l = e.indexOf("MM") !== -1 ? e.split("MM")[0].length : -1, h = e.indexOf("DD") !== -1 ? e.split("DD")[0].length : -1, f = a !== -1 ? parseInt(s[a + 1]) : 0, p = l !== -1 ? parseInt(s[l + 1]) - 1 : 0, v = h !== -1 ? parseInt(s[h + 1]) : 1;
    return new Date(f, p, v);
  }
  /**
   * Returns the final string after all chained manipulations.
   * @returns The manipulated string.
   * @example JStr.of('Hello World').upper().toString(); // Returns 'HELLO WORLD'
   */
  toString() {
    return this.value;
  }
}
class $ {
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
  static after(e, t) {
    const r = e.indexOf(t);
    return r === -1 ? e : e.substring(r + t.length);
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
  static afterLast(e, t) {
    const r = e.lastIndexOf(t);
    return r !== -1 ? e.substring(r + t.length) : e;
  }
  /**
   * Removes diacritics from the string, converting it to ASCII.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("héllô wórld").ascii().toString();
   * // result: "hello world"
   */
  static ascii(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
  static before(e, t) {
    const r = e.indexOf(t);
    return r === -1 ? e : e.substring(0, r);
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
  static beforeLast(e, t) {
    const r = e.lastIndexOf(t);
    return r !== -1 ? e.substring(0, r) : e;
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
  static between(e, t, r) {
    return t === "" || t === null || r === "" || r === null ? e : $.beforeLast($.after(e, t), r);
  }
  /**
   * Between the string to a specified words.
   * @param subject
   * @param from - The start of the string.
   * @param to - The end of the string.
   * @returns string
   */
  static betweenFirst(e, t, r) {
    return t === "" || t === null || r === "" || r === null ? e : $.before($.after(e, t), r);
  }
  /**
   * Converts the string to camelCase.
   * @returns {string}
   * @example
   * const result = new JStr("hello world").camel().toString();
   * // result: "helloWorld"
   */
  static camel(e) {
    return $.lcfirst($.studly(e));
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
  static chatAt(e, t) {
    const r = e.length;
    return (t < 0 ? t < -r : t > r - 1) ? !1 : e.charAt(t);
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
  static contains(e, t, r = !1) {
    return r && (e = e.toLowerCase()), typeof t == "string" && (t = [t]), t.some((s) => e.includes(s));
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
  static containsAll(e, t, r = !1) {
    for (let s = 0; s < t.length; s++)
      if (!$.contains(e, t[s], r))
        return !1;
    return !0;
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
  static endsWith(e, t) {
    typeof t == "string" && (t = [t]);
    for (let r = 0; r < t.length; r++)
      if (t[r] !== "" && e.endsWith(t[r]))
        return !0;
    return !1;
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
  static excerpt(e, t = "", r = {}) {
    const s = r.radius ?? 100, a = r.omission ?? "...", l = new RegExp(`^(.*?)(${t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")})(.*)$`, "iu"), h = e.match(l);
    if (!h)
      return null;
    let f = h[1];
    f = f.substring(Math.max(f.length - s, 0)), f.length > s && (f = a + f);
    let p = h[3];
    return p = p.substring(0, s), p.length > s && (p += a), f + h[2] + p;
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
  static finish(e, t) {
    const r = t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), s = new RegExp(`(?:${r})+$`, "u");
    return e.replace(s, "") + t;
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
  static wrap(e, t, r = null) {
    return r || (r = t), t + e + r;
  }
  /**
   * Convert the given string to title case for each word.
   * @returns JStr instance for method chaining.
   * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
   */
  static headline(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim().toLowerCase().split(" ").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
  }
  /**
   * Convert the given string to capital case for each word first letter.
   * @returns JStr instance for method chaining.
   * @example jstr('hello world').capitalize().toString(); // Returns 'Hello World!'
   */
  static capitalize(e) {
    return e.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, (t) => t.toUpperCase());
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
  static is(e, t) {
    Array.isArray(e) || (e = [e]);
    for (const r of e) {
      const s = r.toString();
      if (s === t)
        return !0;
      const l = s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/\\\*/g, ".*");
      if (new RegExp("^" + l + "\\z", "u").test(t))
        return !0;
    }
    return !1;
  }
  /**
   * Checks if the string contains only ASCII characters.
   * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
   * @example
   * const result = new JStr("hello").isAscii();
   * // result: true
   */
  static isAscii(e) {
    return /^[\x00-\x7F]*$/.test(e);
  }
  /**
   * Checks if the string is a valid JSON format.
   * @param {string} value - The string to check.
   * @returns {boolean} `true` if the string is a valid JSON format, `false` otherwise.
   * @example
   * const result = JStr.isJson('{"name": "John", "age": 30}');
   * // result: true
   */
  static isJson(e) {
    try {
      JSON.parse(e);
    } catch {
      return !1;
    }
    return !0;
  }
  /**
   * Checks if the string is a valid UUID.
   * @param {string} value - The string to check.
   * @returns {boolean} `true` if the string is a valid UUID, `false` otherwise.
   * @example
   * const result = JStr.isUuid('550e8400-e29b-41d4-a716-446655440000');
   * // result: true
   */
  static isUuid(e) {
    return P(e);
  }
  /**
   * Determine if a given value is a valid ULID.
   * @param value - The value to check.
   * @returns True if the value is a valid ULID, false otherwise.
   * @example
   * const isValid = JStr.isUlid('01F3Z46YKPAWZVJMXTHWCKQWDT');
   * // isValid: true
   */
  static isUlid(e) {
    return typeof e != "string" ? !1 : /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/.test(e);
  }
  /**
   * Checks if the string is a valid URL.
   * @param {string} value - The string to check.
   * @returns {boolean} `true` if the string is a valid URL, `false` otherwise.
   * @example
   * const result = JStr.isUrl('https://www.example.com');
   * // result: true
   */
  static isUrl(e) {
    try {
      return new URL(e), !0;
    } catch {
      return !1;
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
  static kebab(e) {
    return $.snake(e, "-");
  }
  /**
   * Converts the string to snake case.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
   * @param value
   * @param delimiter
   */
  static snake(e, t = "_") {
    let r = e.replace(/[\s-]+/g, t).replace(/([A-Z])/g, (s, a) => t + a.toLowerCase());
    return r.startsWith(t) && (r = r.substring(1)), r;
  }
  /**
   * Make a string's first character lowercase.
   * @returns {string}
   * @example
   * const result = new JStr("Hello World").lcfirst();
   * // result: JStr instance with value "hello World"
   */
  static lcfirst(e) {
    return e.charAt(0).toLowerCase() + e.slice(1);
  }
  /**
   * Converts the first character of the string to uppercase.
   * @param {string} value - The string to convert.
   * @returns {string} The string with the first character in uppercase.
   * @example
   * const result = JStr.ucfirst('hello');
   * // result: 'Hello'
   */
  static ucfirst(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  /**
   * Splits the string into an array of words by uppercase characters.
   * @param {string} value - The string to split.
   * @returns {string[]} An array of words.
   * @example
   * const result = JStr.ucsplit('helloWorld');
   * // result: ['hello', 'World']
   */
  static ucsplit(e) {
    return e.split(new RegExp("(?=\\p{Lu})", "u")).filter(Boolean);
  }
  /**
   * Returns the length of the string.
   * @returns {number} The length of the string.
   * @example
   * const result = new JStr("hello world").length();
   * // result: 11
   */
  static length(e, t) {
    return e.length;
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
  static limit(e, t = 100, r = "...") {
    return e.length > t ? e.substring(0, t) + r : e;
  }
  /**
   * Converts the string to lowercase.
   * @returns JStr instance for method chaining.
   */
  static lower(e) {
    return e.toLowerCase();
  }
  /**
   * Converts the string to uppercase.
   * @returns JStr instance for method chaining.
   */
  static upper(e) {
    return e.toUpperCase();
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
  static ltrim(e, t = `\r
	\v\0`) {
    return e.replace(/^\s+/u, t);
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
  static trim(e, t = "\\s") {
    const r = t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), s = new RegExp(`^${r}+|${r}+$`, "g");
    return e.replace(s, "");
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
  static rtrim(e, t = `\r
	\v\0`) {
    return e.replace(/\s+$/u, t);
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
  static mask(e, t, r, s = null, a = "UTF-8") {
    if (t === "")
      return e;
    const l = s !== null ? e.substr(r, s) : e.substr(r);
    if (l === "")
      return e;
    const h = r < 0 ? r < -e.length ? 0 : e.length + r : r, f = e.substr(0, h), p = l.length, v = e.substr(h + p);
    return f + t.charAt(0).repeat(p) + v;
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
  static match(e, t) {
    const r = t.match(e);
    return r ? r[1] ?? r[0] : "";
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
  static isMatch(e, t) {
    const r = t.toString();
    Symbol.iterator in Object(e) ? e = Array.from(e) : e = [e];
    for (const s of e)
      if ((s instanceof RegExp ? s : new RegExp(s)).test(r))
        return !0;
    return !1;
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
  static matchAll(e, t) {
    const r = t.matchAll(e);
    return r ? Array.from(r).map((s) => s[1] ?? s[0]) : [];
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
  static password(e = 32, t = !0, r = !0, s = !0, a = !1) {
    const l = [];
    return t && l.push(..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), r && l.push(..."0123456789"), s && l.push(..."~!#$%^&*()-_.,<>?/\\{}[]|:;"), a && l.push(" "), Array.from({ length: e }, () => l[Math.floor(Math.random() * l.length)]).join("");
  }
  /**
   * Converts the string to studly case, capitalizing each word and removing separators.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello_world").studly().toString();
   * // result: "HelloWorld"
   */
  static studly(e) {
    return e.toLowerCase().replace(/(?:^|\s|-|_)+(.)/g, (t, r) => r.toUpperCase());
  }
  /**
   * Pluralize the last word of an English, studly caps case string.
   *
   * @return string
   * @param value
   */
  static pluralStudly(e) {
    const t = e.split(/(?=[A-Z])/), r = t.pop() || "";
    return t.join("") + this.plural(r);
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
  static substr(e, t, r = null, s = "UTF-8") {
    return e.substring(t, r !== null ? t + r : void 0);
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
  static substrCount(e, t, r = 0, s = null) {
    return s !== null ? e.substring(r, r + s).split(t).length - 1 : e.substring(r).split(t).length - 1;
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
  static substrReplace(e, t, r, s) {
    if (typeof e == "string" && typeof t == "string" && typeof r == "number" && (typeof s == "number" || s === void 0)) {
      const p = e.substring(0, r), v = e.substring(r + (s ?? e.length));
      return `${p}${t}${v}`;
    } else if (Array.isArray(e) && Array.isArray(t) && Array.isArray(r) && (Array.isArray(s) || s === void 0))
      return e.map((p, v) => {
        const x = r[v] ?? r[0], R = s ? s[v] ?? s[0] : p.length, E = p.substring(0, x), d = p.substring(x + R);
        return `${E}${t[v] ?? t[0]}${d}`;
      });
    throw new Error("Invalid input type. Expected string or array of strings with corresponding types for replace, offset, and length.");
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
  static swap(e, t) {
    return t.replace(
      new RegExp(Object.keys(e).map((r) => r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "g"),
      (r) => e[r]
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
  static padBoth(e, t, r = " ") {
    const s = Math.max(0, t - e.length), a = Math.floor(s / 2), l = Math.ceil(s / 2);
    return `${r.repeat(a)}${e}${r.repeat(l)}`;
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
  static padLeft(e, t, r = " ") {
    const s = Math.max(0, t - e.length);
    return `${r.repeat(s)}${e}`;
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
  static padRight(e, t, r = " ") {
    const s = Math.max(0, t - e.length);
    return `${e}${r.repeat(s)}`;
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
  static repeat(e, t) {
    return e.repeat(t);
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
  static replaceArray(e, t, r) {
    const s = r.split(e);
    let a = s.shift();
    for (const l of s)
      a += (t.shift() ?? e) + l;
    return a;
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
  static replace(e, t, r, s = !0) {
    const a = Array.isArray(e) ? e : [e], l = Array.isArray(t) ? t : [t], h = s ? "" : "i", f = new RegExp(a.map((p) => p.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), h);
    return r.replace(f, (p) => l.shift() ?? p);
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
  static replaceFirst(e, t, r) {
    const s = r.indexOf(e);
    return s !== -1 ? r.substring(0, s) + t + r.substring(s + e.length) : r;
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
  static replaceLast(e, t, r) {
    const s = r.lastIndexOf(e);
    return s !== -1 ? r.substring(0, s) + t + r.substring(s + e.length) : r;
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
  static wordCount(e, t = null) {
    const r = `[\\s${t ? t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") : ""}]+`, s = new RegExp(r, "u");
    return e.split(s).filter((a) => a.length > 0).length;
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
  static words(e, t = 100, r = "...") {
    const s = "^\\s*+(?:\\S++\\s*+){1," + t + "}", a = new RegExp(s, "u"), l = e.match(a);
    return !l || l[0].length === e.length ? e : l[0].trimEnd() + r;
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
  static wordWrap(e, t = 75, r = `
`, s = !1) {
    return e.replace(
      new RegExp(`.{1,${t}}`, "g"),
      (a, l) => s && l % t !== 0 ? a : a + r
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
  static position(e, t, r = 0, s = null) {
    return e.indexOf(t, r);
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
  static start(e, t) {
    const r = t.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    return t + e.replace(new RegExp(`^(?:${r})+`, "u"), "");
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
  static startsWith(e, t) {
    return Array.isArray(t) || (t = [t]), t.some((r) => r !== "" && e.startsWith(r));
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
  static take(e, t) {
    return t < 0 ? $.substr(e, t) : $.substr(e, 0, t);
  }
  /**
   * Convert the given string to title case.
   * @param {string} value - The original string.
   * @returns {string} The resulting string in title case.
   * @example
   * const result = JStr.title("hello world");
   * // result: "Hello World"
   */
  static title(e) {
    return e.replace(/\b\w+/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
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
  static slug(e, t = "-", r = null, s = { "@": "at" }) {
    e = r ? $.ascii(e) : e;
    let a = e.toLowerCase().replace(/\s+/gu, t);
    for (const [l, h] of Object.entries(s))
      a = a.replace(new RegExp(l, "gu"), t + h + t);
    return a = a.replace(/[^a-z0-9-_\s]+/gu, ""), a = a.replace(new RegExp(`[${t}\\s]+`, "gu"), t), a = a.replace(new RegExp(`^${t}+|${t}+$`, "gu"), ""), a;
  }
  /**
   * Generate a UUID (version 4).
   *
   * @return string
   */
  static uuid() {
    return W();
  }
  /**
   * Get the singular form of an English word.
   *
   * @return string
   * @param value
   */
  static singular(e) {
    return b.singular(e);
  }
  /**
   * Get the plural form of an English word.
   *
   * @return string
   * @param value
   */
  static plural(e) {
    return b.plural(e);
  }
  /**
   * Remove all "extra" blank space from the given string.
   *
   * @param value - The string to be processed.
   * @return The processed string with extra spaces removed.
   */
  static squish(e) {
    let t = e.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
    return t = t.replace(/(\s|\u3164|\u1160)+/g, " "), t;
  }
  /**
   * Reverse the given string.
   *
   * @param value - The string to be reversed.
   * @return The reversed string.
   */
  static reverse(e) {
    return Array.from(e).reverse().join("");
  }
  /**
   * Generate a more truly "random" alpha-numeric string.
   *
   * @param length - The length of the generated string.
   * @return The random alpha-numeric string.
   */
  static random(e = 16) {
    let t = "";
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let s = 0; s < e; s++) {
      const a = Math.floor(Math.random() * r.length);
      t += r[a];
    }
    return t;
  }
  /**
   * Remove any occurrence of the given string in the subject.
   *
   * @param search - The string to be removed.
   * @param subject - The string from which to remove.
   * @param caseSensitive - Whether the removal is case sensitive.
   * @return The string with the specified value removed.
   */
  static remove(e, t, r = !0) {
    Array.isArray(e) || (e = [e]);
    for (let s of e) {
      const a = RegExp(s, r ? "g" : "gi");
      t = t.replace(a, "");
    }
    return t;
  }
  /**
   * Creates a new JStr instance from the provided string.
   * @param {string} str - The input string to be encapsulated in a JStr instance.
   * @returns {Stringable} - A new JStr instance containing the provided string.
   * @example
   * // Returns a JStr instance representing 'Hello, JStr!'
   * JStr.of('Hello, JStr!').toString();
   */
  static of(e) {
    return new i(e);
  }
}
const n = $;
export {
  n as default
};
