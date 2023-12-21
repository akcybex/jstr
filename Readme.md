# JSTR

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
![File Size][filesize-url]
[![CDNJS][cdnjs-image]][cdnjs-url]

> `@akcybex/jsr` is a JavaScript library inspired by [Laravel 'Fluent String'](https://laravel.com/docs/10.x/strings#fluent-strings) offering a chainable API for streamlined string manipulation and facilitating common string operations in javascript with enhanced expressiveness.

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
import { jstr } from '@akcybex/jsr';

const result = jstr('hello').repeat(3).upper().toString();
console.log(result); // Outputs: 'HELLOHELLOHELLO'
```

## Usage with CDN

For browser-based projects, you can use the CDN link:

```html
<script src="https://unpkg.com/@akcybex/jsr:"></script>
```

After including the script, `jstr` will be available globally:

```html
<script>
    const result = jstr('hello').repeat(3).upper().toString();
    console.log(result); // Outputs: 'HELLOHELLOHELLO'
</script>
```

## Examples

Here are some examples of using `@akcybex/jsr`:

### Repeating a String

```javascript
const repeated = jstr('a').repeat(5).toString();
console.log(repeated); // Outputs: 'aaaaa'
```

### Converting to Uppercase

```javascript
const upper = jstr('hello').upper().toString();
console.log(upper); // Outputs: 'HELLO'
```

### Converting to Lowercase

```javascript
const lower = jstr('HELLO').lower().toString();
console.log(lower); // Outputs: 'hello'
```

### Capitalizing Each Word

```javascript
const capitalized = jstr('hello world').capitalize().toString();
console.log(capitalized); // Outputs: 'Hello World'
```

## Contributing

Contributions to `@akcybex/jsr` are welcome. Please refer to the contributing guidelines for more information.

## License

This project is licensed under the [MIT License](LICENSE).
