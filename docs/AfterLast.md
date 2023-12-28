# After Last

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("\\App\\Http\\Controllers\\Controller")
  .afterLast("\\")
  .toString();
console.log(result); // Outputs: 'Controller'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.afterLast("abc123abc456abc789", "abc");

console.log(result); // Outputs: '789'
```
