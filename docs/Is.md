# Is

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const pattern = "foo*";
const value = "foobar";
const result = JStr.of(value).is(pattern);
console.log(result); // Outputs: true
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const pattern = "baz*";
const value = "foobar";
const result = JStr.is(pattern, value);

console.log(result); // Outputs: false
```
