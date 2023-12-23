# Before

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const jstr = new JStr("\\App\\Http\\Controllers\\Controller");
const result = jstr.beforeLast("\\");
console.log(result); // Outputs: '\\App\\Http\\Controllers'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("abc123abc456abc789").afterLast("abc");
console.log(result); // Outputs: 'abc123abc456'
```
