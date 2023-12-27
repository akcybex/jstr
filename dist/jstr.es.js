var P = Object.defineProperty;
var k = (o, t, e) => t in o ? P(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var E = (o, t, e) => (k(o, typeof t != "symbol" ? t + "" : t, e), e);
let C;
const M = new Uint8Array(16);
function S() {
  if (!C && (C = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !C))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return C(M);
}
const z = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function F(o) {
  return typeof o == "string" && z.test(o);
}
const d = [];
for (let o = 0; o < 256; ++o)
  d.push((o + 256).toString(16).slice(1));
function D(o, t = 0) {
  return d[o[t + 0]] + d[o[t + 1]] + d[o[t + 2]] + d[o[t + 3]] + "-" + d[o[t + 4]] + d[o[t + 5]] + "-" + d[o[t + 6]] + d[o[t + 7]] + "-" + d[o[t + 8]] + d[o[t + 9]] + "-" + d[o[t + 10]] + d[o[t + 11]] + d[o[t + 12]] + d[o[t + 13]] + d[o[t + 14]] + d[o[t + 15]];
}
const W = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), U = {
  randomUUID: W
};
function q(o, t, e) {
  if (U.randomUUID && !t && !o)
    return U.randomUUID();
  o = o || {};
  const r = o.random || (o.rng || S)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    e = e || 0;
    for (let s = 0; s < 16; ++s)
      t[e + s] = r[s];
    return t;
  }
  return D(r);
}
var Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function T(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function V(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var I = { exports: {} };
(function(o, t) {
  (function(e, r) {
    typeof V == "function" ? o.exports = r() : e.pluralize = r();
  })(Y, function() {
    var e = [], r = [], s = {}, u = {}, l = {};
    function h(a) {
      return typeof a == "string" ? new RegExp("^" + a + "$", "i") : a;
    }
    function f(a, c) {
      return a === c ? c : a === a.toLowerCase() ? c.toLowerCase() : a === a.toUpperCase() ? c.toUpperCase() : a[0] === a[0].toUpperCase() ? c.charAt(0).toUpperCase() + c.substr(1).toLowerCase() : c.toLowerCase();
    }
    function p(a, c) {
      return a.replace(/\$(\d{1,2})/g, function(y, m) {
        return c[m] || "";
      });
    }
    function x(a, c) {
      return a.replace(c[0], function(y, m) {
        var $ = p(c[1], arguments);
        return f(y === "" ? a[m - 1] : y, $);
      });
    }
    function b(a, c, y) {
      if (!a.length || s.hasOwnProperty(a))
        return c;
      for (var m = y.length; m--; ) {
        var $ = y[m];
        if ($[0].test(c))
          return x(c, $);
      }
      return c;
    }
    function R(a, c, y) {
      return function(m) {
        var $ = m.toLowerCase();
        return c.hasOwnProperty($) ? f(m, $) : a.hasOwnProperty($) ? f(m, a[$]) : b($, m, y);
      };
    }
    function v(a, c, y, m) {
      return function($) {
        var A = $.toLowerCase();
        return c.hasOwnProperty(A) ? !0 : a.hasOwnProperty(A) ? !1 : b(A, A, y) === A;
      };
    }
    function g(a, c, y) {
      var m = c === 1 ? g.singular(a) : g.plural(a);
      return (y ? c + " " : "") + m;
    }
    return g.plural = R(
      l,
      u,
      e
    ), g.isPlural = v(
      l,
      u,
      e
    ), g.singular = R(
      u,
      l,
      r
    ), g.isSingular = v(
      u,
      l,
      r
    ), g.addPluralRule = function(a, c) {
      e.push([h(a), c]);
    }, g.addSingularRule = function(a, c) {
      r.push([h(a), c]);
    }, g.addUncountableRule = function(a) {
      if (typeof a == "string") {
        s[a.toLowerCase()] = !0;
        return;
      }
      g.addPluralRule(a, "$0"), g.addSingularRule(a, "$0");
    }, g.addIrregularRule = function(a, c) {
      c = c.toLowerCase(), a = a.toLowerCase(), l[a] = c, u[c] = a;
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
    ].forEach(function(a) {
      return g.addIrregularRule(a[0], a[1]);
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
    ].forEach(function(a) {
      return g.addPluralRule(a[0], a[1]);
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
    ].forEach(function(a) {
      return g.addSingularRule(a[0], a[1]);
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
    ].forEach(g.addUncountableRule), g;
  });
})(I);
var j = I.exports;
const O = /* @__PURE__ */ T(j), i = class i {
  // milliseconds for delay
  /**
   * Initializes a new instance of JStr with the given string.
   * @param str - The initial string.
   */
  constructor(t) {
    E(this, "str");
    Array.isArray(t) && (t = t.join(" ")), this.str = t;
    const e = {
      endOfChain: !1,
      get: (r, s, u) => typeof r[s] == "function" ? (...l) => {
        if (e.endOfChain)
          return e.endOfChain = !1, r.toString();
        const h = r[s].apply(r, l);
        return setTimeout(() => {
          e.endOfChain = !0;
        }, i.delay), h instanceof i ? new Proxy(h, e) : h;
      } : s === "valueOf" && e.endOfChain ? (e.endOfChain = !1, () => r.toString()) : Reflect.get(r, s, u)
    };
    return new Proxy(this, e);
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
  after(t) {
    return new i(n.after(this.str, t));
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
  afterLast(t) {
    return new i(n.after(this.str, t));
  }
  /**
   * Removes diacritics from the string, converting it to ASCII.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("héllô wórld").ascii().toString();
   * // result: "hello world"
   */
  ascii() {
    return new i(n.ascii(this.str));
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
    return new i(n.before(this.str, t));
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
    return new i(n.beforeLast(this.str, t));
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
  between(t, e) {
    return new i(n.between(this.str, t, e));
  }
  /**
   * Between the string to a specified words.
   * @param start - The start of the string.
   * @param end - The end of the string.
   * @returns {Stringable}
   */
  betweenFirst(t, e) {
    return new i(n.betweenFirst(this.str, t, e));
  }
  /**
   * Converts the string to camelCase.
   * @returns {Stringable} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello world").camel().toString();
   * // result: "helloWorld"
   */
  camel() {
    return new i(n.camel(this.str));
  }
  /**
   * Returns the character at the specified position in the string.
   * @param {number} index - The position of the character to retrieve. Negative values count from the end of the string.
   * @returns {string|boolean} The character at the specified position or `false` if the index is out of bounds.
   * @example
   * const result = JStr.chatAt("Hello World", 6);
   * // result: "W"
   */
  chatAt(t) {
    return new i(n.chatAt(this.str, t));
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
  contains(t, e = !1) {
    return n.contains(this.str, t, e);
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
  containsAll(t, e = !1) {
    return n.containsAll(this.str, t, e);
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
    return n.endsWith(this.str, t);
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
  excerpt(t = "", e = {}) {
    return n.excerpt(this.str, t, e);
  }
  /**
   * Appends the specified value to the end of the string if it's not already present.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello").finish(" world").toString();
   * // result: "hello world"
   * @param cap
   */
  finish(t) {
    return n.finish(this.str, t);
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
  wrap(t, e = null) {
    return new i(n.wrap(this.str, t, e));
  }
  /**
   * Convert the given string to title case for each word.
   * @returns JStr instance for method chaining.
   * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
   */
  headline() {
    return new i(n.headline(this.str));
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
    return n.is(t, this.str);
  }
  /**
   * Checks if the string contains only ASCII characters.
   * @returns {boolean} `true` if the string is ASCII, otherwise `false`.
   * @example
   * const result = new JStr("hello").isAscii();
   * // result: true
   */
  isAscii() {
    return n.isAscii(this.str);
  }
  /**
   * Determine if the string is empty.
   * @returns {boolean} `true` if the string is empty, `false` otherwise.
   * @example
   * const result = JStr.of("").isEmpty();
   * // result: true
   */
  isEmpty() {
    return this.str === "";
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
    return n.isJson(this.str);
  }
  /**
   * Checks if the string is a valid UUID.
   * @returns {boolean} `true` if the string is a valid UUID, `false` otherwise.
   * @example
   * const result = JStr.of('550e8400-e29b-41d4-a716-446655440000').isUuid();
   * // result: true
   */
  isUuid() {
    return n.isUuid(this.str);
  }
  /**
   * Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).
   * @returns {boolean} `true` if the string is a valid ULID, `false` otherwise.
   * @example
   * const result = JStr.of('01E8PMKMZDM1M79ZVBJK1SGGKV').isUlid();
   * // result: true
   */
  isUlid() {
    return n.isUlid(this.str);
  }
  /**
   * Checks if the string is a valid URL.
   * @returns {boolean} `true` if the string is a valid URL, `false` otherwise.
   * @example
   * const result = JStr.of('https://www.example.com').isUrl();
   * // result: true
   */
  isUrl() {
    return n.isUrl(this.str);
  }
  /**
   * Converts the string to kebab-case.
   * @returns JStr instance for method chaining.
   * @example
   * // Returns 'hello-world'
   * jstr('Hello World').kebab().toString();
   */
  kebab() {
    return new i(n.kebab(this.str));
  }
  /**
   * Converts the string to snake case.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
   * @param delimiter
   */
  snake(t = "_") {
    return new i(n.snake(this.str, t));
  }
  /**
   * Make a string's first character lowercase.
   * @returns {string}
   * @example
   * const result = new JStr("Hello World").lcfirst();
   * // result: JStr instance with value "hello World"
   */
  lcfirst() {
    return new i(n.lcfirst(this.str));
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
    return new i(n.ucfirst(this.str));
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
    return n.ucsplit(this.str);
  }
  /**
   * Returns the length of the string.
   * @returns {number} The length of the string.
   * @example
   * const result = new JStr("hello world").length();
   * // result: 11
   */
  length(t) {
    return n.length(this.str, t);
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
  limit(t = 100, e = "...") {
    return new i(n.limit(this.str, t, e));
  }
  /**
   * Converts the string to lowercase.
   * @returns JStr instance for method chaining.
   */
  lower() {
    return new i(n.lower(this.str));
  }
  /**
   * Converts the string to uppercase.
   * @returns JStr instance for method chaining.
   */
  upper() {
    return new i(n.upper(this.str));
  }
  /**
   * Removes whitespace from the beginning of the string.
   * @param characters
   * @returns {string} The string with leading whitespace removed.
   * @example
   * const result = JStr.ltrim('   hello');
   * // result: 'hello'
   */
  ltrim(t = `\r
	\v\0`) {
    return new i(n.ltrim(this.str, t));
  }
  /**
   * Removes whitespace from the beginning and end of the string.
   * @returns {string} The string with leading and trailing whitespace removed.
   * @example
   * const result = JStr.trim('   hello   ');
   * // result: 'hello'
   */
  trim() {
    return new i(n.trim(this.str));
  }
  /**
   * Removes whitespace from the end of the string.
   * @param characters
   * @returns {string} The string with trailing whitespace removed.
   * @example
   * const result = JStr.rtrim('hello   ');
   * // result: 'hello'
   */
  rtrim(t = `\r
	\v\0`) {
    return new i(n.rtrim(this.str, t));
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
  mask(t, e, r = null, s = "UTF-8") {
    return new i(n.mask(this.str, t, e, r, s));
  }
  /**
   * Get the string matching the given pattern.
   * @param {string} pattern - The regular expression pattern.
   * @returns {string} The string matching the pattern.
   * @example
   * const result = JStr.match(/\d+/, 'abc123def');
   * // result: '123'
   */
  match(t) {
    return new i(n.match(t, this.str));
  }
  /**
   * Determine if a given string matches a given pattern.
   * @param {string | RegExp | Iterable<string | RegExp>} pattern - The pattern or patterns to match against.
   * @returns {boolean} True if the value matches any of the patterns, false otherwise.
   * @example
   * const result = JStr.isMatch(/\d+/, 'abc123def');
   * // result: true
   */
  isMatch(t) {
    return n.isMatch(t, this.str);
  }
  /**
   * Get the strings matching the given pattern.
   * @param {string} pattern - The regular expression pattern.
   * @returns {Array<string>} An array of strings matching the pattern.
   * @example
   * const result = JStr.matchAll(/\d+/, 'abc123def456');
   * // result: ['123', '456']
   */
  matchAll(t) {
    return n.matchAll(t, this.str);
  }
  /**
   * Appends a new line to the string.
   * @param {number} count - The number of new lines to append. Default is 1.
   * @returns {JStr} A new JStr instance with the appended new lines.
   * @example
   * const result = new JStr("Hello").newLine(2);
   * // result: JStr instance with value "Hello\n\n"
   */
  newLine(t = 1) {
    return this.append(`
`.repeat(t));
  }
  /**
   * Appends the given values to the string.
   * @param {...(string | number | boolean | symbol)[]} values - The values to append to the string.
   * @returns {JStr} A new JStr instance with the appended values.
   * @example
   * const result = new JStr("Hello").append(" World", 42, true);
   * // result: JStr instance with value "Hello World42true"
   */
  append(...t) {
    return new i(this.str + t.join(""));
  }
  /**
   * Prepends the given values to the string.
   * @param {...string} values - The values to prepend to the string.
   * @returns {JStr} A new JStr instance with the given values prepended.
   * @example
   * const result = new JStr("World").prepend("Hello, ");
   * // result: JStr instance with value "Hello, World"
   */
  prepend(...t) {
    return new i(t.join("") + this.str);
  }
  /**
   * Converts the string to studly case, capitalizing each word and removing separators.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello_world").studly().toString();
   * // result: "HelloWorld"
   */
  studly() {
    return new i(n.studly(this.str));
  }
  /**
   * Pluralize the last word of an English, studly caps case string.
   *
   * @return string
   */
  pluralStudly() {
    return new i(n.pluralStudly(this.str));
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
  substr(t, e = null, r = "UTF-8") {
    return new i(n.substr(this.str, t, e, r));
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
  substrCount(t, e = 0, r = null) {
    return n.substrCount(this.str, t, e, r);
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
  substrReplace(t, e, r) {
    return new i(n.substrReplace(this.str, t, e, r));
  }
  /**
   * Swap multiple keywords in a string with other keywords.
   * @param {Record<string, string>} map - An object representing the mapping of keywords to their replacements.
   * @returns {string} The resulting string after swapping keywords.
   * @example
   * const result = JStr.swap({ 'foo': 'bar', 'hello': 'world' }, 'foo hello');
   * // result: "bar world"
   */
  swap(t) {
    return new i(n.swap(t, this.str));
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
  padBoth(t, e = " ") {
    return new i(n.padBoth(this.str, t, e));
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
  padLeft(t, e = " ") {
    return new i(n.padLeft(this.str, t, e));
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
  padRight(t, e = " ") {
    return new i(n.padRight(this.str, t, e));
  }
  /**
   * Repeat the given string.
   * @param {number} times - The number of times to repeat the string.
   * @returns {string} The resulting string after repetition.
   * @example
   * const result = JStr.repeat("Hello", 3);
   * // result: "HelloHelloHello"
   */
  repeat(t) {
    return new i(n.repeat(this.str, t));
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
  replaceArray(t, e) {
    return new i(n.replaceArray(t, e, this.str));
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
  replace(t, e, r = !0) {
    return new i(n.replace(t, e, this.str, r));
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
  replaceFirst(t, e) {
    return new i(n.replaceFirst(t, e, this.str));
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
  replaceLast(t, e) {
    return new i(n.replaceFirst(t, e, this.str));
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
  replaceMatches(t, e, r = -1) {
    const s = this.str, u = t instanceof RegExp ? t : new RegExp(t, "g");
    if (typeof e == "function") {
      const l = s.replace(u, (...h) => e(h[0], ...h.slice(1)));
      return new i(l);
    } else {
      const l = s.replace(u, e);
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
  wordCount(t = null) {
    return n.wordCount(this.str, t);
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
  words(t = 100, e = "...") {
    return new i(n.words(this.str, t, e));
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
  wordWrap(t = 75, e = `
`, r = !1) {
    return new i(n.wordWrap(this.str, t, e, r));
  }
  /**
   * Determine if the string is an exact match with the given value.
   * @param {string | JStr} value - The value to compare with the current string.
   * @returns {boolean} True if the strings are an exact match, false otherwise.
   * @example
   * const isMatch = new JStr("Hello, World").exactly("Hello, World");
   * // isMatch: true
   */
  exactly(t) {
    const e = t instanceof i ? t.toString() : t;
    return this.str === e;
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
  explode(t, e = Number.MAX_SAFE_INTEGER) {
    return this.str.split(t, e);
  }
  /**
   * Call the given callback and return a new string.
   * @param {Function} callback - The callback function to apply to the string.
   * @returns {JStr} A new JStr instance resulting from the callback.
   * @example
   * const result = new JStr("Hello, World").pipe((str) => str.toUpperCase());
   * // result: JStr instance with value "HELLO, WORLD"
   */
  pipe(t) {
    return new i(t(this.str));
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
  position(t, e = 0, r = null) {
    return n.position(this.str, t, e, r);
  }
  /**
   * Begin a string with a single instance of a given value.
   * @param {string} prefix - The substring to add at the beginning.
   * @returns {string} The resulting string.
   * @example
   * const result = JStr.start("World", "Hello, ");
   * // result: "Hello, World"
   */
  start(t) {
    return new i(n.start(this.str, t));
  }
  /**
   * Determine if a given string starts with a given substring.
   * @param {string | string[]} needles - The substring(s) to check for.
   * @returns {boolean} True if the string starts with any of the specified substrings, false otherwise.
   * @example
   * const result = JStr.startsWith("Hello, World", ["Hello", "Hi"]);
   * // result: true
   */
  startsWith(t) {
    return n.startsWith(this.str, t);
  }
  /**
   * Take the first or last {limit} characters.
   * @param {number} limit - The number of characters to take. If negative, take from the end.
   * @returns {string} The resulting string.
   * @example
   * const result = JStr.take(5);
   * // result: "Hello"
   */
  take(t) {
    return t < 0 ? this.substr(t) : this.substr(0, t);
  }
  /**
   * Convert the given string to title case.
   * @returns {string} The resulting string in title case.
   * @example
   * const result = JStr.title("hello world");
   * // result: "Hello World"
   */
  title() {
    return new i(n.title(this.str));
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
  slug(t = "-", e = null, r = { "@": "at" }) {
    return new i(n.slug(this.str, t, e, r));
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
  tap(t) {
    return t && t(this), this;
  }
  /**
   * Get the singular form of an English word.
   *
   * @return string
   */
  singular() {
    return new i(n.singular(this.str));
  }
  /**
   * Get the plural form of an English word.
   *
   * @return string
   */
  plural() {
    return new i(n.plural(this.str));
  }
  /**
   * Apply the callback if the given "value" is truthy.
   * @param value - The value to evaluate or a function returning the value.
   * @param callback - The callback to execute if the value is truthy.
   * @param defaultCallback - The callback to execute if the value is falsy.
   * @returns The result of the callback or the instance itself.
   */
  when(t, e, r) {
    let s = typeof t == "function" ? t() : t;
    return s && e ? e(this) : !s && r ? r(this) : this;
  }
  /**
   * Apply the callback if the given "value" is falsy.
   * @param value - The value to evaluate or a function returning the value.
   * @param callback - The callback to execute if the value is falsy.
   * @param defaultCallback - The callback to execute if the value is truthy.
   * @returns The result of the callback or the instance itself.
   */
  unless(t, e, r) {
    let s = typeof t == "function" ? t() : t;
    return !s && e ? e(this) : s && r ? r(this) : this;
  }
  /**
   * Get the underlying string value as an integer.
   * @returns The integer representation of the string.
   */
  toInteger() {
    return parseInt(this.str, 10);
  }
  /**
   * Get the underlying string value as a float.
   * @returns The float representation of the string.
   */
  toFloat() {
    return parseFloat(this.str);
  }
  /**
   * Get the underlying string value as a boolean.
   * Returns true when value is "1", "true", "on", and "yes". Otherwise, returns false.
   * @returns The boolean representation of the string.
   */
  toBoolean() {
    return ["1", "true", "on", "yes"].includes(this.str.toLowerCase());
  }
  /**
   * Get the underlying string value as a Date instance.
   * Attempts to parse the date according to the provided format.
   * @param format - The date format (optional).
   * @returns The Date representation of the string.
   */
  toDate(t) {
    if (!t)
      return new Date(this.str);
    const e = {
      YYYY: "(\\d{4})",
      MM: "(\\d{2})",
      DD: "(\\d{2})"
      // Add more format specifiers as needed
    };
    let r = t;
    for (const b in e)
      r = r.replace(b, e[b]);
    const s = new RegExp(r).exec(this.str);
    if (!s)
      return null;
    const u = t.indexOf("YYYY") !== -1 ? t.split("YYYY")[0].length : -1, l = t.indexOf("MM") !== -1 ? t.split("MM")[0].length : -1, h = t.indexOf("DD") !== -1 ? t.split("DD")[0].length : -1, f = u !== -1 ? parseInt(s[u + 1]) : 0, p = l !== -1 ? parseInt(s[l + 1]) - 1 : 0, x = h !== -1 ? parseInt(s[h + 1]) : 1;
    return new Date(f, p, x);
  }
  /**
   * Returns the final string after all chained manipulations.
   * @returns The manipulated string.
   * @example JStr.of('Hello World').upper().toString(); // Returns 'HELLO WORLD'
   */
  toString() {
    return this.str;
  }
};
E(i, "delay", 10);
let L = i;
class w {
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
  static after(t, e) {
    const r = t.indexOf(e);
    return r === -1 ? t : t.substring(r + e.length);
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
  static afterLast(t, e) {
    const r = t.lastIndexOf(e);
    return r !== -1 ? t.substring(r + e.length) : t;
  }
  /**
   * Removes diacritics from the string, converting it to ASCII.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("héllô wórld").ascii().toString();
   * // result: "hello world"
   */
  static ascii(t) {
    return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
  static before(t, e) {
    const r = t.indexOf(e);
    return r === -1 ? t : t.substring(0, r);
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
  static beforeLast(t, e) {
    const r = t.lastIndexOf(e);
    return r !== -1 ? t.substring(0, r) : t;
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
  static between(t, e, r) {
    return e === "" || e === null || r === "" || r === null ? t : w.beforeLast(w.after(t, e), r);
  }
  /**
   * Between the string to a specified words.
   * @param subject
   * @param from - The start of the string.
   * @param to - The end of the string.
   * @returns string
   */
  static betweenFirst(t, e, r) {
    return e === "" || e === null || r === "" || r === null ? t : w.before(w.after(t, e), r);
  }
  /**
   * Converts the string to camelCase.
   * @returns {string}
   * @example
   * const result = new JStr("hello world").camel().toString();
   * // result: "helloWorld"
   */
  static camel(t) {
    return w.lcfirst(w.studly(t));
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
  static chatAt(t, e) {
    const r = t.length;
    return (e < 0 ? e < -r : e > r - 1) ? !1 : t.charAt(e);
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
  static contains(t, e, r = !1) {
    return r && (t = t.toLowerCase()), typeof e == "string" && (e = [e]), e.some((s) => t.includes(s));
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
  static containsAll(t, e, r = !1) {
    for (let s = 0; s < e.length; s++)
      if (!w.contains(t, e[s], r))
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
  static endsWith(t, e) {
    typeof e == "string" && (e = [e]);
    for (let r = 0; r < e.length; r++)
      if (e[r] !== "" && t.endsWith(e[r]))
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
  static excerpt(t, e = "", r = {}) {
    const s = r.radius ?? 100, u = r.omission ?? "...", l = new RegExp(`^(.*?)(${e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")})(.*)$`, "iu"), h = t.match(l);
    if (!h)
      return null;
    let f = h[1];
    f = f.substring(Math.max(f.length - s, 0)), f.length > s && (f = u + f);
    let p = h[3];
    return p = p.substring(0, s), p.length > s && (p += u), f + h[2] + p;
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
  static finish(t, e) {
    const r = e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), s = new RegExp(`(?:${r})+$`, "u");
    return t.replace(s, "") + e;
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
  static wrap(t, e, r = null) {
    return r || (r = e), e + t + r;
  }
  /**
   * Convert the given string to title case for each word.
   * @returns JStr instance for method chaining.
   * @example jstr('steve_jobs').headline().toString(); // Returns 'Steve Jobs'
   */
  static headline(t) {
    return t.replace(/[_-]/g, " ").split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
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
  static is(t, e) {
    Array.isArray(t) || (t = [t]);
    for (const r of t) {
      const s = r.toString();
      if (s === e)
        return !0;
      const l = s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/\\\*/g, ".*");
      if (new RegExp("^" + l + "\\z", "u").test(e))
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
  static isAscii(t) {
    return /^[\x00-\x7F]*$/.test(t);
  }
  /**
   * Checks if the string is a valid JSON format.
   * @param {string} value - The string to check.
   * @returns {boolean} `true` if the string is a valid JSON format, `false` otherwise.
   * @example
   * const result = JStr.isJson('{"name": "John", "age": 30}');
   * // result: true
   */
  static isJson(t) {
    try {
      JSON.parse(t);
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
  static isUuid(t) {
    return F(t);
  }
  /**
   * Determine if a given value is a valid ULID.
   * @param value - The value to check.
   * @returns True if the value is a valid ULID, false otherwise.
   * @example
   * const isValid = JStr.isUlid('01F3Z46YKPAWZVJMXTHWCKQWDT');
   * // isValid: true
   */
  static isUlid(t) {
    return typeof t != "string" ? !1 : /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/.test(t);
  }
  /**
   * Checks if the string is a valid URL.
   * @param {string} value - The string to check.
   * @returns {boolean} `true` if the string is a valid URL, `false` otherwise.
   * @example
   * const result = JStr.isUrl('https://www.example.com');
   * // result: true
   */
  static isUrl(t) {
    try {
      return new URL(t), !0;
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
  static kebab(t) {
    return w.snake(t, "-");
  }
  /**
   * Converts the string to snake case.
   * @returns JStr instance for method chaining.
   * @example jstr('Hello World').snake().toString(); // Returns 'hello_world'
   * @param value
   * @param delimiter
   */
  static snake(t, e = "_") {
    let r = t.replace(/[\s-]+/g, e).replace(/([A-Z])/g, (s, u) => e + u.toLowerCase());
    return r.startsWith(e) && (r = r.substring(1)), r;
  }
  /**
   * Make a string's first character lowercase.
   * @returns {string}
   * @example
   * const result = new JStr("Hello World").lcfirst();
   * // result: JStr instance with value "hello World"
   */
  static lcfirst(t) {
    return t.charAt(0).toLowerCase() + t.slice(1);
  }
  /**
   * Converts the first character of the string to uppercase.
   * @param {string} value - The string to convert.
   * @returns {string} The string with the first character in uppercase.
   * @example
   * const result = JStr.ucfirst('hello');
   * // result: 'Hello'
   */
  static ucfirst(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  /**
   * Splits the string into an array of words by uppercase characters.
   * @param {string} value - The string to split.
   * @returns {string[]} An array of words.
   * @example
   * const result = JStr.ucsplit('helloWorld');
   * // result: ['hello', 'World']
   */
  static ucsplit(t) {
    return t.split(new RegExp("(?=\\p{Lu})", "u")).filter(Boolean);
  }
  /**
   * Returns the length of the string.
   * @returns {number} The length of the string.
   * @example
   * const result = new JStr("hello world").length();
   * // result: 11
   */
  static length(t, e) {
    return t.length;
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
  static limit(t, e = 100, r = "...") {
    return t.length > e ? t.substring(0, e) + r : t;
  }
  /**
   * Converts the string to lowercase.
   * @returns JStr instance for method chaining.
   */
  static lower(t) {
    return t.toLowerCase();
  }
  /**
   * Converts the string to uppercase.
   * @returns JStr instance for method chaining.
   */
  static upper(t) {
    return t.toUpperCase();
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
  static ltrim(t, e = `\r
	\v\0`) {
    return t.replace(/^\s+/u, e);
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
  static trim(t, e = "\\s") {
    const r = e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), s = new RegExp(`^${r}+|${r}+$`, "g");
    return t.replace(s, "");
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
  static rtrim(t, e = `\r
	\v\0`) {
    return t.replace(/\s+$/u, e);
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
  static mask(t, e, r, s = null, u = "UTF-8") {
    if (e === "")
      return t;
    const l = s !== null ? t.substr(r, s) : t.substr(r);
    if (l === "")
      return t;
    const h = r < 0 ? r < -t.length ? 0 : t.length + r : r, f = t.substr(0, h), p = l.length, x = t.substr(h + p);
    return f + e.charAt(0).repeat(p) + x;
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
  static match(t, e) {
    const r = e.match(t);
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
  static isMatch(t, e) {
    const r = e.toString();
    Symbol.iterator in Object(t) ? t = Array.from(t) : t = [t];
    for (const s of t)
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
  static matchAll(t, e) {
    const r = e.matchAll(t);
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
  static password(t = 32, e = !0, r = !0, s = !0, u = !1) {
    const l = [];
    return e && l.push(..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), r && l.push(..."0123456789"), s && l.push(..."~!#$%^&*()-_.,<>?/\\{}[]|:;"), u && l.push(" "), Array.from({ length: t }, () => l[Math.floor(Math.random() * l.length)]).join("");
  }
  /**
   * Converts the string to studly case, capitalizing each word and removing separators.
   * @returns {JStr} JStr instance for method chaining.
   * @example
   * const result = new JStr("hello_world").studly().toString();
   * // result: "HelloWorld"
   */
  static studly(t) {
    return t.toLowerCase().replace(/(?:^|\s|-)+(.)/g, (e, r) => r.toUpperCase());
  }
  /**
   * Pluralize the last word of an English, studly caps case string.
   *
   * @return string
   * @param value
   */
  static pluralStudly(t) {
    const e = t.split(/(?=[A-Z])/), r = e.pop() || "";
    return e.join("") + this.plural(r);
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
  static substr(t, e, r = null, s = "UTF-8") {
    return t.substring(e, r !== null ? e + r : void 0);
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
  static substrCount(t, e, r = 0, s = null) {
    return s !== null ? t.substring(r, r + s).split(e).length - 1 : t.substring(r).split(e).length - 1;
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
  static substrReplace(t, e, r, s) {
    if (typeof t == "string" && typeof e == "string" && typeof r == "number" && (typeof s == "number" || s === void 0)) {
      const p = t.substring(0, r), x = t.substring(r + (s ?? t.length));
      return `${p}${e}${x}`;
    } else if (Array.isArray(t) && Array.isArray(e) && Array.isArray(r) && (Array.isArray(s) || s === void 0))
      return t.map((p, x) => {
        const b = r[x] ?? r[0], R = s ? s[x] ?? s[0] : p.length, v = p.substring(0, b), g = p.substring(b + R);
        return `${v}${e[x] ?? e[0]}${g}`;
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
  static swap(t, e) {
    return e.replace(
      new RegExp(Object.keys(t).map((r) => r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "g"),
      (r) => t[r]
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
  static padBoth(t, e, r = " ") {
    const s = Math.max(0, e - t.length), u = Math.floor(s / 2), l = Math.ceil(s / 2);
    return `${r.repeat(u)}${t}${r.repeat(l)}`;
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
  static padLeft(t, e, r = " ") {
    const s = Math.max(0, e - t.length);
    return `${r.repeat(s)}${t}`;
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
  static padRight(t, e, r = " ") {
    const s = Math.max(0, e - t.length);
    return `${t}${r.repeat(s)}`;
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
  static repeat(t, e) {
    return t.repeat(e);
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
  static replaceArray(t, e, r) {
    const s = r.split(t);
    let u = s.shift();
    for (const l of s)
      u += (e.shift() ?? t) + l;
    return u;
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
  static replace(t, e, r, s = !0) {
    const u = Array.isArray(t) ? t : [t], l = Array.isArray(e) ? e : [e], h = s ? "" : "i", f = new RegExp(u.map((p) => p.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), h);
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
  static replaceFirst(t, e, r) {
    const s = r.indexOf(t);
    return s !== -1 ? r.substring(0, s) + e + r.substring(s + t.length) : r;
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
  static replaceLast(t, e, r) {
    const s = r.lastIndexOf(t);
    return s !== -1 ? r.substring(0, s) + e + r.substring(s + t.length) : r;
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
  static wordCount(t, e = null) {
    const r = `[\\s${e ? e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") : ""}]+`, s = new RegExp(r, "u");
    return t.split(s).filter((u) => u.length > 0).length;
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
  static words(t, e = 100, r = "...") {
    const s = "^\\s*+(?:\\S++\\s*+){1," + e + "}", u = new RegExp(s, "u"), l = t.match(u);
    return !l || l[0].length === t.length ? t : l[0].trimEnd() + r;
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
  static wordWrap(t, e = 75, r = `
`, s = !1) {
    return t.replace(
      new RegExp(`.{1,${e}}`, "g"),
      (u, l) => s && l % e !== 0 ? u : u + r
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
  static position(t, e, r = 0, s = null) {
    return t.indexOf(e, r);
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
  static start(t, e) {
    const r = e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    return e + t.replace(new RegExp(`^(?:${r})+`, "u"), "");
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
  static startsWith(t, e) {
    return Array.isArray(e) || (e = [e]), e.some((r) => r !== "" && t.startsWith(r));
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
  static take(t, e) {
    return e < 0 ? w.substr(t, e) : w.substr(t, 0, e);
  }
  /**
   * Convert the given string to title case.
   * @param {string} value - The original string.
   * @returns {string} The resulting string in title case.
   * @example
   * const result = JStr.title("hello world");
   * // result: "Hello World"
   */
  static title(t) {
    return t.replace(/\b\w+/g, (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
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
  static slug(t, e = "-", r = null, s = { "@": "at" }) {
    t = r ? w.ascii(t) : t;
    let u = t.toLowerCase().replace(/\s+/gu, e);
    for (const [l, h] of Object.entries(s))
      u = u.replace(new RegExp(l, "gu"), e + h + e);
    return u = u.replace(/[^a-z0-9-_\s]+/gu, ""), u = u.replace(new RegExp(`[${e}\\s]+`, "gu"), e), u = u.replace(new RegExp(`^${e}+|${e}+$`, "gu"), ""), u;
  }
  /**
   * Generate a UUID (version 4).
   *
   * @return string
   */
  static uuid() {
    return q();
  }
  /**
   * Get the singular form of an English word.
   *
   * @return string
   * @param value
   */
  static singular(t) {
    return O.singular(t);
  }
  /**
   * Get the plural form of an English word.
   *
   * @return string
   * @param value
   */
  static plural(t) {
    return O.plural(t);
  }
  /**
   * Creates a new JStr instance from the provided string.
   * @param {string} str - The input string to be encapsulated in a JStr instance.
   * @returns {Stringable} - A new JStr instance containing the provided string.
   * @example
   * // Returns a JStr instance representing 'Hello, JStr!'
   * JStr.of('Hello, JStr!').toString();
   */
  static of(t) {
    return new L(t);
  }
}
const n = w;
export {
  n as default
};
