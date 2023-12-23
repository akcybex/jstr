# JSTR

[![NPM Version](https://img.shields.io/npm/v/@akcybex/jstr.svg)](https://www.npmjs.com/package/@akcybex/jstr)
[![NPM Downloads](https://img.shields.io/npm/dm/@akcybex/jstr.svg)](https://www.npmjs.com/package/@akcybex/jstr)
[![File Size](https://img.shields.io/github/size/akcybex/jstr/dist/jstr.es.js)](https://github.com/akcybex/jstr)

> `@akcybex/jsr` is a JavaScript library inspired
> by [Laravel 'Strings'](https://laravel.com/docs/10.x/strings) offering a chainable API for
> streamlined string manipulation and facilitating common string operations in javascript with enhanced expressiveness.

## Installation

### Using npm

You can install `@akcybex/jsr` using npm:

```bash
npm install @akcybex/jsr
```

### Using Yarn

Alternatively, you can use Yarn to add the package:

```bash
yarn add @akcybex/jsr
```

## Usage in Node.js

After installing, you can use `@akcybex/jsr` in your Node.js application:

```javascript
import JStr from '@akcybex/jsr';

const result = JStr.of('hello').repeat(3).upper().toString();
console.log(result); // Outputs: 'HELLOHELLOHELLO'
```

## Usage with CDN

For browser-based projects, you can use the CDN link:

```html

<script src="https://unpkg.com/@akcybex/jstr@x.x.x/dist/jstr.umd.js"></script>
```

After including the script, `jstr` will be available globally:

```html

<script>
    const result = jstr('hello').repeat(3).upper().toString();
    console.log(result); // Outputs: 'HELLOHELLOHELLO'
</script>
```

## Available Methods

### Strings
A string is a fundamental data type in programming used to represent a sequence of characters. It stores and manipulates text data, and string operations are typically performed using methods or functions provided by the programming language or relevant libraries. Common operations include concatenation, searching, replacing, and formatting strings.

| JSTR String Methods   | Description                                                                                         | Documentation Link                      |
|-----------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------|
| `JStr.after`          | Returns the portion of the string that comes after a specified substring.                           | [Documentation](docs/After.md)          |
| `JStr.afterLast`      | Returns the portion of the string that comes after the last occurrence of a specified substring.    | [Documentation](docs/AfterLast.md)      |
| `JStr.ascii`          | Returns the ASCII representation of the string.                                                     | [Documentation](docs/Ascii.md)          |
| `JStr.before`         | Returns the portion of the string that comes before a specified substring.                          | [Documentation](docs/Before.md)         |
| `JStr.beforeLast`     | Returns the portion of the string that comes before the last occurrence of a specified substring.   | [Documentation](docs/BeforeLast.md)     |
| `JStr.between`        | Returns the portion of the string that is between two specified substrings.                         | [Documentation](docs/Between.md)        |
| `JStr.betweenFirst`   | Returns the portion of the string that is between the first occurrence of two specified substrings. | [Documentation](docs/BetweenFirst.md)   |
| `JStr.camel`          | Converts the string to camel case.                                                                  | [Documentation](docs/Camel.md)          |
| `JStr.charAt`         | Returns the character at the specified position in the string.                                      | [Documentation](docs/CharAt.md)         |
| `JStr.contains`       | Checks if the string contains a specified substring.                                                | [Documentation](docs/Contains.md)       |
| `JStr.containsAll`    | Checks if the string contains all of the specified substrings.                                      | [Documentation](docs/ContainsAll.md)    |
| `JStr.endsWith`       | Checks if the string ends with a specified suffix.                                                  | [Documentation](docs/EndsWith.md)       |
| `JStr.excerpt`        | Returns an excerpt from the string with a specified length.                                         | [Documentation](docs/Excerpt.md)        |
| `JStr.finish`         | Ensures that the string ends with a specified suffix.                                               | [Documentation](docs/Finish.md)         |
| `JStr.headline`       | Converts the string to a headline format.                                                           | [Documentation](docs/Headline.md)       |
| `JStr.inlineMarkdown` | Converts the string to inline Markdown format.                                                      | [Documentation](docs/InlineMarkdown.md) |
| `JStr.is`             | Checks if the string is equal to a specified value.                                                 | [Documentation](docs/Is.md)             |
| `JStr.isAscii`        | Checks if the string contains only ASCII characters.                                                | [Documentation](docs/IsAscii.md)        |
| `JStr.isEmpty`        | Checks if the string is empty.                                                                      | [Documentation](docs/IsEmpty.md)        |
| `JStr.isNotEmpty`     | Checks if the string is not empty.                                                                  | [Documentation](docs/IsNotEmpty.md)     |
| `JStr.isJson`         | Checks if the string is a valid JSON format.                                                        | [Documentation](docs/IsJson.md)         |
| `JStr.isUlid`         | Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).    | [Documentation](docs/IsUlid.md)         |
| `JStr.isUrl`          | Checks if the string is a valid URL.                                                                | [Documentation](docs/IsUrl.md)          |
| `JStr.isUuid`         | Checks if the string is a valid UUID (Universally Unique Identifier).                               | [Documentation](docs/IsUuid.md)         |
| `JStr.kebab`          | Converts the string to kebab case.                                                                  | [Documentation](docs/Kebab.md)          |
| `JStr.lcfirst`        | Converts the first character of the string to lowercase.                                            | [Documentation](docs/Lcfirst.md)        |
| `JStr.length`         | Returns the length of the string.                                                                   | [Documentation](docs/Length.md)         |
| `JStr.limit`          | Limits the length of the string to a specified number of characters.                                | [Documentation](docs/Limit.md)          |
| `JStr.lower`          | Converts the string to lowercase.                                                                   | [Documentation](docs/Lower.md)          |
| `JStr.ltrim`          | Removes whitespace from the beginning of the string.                                                | [Documentation](docs/Ltrim.md)          |
| `JStr.markdown`       | Converts the string to Markdown format.                                                             | [Documentation](docs/Markdown.md)       |
| `JStr.mask`           | Masks part of the string with a specified character.                                                | [Documentation](docs/Mask.md)           |
| `JStr.orderedUuid`    | Generates an ordered UUID (Universally Unique Identifier).                                          | [Documentation](docs/OrderedUuid.md)    |
| `JStr.padBoth`        | Pads the string on both sides with a specified character to a specified length.                     | [Documentation](docs/PadBoth.md)        |
| `JStr.padLeft`        | Pads the string on the left side with a specified character to a specified length.                  | [Documentation](docs/PadLeft.md)        |
| `JStr.padRight`       | Pads the string on the right side with a specified character to a specified length.                 | [Documentation](docs/PadRight.md)       |
| `JStr.password`       | Generates a password string.                                                                        | [Documentation](docs/Password.md)       |
| `JStr.plural`         | Converts the string to plural form.                                                                 | [Documentation](docs/Plural.md)         |
| `JStr.pluralStudly`   | Converts the string to plural studly form.                                                          | [Documentation](docs/PluralStudly.md)   |
| `JStr.position`       | Finds the position of the first occurrence of a substring in the string.                            | [Documentation](docs/Position.md)       |
| `JStr.random`         | Generates a random string.                                                                          | [Documentation](docs/Random.md)         |
| `JStr.remove`         | Removes a specified substring from the string.                                                      | [Documentation](docs/Remove.md)         |
| `JStr.repeat`         | Repeats the string a specified number of times.                                                     | [Documentation](docs/Repeat.md)         |
| `JStr.replace`        | Replaces occurrences of a specified substring with another substring.                               | [Documentation](docs/Replace.md)        |
| `JStr.replaceArray`   | Replaces occurrences of specified substrings with corresponding replacements.                       | [Documentation](docs/ReplaceArray.md)   |
| `JStr.replaceFirst`   | Replaces the first occurrence of a specified substring with another substring.                      | [Documentation](docs/ReplaceFirst.md)   |
| `JStr.replaceLast`    | Replaces the last occurrence of a specified substring with another substring.                       | [Documentation](docs/ReplaceLast.md)    |
| `JStr.replaceMatches` | Replaces occurrences of a specified pattern with a callback result.                                 | [Documentation](docs/ReplaceMatches.md) |
| `JStr.replaceStart`   | Replaces the beginning of the string with a specified substring.                                    | [Documentation](docs/ReplaceStart.md)   |
| `JStr.replaceEnd`     | Replaces the end of the string with a specified substring.                                          | [Documentation](docs/ReplaceEnd.md)     |
| `JStr.reverse`        | Reverses the characters of the string.                                                              | [Documentation](docs/Reverse.md)        |
| `JStr.singular`       | Converts the string to singular form.                                                               | [Documentation](docs/Singular.md)       |
| `JStr.slug`           | Converts the string to a URL-friendly slug.                                                         | [Documentation](docs/Slug.md)           |
| `JStr.snake`          | Converts the string to snake case.                                                                  | [Documentation](docs/Snake.md)          |
| `JStr.squish`         | Reduces multiple consecutive whitespace characters to a single space.                               | [Documentation](docs/Squish.md)         |
| `JStr.start`          | Adds a specified prefix to the beginning of the string.                                             | [Documentation](docs/Start.md)          |
| `JStr.startsWith`     | Checks if the string starts with a specified prefix.                                                | [Documentation](docs/StartsWith.md)     |
| `JStr.studly`         | Converts the string to studly case.                                                                 | [Documentation](docs/Studly.md)         |
| `JStr.substr`         | Returns a substring of the string starting from a specified position.                               | [Documentation](docs/Substr.md)         |
| `JStr.substrCount`    | Counts the number of occurrences of a substring in the string.                                      | [Documentation](docs/SubstrCount.md)    |
| `JStr.substrReplace`  | Replaces a portion of the string with a specified substring.                                        | [Documentation](docs/SubstrReplace.md)  |
| `JStr.swap`           | Swaps the case of each character in the string.                                                     | [Documentation](docs/Swap.md)           |
| `JStr.take`           | Returns the first n characters from the string.                                                     | [Documentation](docs/Take.md)           |
| `JStr.title`          | Converts the first character of each word in the string to uppercase.                               | [Documentation](docs/Title.md)          |
| `JStr.toHtmlString`   | Converts the string to its HTML-encoded representation.                                             | [Documentation](docs/ToHtmlString.md)   |
| `JStr.ucfirst`        | Converts the first character of the string to uppercase.                                            | [Documentation](docs/Ucfirst.md)        |
| `JStr.ucsplit`        | Splits the string into an array of words.                                                           | [Documentation](docs/Ucsplit.md)        |
| `JStr.upper`          | Converts the string to uppercase.                                                                   | [Documentation](docs/Upper.md)          |
| `JStr.ulid`           | Generates a ULID (Universally Unique Lexicographically Sortable Identifier).                        | [Documentation](docs/Ulid.md)           |
| `JStr.uuid`           | Generates a UUID (Universally Unique Identifier).                                                   | [Documentation](docs/Uuid.md)           |
| `JStr.wordCount`      | Counts the number of words in the string.                                                           | [Documentation](docs/WordCount.md)      |
| `JStr.wordWrap`       | Wraps the string at a specified length with a specified line ending.                                | [Documentation](docs/WordWrap.md)       |
| `JStr.words`          | Splits the string into an array of words.                                                           | [Documentation](docs/Words.md)          |
| `JStr.wrap`           | Wraps the string at a specified length with a specified string.                                     | [Documentation](docs/Wrap.md)           |

## Fluent String
Fluent strings provide a more fluent, object-oriented interface for working with string values. This paradigm allows you to chain multiple string operations together, creating a more readable syntax compared to traditional string operations. Each method call returns a new fluent string object, enabling you to seamlessly chain operations while maintaining clarity and conciseness in your code.

| JSTR Fluent String Methods | Description                                                                                         | Documentation Link                       |
|----------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------|
| `after`                    | Returns the portion of the string that comes after a specified substring.                           | [Documentation](docs/After.md)           |
| `afterLast`                | Returns the portion of the string that comes after the last occurrence of a specified substring.    | [Documentation](docs/AfterLast.md)       |
| `append`                   | Appends a string or an array of strings to the end of the current string.                           | [Documentation](docs/Append.md)          |
| `ascii`                    | Returns the ASCII representation of the string.                                                     | [Documentation](docs/Ascii.md)           |
| `basename`                 | Returns the trailing name component of a path.                                                      | [Documentation](docs/Basename.md)        |
| `before`                   | Returns the portion of the string that comes before a specified substring.                          | [Documentation](docs/Before.md)          |
| `beforeLast`               | Returns the portion of the string that comes before the last occurrence of a specified substring.   | [Documentation](docs/BeforeLast.md)      |
| `between`                  | Returns the portion of the string that is between two specified substrings.                         | [Documentation](docs/Between.md)         |
| `betweenFirst`             | Returns the portion of the string that is between the first occurrence of two specified substrings. | [Documentation](docs/BetweenFirst.md)    |
| `camel`                    | Converts the string to camel case.                                                                  | [Documentation](docs/Camel.md)           |
| `charAt`                   | Returns the character at the specified position in the string.                                      | [Documentation](docs/CharAt.md)          |
| `classBasename`            | Returns the class basename of a fully qualified class name.                                         | [Documentation](docs/ClassBasename.md)   |
| `contains`                 | Checks if the string contains a specified substring.                                                | [Documentation](docs/Contains.md)        |
| `containsAll`              | Checks if the string contains all of the specified substrings.                                      | [Documentation](docs/ContainsAll.md)     |
| `dirname`                  | Returns the directory name component of a path.                                                     | [Documentation](docs/Dirname.md)         |
| `endsWith`                 | Checks if the string ends with a specified suffix.                                                  | [Documentation](docs/EndsWith.md)        |
| `excerpt`                  | Returns an excerpt from the string with a specified length.                                         | [Documentation](docs/Excerpt.md)         |
| `exactly`                  | Checks if the string is exactly equal to a specified value.                                         | [Documentation](docs/Exactly.md)         |
| `explode`                  | Splits the string by a specified delimiter and returns an array of the parts.                       | [Documentation](docs/Explode.md)         |
| `finish`                   | Ensures that the string ends with a specified suffix.                                               | [Documentation](docs/Finish.md)          |
| `headline`                 | Converts the string to a headline format.                                                           | [Documentation](docs/Headline.md)        |
| `inlineMarkdown`           | Converts the string to inline Markdown format.                                                      | [Documentation](docs/InlineMarkdown.md)  |
| `is`                       | Checks if the string is equal to a specified value.                                                 | [Documentation](docs/Is.md)              |
| `isAscii`                  | Checks if the string contains only ASCII characters.                                                | [Documentation](docs/IsAscii.md)         |
| `isEmpty`                  | Checks if the string is empty.                                                                      | [Documentation](docs/IsEmpty.md)         |
| `isNotEmpty`               | Checks if the string is not empty.                                                                  | [Documentation](docs/IsNotEmpty.md)      |
| `isJson`                   | Checks if the string is a valid JSON format.                                                        | [Documentation](docs/IsJson.md)          |
| `isUlid`                   | Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).    | [Documentation](docs/IsUlid.md)          |
| `isUrl`                    | Checks if the string is a valid URL.                                                                | [Documentation](docs/IsUrl.md)           |
| `isUuid`                   | Checks if the string is a valid UUID (Universally Unique Identifier).                               | [Documentation](docs/IsUuid.md)          |
| `kebab`                    | Converts the string to kebab case.                                                                  | [Documentation](docs/Kebab.md)           |
| `lcfirst`                  | Converts the first character of the string to lowercase.                                            | [Documentation](docs/Lcfirst.md)         |
| `length`                   | Returns the length of the string.                                                                   | [Documentation](docs/Length.md)          |
| `limit`                    | Limits the length of the string to a specified number of characters.                                | [Documentation](docs/Limit.md)           |
| `lower`                    | Converts the string to lowercase.                                                                   | [Documentation](docs/Lower.md)           |
| `ltrim`                    | Removes whitespace from the beginning of the string.                                                | [Documentation](docs/Ltrim.md)           |
| `markdown`                 | Converts the string to Markdown format.                                                             | [Documentation](docs/Markdown.md)        |
| `mask`                     | Masks part of the string with a specified character.                                                | [Documentation](docs/Mask.md)            |
| `match`                    | Performs a regular expression match on the string.                                                  | [Documentation](docs/Match.md)           |
| `matchAll`                 | Performs a global regular expression match on the string.                                           | [Documentation](docs/MatchAll.md)        |
| `isMatch`                  | Checks if the string matches a specified pattern.                                                   | [Documentation](docs/IsMatch.md)         |
| `newLine`                  | Replaces each occurrence of a newline character with a specified string.                            | [Documentation](docs/NewLine.md)         |
| `padBoth`                  | Pads the string on both sides with a specified character to a specified length.                     | [Documentation](docs/PadBoth.md)         |
| `padLeft`                  | Pads the string on the left side with a specified character to a specified length.                  | [Documentation](docs/PadLeft.md)         |
| `padRight`                 | Pads the string on the right side with a specified character to a specified length.                 | [Documentation](docs/PadRight.md)        |
| `pipe`                     | Passes the string to a callback and returns the result.                                             | [Documentation](docs/Pipe.md)            |
| `plural`                   | Converts the string to plural form.                                                                 | [Documentation](docs/Plural.md)          |
| `position`                 | Finds the position of the first occurrence of a substring in the string.                            | [Documentation](docs/Position.md)        |
| `prepend`                  | Prepends a string or an array of strings to the beginning of the current string.                    | [Documentation](docs/Prepend.md)         |
| `remove`                   | Removes a specified substring from the string.                                                      | [Documentation](docs/Remove.md)          |
| `repeat`                   | Repeats the string a specified number of times.                                                     | [Documentation](docs/Repeat.md)          |
| `replace`                  | Replaces occurrences of a specified substring with another substring.                               | [Documentation](docs/Replace.md)         |
| `replaceArray`             | Replaces occurrences of specified substrings with corresponding replacements.                       | [Documentation](docs/ReplaceArray.md)    |
| `replaceFirst`             | Replaces the first occurrence of a specified substring with another substring.                      | [Documentation](docs/ReplaceFirst.md)    |
| `replaceLast`              | Replaces the last occurrence of a specified substring with another substring.                       | [Documentation](docs/ReplaceLast.md)     |
| `replaceMatches`           | Replaces occurrences of a specified pattern with a callback result.                                 | [Documentation](docs/ReplaceMatches.md)  |
| `replaceStart`             | Replaces the beginning of the string with a specified substring.                                    | [Documentation](docs/ReplaceStart.md)    |
| `replaceEnd`               | Replaces the end of the string with a specified substring.                                          | [Documentation](docs/ReplaceEnd.md)      |
| `rtrim`                    | Removes whitespace from the end of the string.                                                      | [Documentation](docs/Rtrim.md)           |
| `scan`                     | Returns an array of all occurrences of a regular expression pattern in the string.                  | [Documentation](docs/Scan.md)            |
| `singular`                 | Converts the string to singular form.                                                               | [Documentation](docs/Singular.md)        |
| `slug`                     | Converts the string to a URL-friendly slug.                                                         | [Documentation](docs/Slug.md)            |
| `snake`                    | Converts the string to snake case.                                                                  | [Documentation](docs/Snake.md)           |
| `split`                    | Splits the string by a specified delimiter and returns an array of the parts.                       | [Documentation](docs/Split.md)           |
| `squish`                   | Reduces multiple consecutive whitespace characters to a single space.                               | [Documentation](docs/Squish.md)          |
| `start`                    | Adds a specified prefix to the beginning of the string.                                             | [Documentation](docs/Start.md)           |
| `startsWith`               | Checks if the string starts with a specified prefix.                                                | [Documentation](docs/StartsWith.md)      |
| `studly`                   | Converts the string to studly case.                                                                 | [Documentation](docs/Studly.md)          |
| `substr`                   | Returns a substring of the string starting from a specified position.                               | [Documentation](docs/Substr.md)          |
| `substrReplace`            | Replaces a portion of the string with a specified substring.                                        | [Documentation](docs/SubstrReplace.md)   |
| `swap`                     | Swaps the case of each character in the string.                                                     | [Documentation](docs/Swap.md)            |
| `take`                     | Returns the first n characters from the string.                                                     | [Documentation](docs/Take.md)            |
| `tap`                      | Passes the string to a callback and returns the string.                                             | [Documentation](docs/Tap.md)             |
| `test`                     | Performs a regular expression match on the string and returns a boolean.                            | [Documentation](docs/Test.md)            |
| `title`                    | Converts the first character of each word in the string to uppercase.                               | [Documentation](docs/Title.md)           |
| `trim`                     | Removes whitespace from the beginning and end of the string.                                        | [Documentation](docs/Trim.md)            |
| `ucfirst`                  | Converts the first character of the string to uppercase.                                            | [Documentation](docs/Ucfirst.md)         |
| `ucsplit`                  | Splits the string into an array of words.                                                           | [Documentation](docs/Ucsplit.md)         |
| `upper`                    | Converts the string to uppercase.                                                                   | [Documentation](docs/Upper.md)           |
| `when`                     | Executes a callback if a given condition is true.                                                   | [Documentation](docs/When.md)            |
| `whenContains`             | Executes a callback if the string contains a specified substring.                                   | [Documentation](docs/WhenContains.md)    |
| `whenContainsAll`          | Executes a callback if the string contains all of the specified substrings.                         | [Documentation](docs/WhenContainsAll.md) |
| `whenEmpty`                | Executes a callback if the string is empty.                                                         | [Documentation](docs/WhenEmpty.md)       |
| `whenNotEmpty`             | Executes a callback if the string is not empty.                                                     | [Documentation](docs/WhenNotEmpty.md)    |
| `whenStartsWith`           | Executes a callback if the string starts with a specified prefix.                                   | [Documentation](docs/WhenStartsWith.md)  |
| `whenEndsWith`             | Executes a callback if the string ends with a specified suffix.                                     | [Documentation](docs/WhenEndsWith.md)    |
| `whenExactly`              | Executes a callback if the string is exactly equal to a specified value.                            | [Documentation](docs/WhenExactly.md)     |
| `whenNotExactly`           | Executes a callback if the string is not                                                            | [Documentation](docs/WhenNotExactly.md)  |
| `whenIs`                   | Executes a callback if the string is equal to a specified value.                                    | [Documentation](docs/WhenIs.md)          |
| `whenIsAscii`              | Executes a callback if the string contains only ASCII characters.                                   | [Documentation](docs/WhenIsAscii.md)     |
| `whenIsUlid`               | Executes a callback if the string is a valid ULID.                                                  | [Documentation](docs/WhenIsUlid.md)      |
| `whenIsUuid`               | Executes a callback if the string is a valid UUID.                                                  | [Documentation](docs/WhenIsUuid.md)      |
| `whenTest`                 | Executes a callback if a regular expression test on the string is true.                             | [Documentation](docs/WhenTest.md)        |
| `wordCount`                | Counts the number of words in the string.                                                           | [Documentation](docs/WordCount.md)       |
| `words`                    | Splits the string into an array of words.                                                           | [Documentation](docs/Words.md)           |

## Contributing

Contributions to `@akcybex/jsr` are welcome. Please refer to the contributing guidelines for more information.

## License

This project is licensed under the [MIT License](LICENSE).
