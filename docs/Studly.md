# Studly

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("foo_bar").studly().toString();
console.log(result); // Outputs: 'FooBar'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.studly("foo bar");

console.log(result); // Outputs: 'FooBar'
```
