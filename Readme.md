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
    const result = JStr.of('hello').repeat(3).upper().toString();
    console.log(result); // Outputs: 'HELLOHELLOHELLO'
</script>
```

## Available Methods

> [!NOTE]  
> Methods with ✔ mark are included in the library and tested as well.

### Strings

A string is a fundamental data type in programming used to represent a sequence of characters. It stores and manipulates
text data, and string operations are typically performed using methods or functions provided by the programming language
or relevant libraries. Common operations include concatenation, searching, replacing, and formatting strings.

| #  | JSTR String Methods    | Description                                                                                         | Documentation Link                      |
|----|------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------|
| 1  | ✔ `JStr.after`         | Returns the portion of the string that comes after a specified substring.                           | [Documentation](docs/After.md)          |
| 2  | ✔ `JStr.afterLast`     | Returns the portion of the string that comes after the last occurrence of a specified substring.    | [Documentation](docs/AfterLast.md)      |
| 3  | ✔ `JStr.ascii`         | Returns the ASCII representation of the string.                                                     | [Documentation](docs/Ascii.md)          |
| 4  | ✔ `JStr.before`        | Returns the portion of the string that comes before a specified substring.                          | [Documentation](docs/Before.md)         |
| 5  | ✔ `JStr.beforeLast`    | Returns the portion of the string that comes before the last occurrence of a specified substring.   | [Documentation](docs/BeforeLast.md)     |
| 6  | ✔ `JStr.between`       | Returns the portion of the string that is between two specified substrings.                         | [Documentation](docs/Between.md)        |
| 7  | ✔ `JStr.betweenFirst`  | Returns the portion of the string that is between the first occurrence of two specified substrings. | [Documentation](docs/BetweenFirst.md)   |
| 8  | ✔ `JStr.camel`         | Converts the string to camel case.                                                                  | [Documentation](docs/Camel.md)          |
| 9  | ✔ `JStr.charAt`        | Returns the character at the specified position in the string.                                      | [Documentation](docs/CharAt.md)         |
| 10 | ✔ `JStr.contains`      | Checks if the string contains a specified substring.                                                | [Documentation](docs/Contains.md)       |
| 11 | ✔ `JStr.containsAll`   | Checks if the string contains all of the specified substrings.                                      | [Documentation](docs/ContainsAll.md)    |
| 12 | ✔ `JStr.endsWith`      | Checks if the string ends with a specified suffix.                                                  | [Documentation](docs/EndsWith.md)       |
| 13 | ✔ `JStr.excerpt`       | Returns an excerpt from the string with a specified length.                                         | [Documentation](docs/Excerpt.md)        |
| 14 | ✔ `JStr.finish`        | Ensures that the string ends with a specified suffix.                                               | [Documentation](docs/Finish.md)         |
| 15 | ✔ `JStr.headline`      | Converts the string to a headline format.                                                           | [Documentation](docs/Headline.md)       |
| 16 | `JStr.inlineMarkdown`  | Converts the string to inline Markdown format.                                                      | [Documentation](docs/InlineMarkdown.md) |
| 17 | ✔ `JStr.is`            | Checks if the string is equal to a specified value.                                                 | [Documentation](docs/Is.md)             |
| 18 | ✔ `JStr.isAscii`       | Checks if the string contains only ASCII characters.                                                | [Documentation](docs/IsAscii.md)        |
| 21 | ✔ `JStr.isJson`        | Checks if the string is a valid JSON format.                                                        | [Documentation](docs/IsJson.md)         |
| 22 | ✔ `JStr.isUlid`        | Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).    | [Documentation](docs/IsUlid.md)         |
| 23 | ✔ `JStr.isUrl`         | Checks if the string is a valid URL.                                                                | [Documentation](docs/IsUrl.md)          |
| 24 | ✔ `JStr.isUuid`        | Checks if the string is a valid UUID (Universally Unique Identifier).                               | [Documentation](docs/IsUuid.md)         |
| 25 | ✔ `JStr.kebab`         | Converts the string to kebab case.                                                                  | [Documentation](docs/Kebab.md)          |
| 26 | ✔ `JStr.lcfirst`       | Converts the first character of the string to lowercase.                                            | [Documentation](docs/Lcfirst.md)        |
| 27 | ✔ `JStr.length`        | Returns the length of the string.                                                                   | [Documentation](docs/Length.md)         |
| 28 | ✔ `JStr.limit`         | Limits the length of the string to a specified number of characters.                                | [Documentation](docs/Limit.md)          |
| 29 | ✔ `JStr.lower`         | Converts the string to lowercase.                                                                   | [Documentation](docs/Lower.md)          |
| 30 | ✔ `JStr.ltrim`         | Removes whitespace from the beginning of the string.                                                | [Documentation](docs/Ltrim.md)          |
| 31 | `JStr.markdown`        | Converts the string to Markdown format.                                                             | [Documentation](docs/Markdown.md)       |
| 32 | ✔ `JStr.mask`          | Masks part of the string with a specified character.                                                | [Documentation](docs/Mask.md)           |
| 39 | ✔ `JStr.match`         | Performs a regular expression match on the string.                                                  | [Documentation](docs/Match.md)          |
| 40 | ✔ `JStr.matchAll`      | Performs a global regular expression match on the string.                                           | [Documentation](docs/MatchAll.md)       |
| 41 | ✔ `JStr.isMatch`       | Checks if the string matches a specified pattern.                                                   | [Documentation](docs/IsMatch.md)        |
| 33 | `JStr.orderedUuid`     | Generates an ordered UUID (Universally Unique Identifier).                                          | [Documentation](docs/OrderedUuid.md)    |
| 34 | ✔ `JStr.padBoth`       | Pads the string on both sides with a specified character to a specified length.                     | [Documentation](docs/PadBoth.md)        |
| 35 | ✔ `JStr.padLeft`       | Pads the string on the left side with a specified character to a specified length.                  | [Documentation](docs/PadLeft.md)        |
| 36 | ✔ `JStr.padRight`      | Pads the string on the right side with a specified character to a specified length.                 | [Documentation](docs/PadRight.md)       |
| 37 | ✔ `JStr.password`      | Generates a password string.                                                                        | [Documentation](docs/Password.md)       |
| 38 | `JStr.plural`          | Converts the string to plural form.                                                                 | [Documentation](docs/Plural.md)         |
| 39 | `JStr.pluralStudly`    | Converts the string to plural studly form.                                                          | [Documentation](docs/PluralStudly.md)   |
| 40 | ✔ `JStr.position`      | Finds the position of the first occurrence of a substring in the string.                            | [Documentation](docs/Position.md)       |
| 41 | `JStr.random`          | Generates a random string.                                                                          | [Documentation](docs/Random.md)         |
| 42 | `JStr.remove`          | Removes a specified substring from the string.                                                      | [Documentation](docs/Remove.md)         |
| 43 | ✔ `JStr.repeat`        | Repeats the string a specified number of times.                                                     | [Documentation](docs/Repeat.md)         |
| 44 | ✔ `JStr.replace`       | Replaces occurrences of a specified substring with another substring.                               | [Documentation](docs/Replace.md)        |
| 45 | ✔ `JStr.replaceArray`  | Replaces occurrences of specified substrings with corresponding replacements.                       | [Documentation](docs/ReplaceArray.md)   |
| 46 | ✔ `JStr.replaceFirst`  | Replaces the first occurrence of a specified substring with another substring.                      | [Documentation](docs/ReplaceFirst.md)   |
| 47 | ✔ `JStr.replaceLast`   | Replaces the last occurrence of a specified substring with another substring.                       | [Documentation](docs/ReplaceLast.md)    |
| 59 | ✔ `JStr.rtrim`         | Removes whitespace from the end of the string.                                                      | [Documentation](docs/Rtrim.md)          |
| 51 | `JStr.reverse`         | Reverses the characters of the string.                                                              | [Documentation](docs/Reverse.md)        |
| 52 | `JStr.singular`        | Converts the string to singular form.                                                               | [Documentation](docs/Singular.md)       |
| 53 | ✔ `JStr.slug`          | Converts the string to a URL-friendly slug.                                                         | [Documentation](docs/Slug.md)           |
| 54 | ✔ `JStr.snake`         | Converts the string to snake case.                                                                  | [Documentation](docs/Snake.md)          |
| 55 | `JStr.squish`          | Reduces multiple consecutive whitespace characters to a single space.                               | [Documentation](docs/Squish.md)         |
| 56 | ✔ `JStr.start`         | Adds a specified prefix to the beginning of the string.                                             | [Documentation](docs/Start.md)          |
| 57 | ✔ `JStr.startsWith`    | Checks if the string starts with a specified prefix.                                                | [Documentation](docs/StartsWith.md)     |
| 58 | ✔ `JStr.studly`        | Converts the string to studly case.                                                                 | [Documentation](docs/Studly.md)         |
| 59 | ✔ `JStr.substr`        | Returns a substring of the string starting from a specified position.                               | [Documentation](docs/Substr.md)         |
| 60 | ✔ `JStr.substrCount`   | Counts the number of occurrences of a substring in the string.                                      | [Documentation](docs/SubstrCount.md)    |
| 61 | ✔ `JStr.substrReplace` | Replaces a portion of the string with a specified substring.                                        | [Documentation](docs/SubstrReplace.md)  |
| 62 | ✔ `JStr.swap`          | Swaps the case of each character in the string.                                                     | [Documentation](docs/Swap.md)           |
| 63 | ✔ `JStr.take`          | Returns the first n characters from the string.                                                     | [Documentation](docs/Take.md)           |
| 64 | ✔ `JStr.title`         | Converts the first character of each word in the string to uppercase.                               | [Documentation](docs/Title.md)          |
| 76 | ✔ `JStr.trim`          | Removes whitespace from the beginning and end of the string.                                        | [Documentation](docs/Trim.md)           |
| 65 | `JStr.toHtmlString`    | Converts the string to its HTML-encoded representation.                                             | [Documentation](docs/ToHtmlString.md)   |
| 66 | ✔ `JStr.ucfirst`       | Converts the first character of the string to uppercase.                                            | [Documentation](docs/Ucfirst.md)        |
| 67 | ✔ `JStr.ucsplit`       | Splits the string into an array of words.                                                           | [Documentation](docs/Ucsplit.md)        |
| 68 | ✔ `JStr.upper`         | Converts the string to uppercase.                                                                   | [Documentation](docs/Upper.md)          |
| 69 | `JStr.ulid`            | Generates a ULID (Universally Unique Lexicographically Sortable Identifier).                        | [Documentation](docs/Ulid.md)           |
| 70 | `JStr.uuid`            | Generates a UUID (Universally Unique Identifier).                                                   | [Documentation](docs/Uuid.md)           |
| 71 | ✔ `JStr.wordCount`     | Counts the number of words in the string.                                                           | [Documentation](docs/WordCount.md)      |
| 72 | ✔ `JStr.wordWrap`      | Wraps the string at a specified length with a specified line ending.                                | [Documentation](docs/WordWrap.md)       |
| 73 | ✔ `JStr.words`         | Splits the string into an array of words.                                                           | [Documentation](docs/Words.md)          |
| 74 | ✔ `JStr.wrap`          | Wraps the string at a specified length with a specified string.                                     | [Documentation](docs/Wrap.md)           |

## Fluent String

Fluent strings provide a more fluent, object-oriented interface for working with string values. This paradigm allows you
to chain multiple string operations together, creating a more readable syntax compared to traditional string operations.
Each method call returns a new fluent string object, enabling you to seamlessly chain operations while maintaining
clarity and conciseness in your code.

| #  | JSTR Fluent String Methods | Description                                                                                         | Documentation Link                       |
|----|----------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------|
| 1  | ✔ `after`                  | Returns the portion of the string that comes after a specified substring.                           | [Documentation](docs/After.md)           |
| 2  | ✔ `afterLast`              | Returns the portion of the string that comes after the last occurrence of a specified substring.    | [Documentation](docs/AfterLast.md)       |
| 3  | ✔ `append`                 | Appends a string or an array of strings to the end of the current string.                           | [Documentation](docs/Append.md)          |
| 4  | ✔ `ascii`                  | Returns the ASCII representation of the string.                                                     | [Documentation](docs/Ascii.md)           |
| 5  | `basename`                 | Returns the trailing name component of a path.                                                      | [Documentation](docs/Basename.md)        |
| 6  | ✔ `before`                 | Returns the portion of the string that comes before a specified substring.                          | [Documentation](docs/Before.md)          |
| 7  | ✔ `beforeLast`             | Returns the portion of the string that comes before the last occurrence of a specified substring.   | [Documentation](docs/BeforeLast.md)      |
| 8  | ✔ `between`                | Returns the portion of the string that is between two specified substrings.                         | [Documentation](docs/Between.md)         |
| 9  | ✔ `betweenFirst`           | Returns the portion of the string that is between the first occurrence of two specified substrings. | [Documentation](docs/BetweenFirst.md)    |
| 10 | ✔ `camel`                  | Converts the string to camel case.                                                                  | [Documentation](docs/Camel.md)           |
| 11 | ✔ `charAt`                 | Returns the character at the specified position in the string.                                      | [Documentation](docs/CharAt.md)          |
| 12 | `classBasename`            | Returns the class basename of a fully qualified class name.                                         | [Documentation](docs/ClassBasename.md)   |
| 13 | ✔ `contains`               | Checks if the string contains a specified substring.                                                | [Documentation](docs/Contains.md)        |
| 14 | ✔ `containsAll`            | Checks if the string contains all of the specified substrings.                                      | [Documentation](docs/ContainsAll.md)     |
| 15 | `dirname`                  | Returns the directory name component of a path.                                                     | [Documentation](docs/Dirname.md)         |
| 16 | ✔ `endsWith`               | Checks if the string ends with a specified suffix.                                                  | [Documentation](docs/EndsWith.md)        |
| 17 | ✔ `excerpt`                | Returns an excerpt from the string with a specified length.                                         | [Documentation](docs/Excerpt.md)         |
| 18 | ✔ `exactly`                | Checks if the string is exactly equal to a specified value.                                         | [Documentation](docs/Exactly.md)         |
| 19 | ✔ `explode`                | Splits the string by a specified delimiter and returns an array of the parts.                       | [Documentation](docs/Explode.md)         |
| 20 | ✔ `finish`                 | Ensures that the string ends with a specified suffix.                                               | [Documentation](docs/Finish.md)          |
| 21 | ✔ `headline`               | Converts the string to a headline format.                                                           | [Documentation](docs/Headline.md)        |
| 22 | `inlineMarkdown`           | Converts the string to inline Markdown format.                                                      | [Documentation](docs/InlineMarkdown.md)  |
| 23 | ✔ `is`                     | Checks if the string is equal to a specified value.                                                 | [Documentation](docs/Is.md)              |
| 24 | ✔ `isAscii`                | Checks if the string contains only ASCII characters.                                                | [Documentation](docs/IsAscii.md)         |
| 25 | ✔ `isEmpty`                | Checks if the string is empty.                                                                      | [Documentation](docs/IsEmpty.md)         |
| 26 | ✔ `isNotEmpty`             | Checks if the string is not empty.                                                                  | [Documentation](docs/IsNotEmpty.md)      |
| 27 | ✔ `isJson`                 | Checks if the string is a valid JSON format.                                                        | [Documentation](docs/IsJson.md)          |
| 28 | ✔ `isUlid`                 | Checks if the string is a valid ULID (Universally Unique Lexicographically Sortable Identifier).    | [Documentation](docs/IsUlid.md)          |
| 29 | ✔ `isUrl`                  | Checks if the string is a valid URL.                                                                | [Documentation](docs/IsUrl.md)           |
| 30 | ✔ `isUuid`                 | Checks if the string is a valid UUID (Universally Unique Identifier).                               | [Documentation](docs/IsUuid.md)          |
| 31 | ✔ `kebab`                  | Converts the string to kebab case.                                                                  | [Documentation](docs/Kebab.md)           |
| 32 | ✔ `lcfirst`                | Converts the first character of the string to lowercase.                                            | [Documentation](docs/Lcfirst.md)         |
| 33 | ✔ `length`                 | Returns the length of the string.                                                                   | [Documentation](docs/Length.md)          |
| 34 | ✔ `limit`                  | Limits the length of the string to a specified number of characters.                                | [Documentation](docs/Limit.md)           |
| 35 | ✔ `lower`                  | Converts the string to lowercase.                                                                   | [Documentation](docs/Lower.md)           |
| 36 | ✔ `ltrim`                  | Removes whitespace from the beginning of the string.                                                | [Documentation](docs/Ltrim.md)           |
| 37 | `markdown`                 | Converts the string to Markdown format.                                                             | [Documentation](docs/Markdown.md)        |
| 38 | ✔ `mask`                   | Masks part of the string with a specified character.                                                | [Documentation](docs/Mask.md)            |
| 39 | ✔ `match`                  | Performs a regular expression match on the string.                                                  | [Documentation](docs/Match.md)           |
| 40 | ✔ `matchAll`               | Performs a global regular expression match on the string.                                           | [Documentation](docs/MatchAll.md)        |
| 41 | ✔ `isMatch`                | Checks if the string matches a specified pattern.                                                   | [Documentation](docs/IsMatch.md)         |
| 42 | ✔ `newLine`                | Replaces each occurrence of a newline character with a specified string.                            | [Documentation](docs/NewLine.md)         |
| 43 | ✔ `padBoth`                | Pads the string on both sides with a specified character to a specified length.                     | [Documentation](docs/PadBoth.md)         |
| 44 | ✔ `padLeft`                | Pads the string on the left side with a specified character to a specified length.                  | [Documentation](docs/PadLeft.md)         |
| 45 | ✔ `padRight`               | Pads the string on the right side with a specified character to a specified length.                 | [Documentation](docs/PadRight.md)        |
| 46 | ✔ `pipe`                   | Passes the string to a callback and returns the result.                                             | [Documentation](docs/Pipe.md)            |
| 47 | `plural`                   | Converts the string to plural form.                                                                 | [Documentation](docs/Plural.md)          |
| 48 | ✔ `position`               | Finds the position of the first occurrence of a substring in the string.                            | [Documentation](docs/Position.md)        |
| 49 | ✔ `prepend`                | Prepends a string or an array of strings to the beginning of the current string.                    | [Documentation](docs/Prepend.md)         |
| 50 | `remove`                   | Removes a specified substring from the string.                                                      | [Documentation](docs/Remove.md)          |
| 51 | ✔ `repeat`                 | Repeats the string a specified number of times.                                                     | [Documentation](docs/Repeat.md)          |
| 52 | ✔ `replace`                | Replaces occurrences of a specified substring with another substring.                               | [Documentation](docs/Replace.md)         |
| 53 | ✔ `replaceArray`           | Replaces occurrences of specified substrings with corresponding replacements.                       | [Documentation](docs/ReplaceArray.md)    |
| 54 | ✔ `replaceFirst`           | Replaces the first occurrence of a specified substring with another substring.                      | [Documentation](docs/ReplaceFirst.md)    |
| 55 | ✔ `replaceLast`            | Replaces the last occurrence of a specified substring with another substring.                       | [Documentation](docs/ReplaceLast.md)     |
| 56 | ✔ `replaceMatches`         | Replaces occurrences of a specified pattern with a callback result.                                 | [Documentation](docs/ReplaceMatches.md)  |
| 59 | ✔ `rtrim`                  | Removes whitespace from the end of the string.                                                      | [Documentation](docs/Rtrim.md)           |
| 60 | `scan`                     | Returns an array of all occurrences of a regular expression pattern in the string.                  | [Documentation](docs/Scan.md)            |
| 61 | `singular`                 | Converts the string to singular form.                                                               | [Documentation](docs/Singular.md)        |
| 62 | ✔ `slug`                   | Converts the string to a URL-friendly slug.                                                         | [Documentation](docs/Slug.md)            |
| 63 | ✔ `snake`                  | Converts the string to snake case.                                                                  | [Documentation](docs/Snake.md)           |
| 64 | `split`                    | Splits the string by a specified delimiter and returns an array of the parts.                       | [Documentation](docs/Split.md)           |
| 65 | `squish`                   | Reduces multiple consecutive whitespace characters to a single space.                               | [Documentation](docs/Squish.md)          |
| 66 | ✔ `start`                  | Adds a specified prefix to the beginning of the string.                                             | [Documentation](docs/Start.md)           |
| 67 | ✔ `startsWith`             | Checks if the string starts with a specified prefix.                                                | [Documentation](docs/StartsWith.md)      |
| 68 | ✔ `studly`                 | Converts the string to studly case.                                                                 | [Documentation](docs/Studly.md)          |
| 69 | ✔ `substr`                 | Returns a substring of the string starting from a specified position.                               | [Documentation](docs/Substr.md)          |
| 60 | ✔ `substrCount`            | Counts the number of occurrences of a substring in the string.                                      | [Documentation](docs/SubstrCount.md)     |
| 70 | ✔ `substrReplace`          | Replaces a portion of the string with a specified substring.                                        | [Documentation](docs/SubstrReplace.md)   |
| 71 | ✔ `swap`                   | Swaps the case of each character in the string.                                                     | [Documentation](docs/Swap.md)            |
| 72 | ✔ `take`                   | Returns the first n characters from the string.                                                     | [Documentation](docs/Take.md)            |
| 73 | `tap`                      | Passes the string to a callback and returns the string.                                             | [Documentation](docs/Tap.md)             |
| 74 | `test`                     | Performs a regular expression match on the string and returns a boolean.                            | [Documentation](docs/Test.md)            |
| 75 | ✔ `title`                  | Converts the first character of each word in the string to uppercase.                               | [Documentation](docs/Title.md)           |
| 76 | ✔ `trim`                   | Removes whitespace from the beginning and end of the string.                                        | [Documentation](docs/Trim.md)            |
| 77 | ✔ `ucfirst`                | Converts the first character of the string to uppercase.                                            | [Documentation](docs/Ucfirst.md)         |
| 78 | ✔ `ucsplit`                | Splits the string into an array of words.                                                           | [Documentation](docs/Ucsplit.md)         |
| 79 | ✔ `upper`                  | Converts the string to uppercase.                                                                   | [Documentation](docs/Upper.md)           |
| 80 | ✔ `when`                   | Executes a callback if a given condition is true.                                                   | [Documentation](docs/When.md)            |
| 81 | `whenContains`             | Executes a callback if the string contains a specified substring.                                   | [Documentation](docs/WhenContains.md)    |
| 82 | `whenContainsAll`          | Executes a callback if the string contains all of the specified substrings.                         | [Documentation](docs/WhenContainsAll.md) |
| 83 | `whenEmpty`                | Executes a callback if the string is empty.                                                         | [Documentation](docs/WhenEmpty.md)       |
| 84 | `whenNotEmpty`             | Executes a callback if the string is not empty.                                                     | [Documentation](docs/WhenNotEmpty.md)    |
| 85 | `whenStartsWith`           | Executes a callback if the string starts with a specified prefix.                                   | [Documentation](docs/WhenStartsWith.md)  |
| 86 | `whenEndsWith`             | Executes a callback if the string ends with a specified suffix.                                     | [Documentation](docs/WhenEndsWith.md)    |
| 87 | `whenExactly`              | Executes a callback if the string is exactly equal to a specified value.                            | [Documentation](docs/WhenExactly.md)     |
| 88 | `whenNotExactly`           | Executes a callback if the string is not                                                            | [Documentation](docs/WhenNotExactly.md)  |
| 89 | `whenIs`                   | Executes a callback if the string is equal to a specified value.                                    | [Documentation](docs/WhenIs.md)          |
| 90 | `whenIsAscii`              | Executes a callback if the string contains only ASCII characters.                                   | [Documentation](docs/WhenIsAscii.md)     |
| 91 | `whenIsUlid`               | Executes a callback if the string is a valid ULID.                                                  | [Documentation](docs/WhenIsUlid.md)      |
| 92 | `whenIsUuid`               | Executes a callback if the string is a valid UUID.                                                  | [Documentation](docs/WhenIsUuid.md)      |
| 93 | `whenTest`                 | Executes a callback if a regular expression test on the string is true.                             | [Documentation](docs/WhenTest.md)        |
| 94 | ✔ `wordCount`              | Counts the number of words in the string.                                                           | [Documentation](docs/WordCount.md)       |
| 95 | ✔ `words`                  | Splits the string into an array of words.                                                           | [Documentation](docs/Words.md)           |
| 72 | ✔ `wordWrap`               | Wraps the string at a specified length with a specified line ending.                                | [Documentation](docs/WordWrap.md)        |

## Contributing

Contributions to `@akcybex/jsr` are welcome. Please refer to the contributing guidelines for more information.

## License

This project is licensed under the [MIT License](LICENSE).
