# isAscii

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("úá").isAscii();
console.log(result); // Outputs: false
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.ascii("abcdef");

console.log(result); // Outputs: true
```
