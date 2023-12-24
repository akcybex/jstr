# Before

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("[a]bc[d]").betweenFirst("[", "]").toString();
console.log(result); // Outputs: 'a'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("[a]bcd").betweenFirst("[", "");

console.log(result); // Outputs: ''
```
