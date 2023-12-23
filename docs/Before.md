# Before

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const jstr = new JStr("Hello world");
const result = jstr.before("world");
console.log(result); // Outputs: 'Hello'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("This is my name").before("my name");

console.log(result); // Outputs: 'This is '
```
