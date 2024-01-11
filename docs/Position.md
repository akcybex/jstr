# position

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello, world!").position("world");
console.log(result); // Outputs: 7
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello, world!").position("o");

console.log(result); // Outputs: 4
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.position("Hello, world! hello world", "world", 10);
console.log(result); // Outputs: 20
```
