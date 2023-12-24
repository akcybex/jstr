# After

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("\\App\\Http\\Controllers\\Controller").afterLast("\\");
console.log(result); // Outputs: 'Controller'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("abc123abc456abc789").afterLast("abc");

console.log(result); // Outputs: '789'
```
