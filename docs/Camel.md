# Camel

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("foo_bar").camel().toString();
console.log(result); // Outputs: 'fooBar'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.camel("foo bar");

console.log(result); // Outputs: 'fooBar'
```
