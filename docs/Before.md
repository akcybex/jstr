# Before

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("Hello world").before("world");
console.log(result); // Outputs: 'Hello'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("This is my name").before("my name");

console.log(result); // Outputs: 'This is '
```
