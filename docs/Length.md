# Length

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello World").length();
console.log(result); // Outputs: 11
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.length("Hello World");

console.log(result); // Outputs: 11
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.length("Hello World", "utf-8");

console.log(result); // Outputs: 11
```
