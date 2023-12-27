# Before Last

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("\\App\\Http\\Controllers\\Controller")
  .beforeLast("\\")
  .toString();
console.log(result); // Outputs: '\\App\\Http\\Controllers'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.beforeLast("abc123abc456abc789", "abc");
console.log(result); // Outputs: 'abc123abc456'
```
