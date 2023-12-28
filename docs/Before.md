# Before

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello world").before("world").toString();
console.log(result); // Outputs: 'Hello'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.before("This is my name", "my name");

console.log(result); // Outputs: 'This is '
```
