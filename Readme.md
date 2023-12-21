# JSTR

[![NPM Version](https://img.shields.io/npm/v/@akcybex/jstr.svg)](https://www.npmjs.com/package/@akcybex/jstr)
[![NPM Downloads](https://img.shields.io/npm/dm/@akcybex/jstr.svg)](https://www.npmjs.com/package/@akcybex/jstr)
[![File Size](https://img.shields.io/github/size/akcybex/jstr/src/main.ts)](https://github.com/akcybex/jstr)

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
import {jstr} from '@akcybex/jsr';

const result = jstr('hello').repeat(3).upper().toString();
console.log(result); // Outputs: 'HELLOHELLOHELLO'
```

## Usage with CDN

For browser-based projects, you can use the CDN link:

```html

<script src="https://unpkg.com/@akcybex/jsr:{version}/jstr.es.js"></script>
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
| JSTR String Methods   | Description |
|-----------------------|-------------|
| `JStr.after`          |             |
| `JStr.afterLast`      |             |
| `JStr.ascii`          |             |
| `JStr.before`         |             |
| `JStr.beforeLast`     |             |
| `JStr.between`        |             |
| `JStr.betweenFirst`   |             |
| `JStr.camel`          |             |
| `JStr.charAt`         |             |
| `JStr.contains`       |             |
| `JStr.containsAll`    |             |
| `JStr.endsWith`       |             |
| `JStr.excerpt`        |             |
| `JStr.finish`         |             |
| `JStr.headline`       |             |
| `JStr.inlineMarkdown` |             |
| `JStr.is`             |             |
| `JStr.isAscii`        |             |
| `JStr.isJson`         |             |
| `JStr.isUlid`         |             |
| `JStr.isUrl`          |             |
| `JStr.isUuid`         |             |
| `JStr.kebab`          |             |
| `JStr.lcfirst`        |             |
| `JStr.length`         |             |
| `JStr.limit`          |             |
| `JStr.lower`          |             |
| `JStr.markdown`       |             |
| `JStr.mask`           |             |
| `JStr.orderedUuid`    |             |
| `JStr.padBoth`        |             |
| `JStr.padLeft`        |             |
| `JStr.padRight`       |             |
| `JStr.password`       |             |
| `JStr.plural`         |             |
| `JStr.pluralStudly`   |             |
| `JStr.position`       |             |
| `JStr.random`         |             |
| `JStr.remove`         |             |
| `JStr.repeat`         |             |
| `JStr.replace`        |             |
| `JStr.replaceArray`   |             |
| `JStr.replaceFirst`   |             |
| `JStr.replaceLast`    |             |
| `JStr.replaceMatches` |             |
| `JStr.replaceStart`   |             |
| `JStr.replaceEnd`     |             |
| `JStr.reverse`        |             |
| `JStr.singular`       |             |
| `JStr.slug`           |             |
| `JStr.snake`          |             |
| `JStr.squish`         |             |
| `JStr.start`          |             |
| `JStr.startsWith`     |             |
| `JStr.studly`         |             |
| `JStr.substr`         |             |
| `JStr.substrCount`    |             |
| `JStr.substrReplace`  |             |
| `JStr.swap`           |             |
| `JStr.take`           |             |
| `JStr.title`          |             |
| `JStr.toHtmlString`   |             |
| `JStr.ucfirst`        |             |
| `JStr.ucsplit`        |             |
| `JStr.upper`          |             |
| `JStr.ulid`           |             |
| `JStr.uuid`           |             |
| `JStr.wordCount`      |             |
| `JStr.wordWrap`       |             |
| `JStr.words`          |             |
| `JStr.wrap`           |             |

### Fluent Strings

| JSTR Fluent String Methods | Description                 |
|----------------------------|-----------------------------|
| `after`                    |                             |
| `afterLast`                |                             |
| `append`                   |                             |
| `ascii`                    |                             |
| `basename`                 |                             |
| `before`                   |                             |
| `beforeLast`               |                             |
| `between`                  |                             |
| `betweenFirst`             |                             |
| `camel`                    |                             |
| `charAt`                   |                             |
| `classBasename`            |                             |
| `contains`                 |                             |
| `containsAll`              |                             |
| `dirname`                  |                             |
| `endsWith`                 |                             |
| `excerpt`                  |                             |
| `exactly`                  |                             |
| `explode`                  |                             |
| `finish`                   |                             |
| `headline`                 |                             |
| `inlineMarkdown`           |                             |
| `is`                       |                             |
| `isAscii`                  |                             |
| `isEmpty`                  |                             |
| `isNotEmpty`               |                             |
| `isJson`                   |                             |
| `isUlid`                   |                             |
| `isUrl`                    |                             |
| `isUuid`                   |                             |
| `kebab`                    |                             |
| `lcfirst`                  |                             |
| `length`                   |                             |
| `limit`                    |                             |
| `lower`                    |                             |
| `ltrim`                    |                             |
| `markdown`                 |                             |
| `mask`                     |                             |
| `match`                    |                             |
| `matchAll`                 |                             |
| `isMatch`                  |                             |
| `newLine`                  |                             |
| `padBoth`                  |                             |
| `padLeft`                  |                             |
| `padRight`                 |                             |
| `pipe`                     |                             |
| `plural`                   |                             |
| `position`                 |                             |
| `prepend`                  |                             |
| `remove`                   |                             |
| `repeat`                   |                             |
| `replace`                  |                             |
| `replaceArray`             |                             |
| `replaceFirst`             |                             |
| `replaceLast`              |                             |
| `replaceMatches`           |                             |
| `replaceStart`             |                             |
| `replaceEnd`               |                             |
| `rtrim`                    |                             |
| `scan`                     |                             |
| `singular`                 |                             |
| `slug`                     |                             |
| `snake`                    |                             |
| `split`                    |                             |
| `squish`                   |                             |
| `start`                    |                             |
| `startsWith`               |                             |
| `studly`                   |                             |
| `substr`                   |                             |
| `substrReplace`            |                             |
| `swap`                     |                             |
| `take`                     |                             |
| `tap`                      |                             |
| `test`                     |                             |
| `title`                    |                             |
| `trim`                     |                             |
| `ucfirst`                  |                             |
| `ucsplit`                  |                             |
| `upper`                    |                             |
| `when`                     |                             |
| `whenContains`             |                             |
| `whenContainsAll`          |                             |
| `whenEmpty`                |                             |
| `whenNotEmpty`             |                             |
| `whenStartsWith`           |                             |
| `whenEndsWith`             |                             |
| `whenExactly`              |                             |
| `whenNotExactly`           |                             |
| `whenIs`                   |                             |
| `whenIsAscii`              |                             |
| `whenIsUlid`               |                             |
| `whenIsUuid`               |                             |
| `whenTest`                 |                             |
| `wordCount`                |                             |
| `words`                    |                             |

## Contributing

Contributions to `@akcybex/jsr` are welcome. Please refer to the contributing guidelines for more information.

## License

This project is licensed under the [MIT License](LICENSE).
